const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");
const userService = require("../services/user-service");

exports.updateUser = catchError(async (req, res, next) => {
    if (!req.body.firstName) {
        createError('firstname is required', 400)
    }
    if (!req.body.lastName) {
        createError('lastname is required', 400)
    }
    if (!req.body.mobile) {
        createError('mobile is required', 400)
    }

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile
    };

    const updatedUser = await userService.updateUserById(data, req.user.id);

    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user: updatedUser
    });
});