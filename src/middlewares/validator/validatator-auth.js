const Joi = require("joi");
const validate = require('./validatator')

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    "string.empty": "first name is required",
    "any.required": "first name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "last name is required",
    "any.required": "last name is required",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "invalid email address ",
    "any.required": "email address is required",
  }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "invalid mobile number",
      "any.required": "mobile number is required",
    }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
      "any.required": "password is required",
    }),

  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "confirm password is required",
      "any.only": "password and confirm password did not match",
      "any.required": "confirm password is required",
    })
    .strip(),
});

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    'string.empty' : 'email is required',
    'any.required' : 'email is required'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'password is required',
    'any.required': 'password is required'
  })
})
  
exports.validateRegister = validate(registerSchema)
exports.validateLogin = validate(loginSchema)