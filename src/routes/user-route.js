const express = require('express');

const userController = require('../controllers/user-controller');


const router = express.Router();

router.patch('/edit', userController.updateUser);

module.exports = router;