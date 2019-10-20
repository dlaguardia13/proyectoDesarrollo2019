const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const UserController = require("../controllers/user.controller")
users.use(cors())


users.post('/registro',  UserController.createOne);

users.post('/login', UserController.login);

module.exports = users







    
