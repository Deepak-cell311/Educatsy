const User = require("../models/User")    // user schema from models
const bcrypt = require('bcrypt')
 
/*This controller is send to the userRoute.js */

/* Sign up */


const signup = async (req, res) => {
     
     try {
          const {username, email, password} = req.body
          const users = await User.findOne({ email })
          if (users) {
               return res.status(400).json({message: "user already exist"})
          }
          const hashPassword = await bcrypt.hash(password, 10)
          const user = new User({
               username, email, password: hashPassword                  // this is written as "username: username", "email: email", "password: HashPassword"
          })
          await user.save()                                             // when the user change manually in the model the save method is used
          res.status(200).json({message: "Created user successfully", user})
     }
     
      catch (error) {
          console.log("Error:" + error.message)
          res.status(500).json(error)
     }
}

/* Login */

const login = async (req, res) => {
     try {
          let { email, password } = req.body
          const user = await User.findOne({ email })
          const isMatch = await bcrypt.compare(password, user.password)    //  password is user entered password and users.password is a hash password 
          if (!user || !isMatch) return res.status(400).json({ message: "Invalid credentials" })
          else {res.status(200).json({ message: "Login successful", user: { _id: user._id, username: user.username, email: user.email } })}
         
     } catch (error) {
          console.log("Error:" + error.message);
          res.status(500).json(error)
     }
}


module.exports = {signup, login}