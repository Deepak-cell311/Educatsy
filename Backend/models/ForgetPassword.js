const mongoose = require('mongoose')
const ForgetPasswordModel = new mongoose.Schema({
     password: {
          type: String,
          required: true
     },
     cpassword: {
          type: String,
          required: true
     },
})

const ForgetPassword = mongoose.model('ForgetPassWord', ForgetPasswordModel)
module.exports = ForgetPassword