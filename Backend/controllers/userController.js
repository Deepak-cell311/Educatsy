const User = require("../models/User"); // user schema from models
const bcrypt = require("bcrypt");

/*This controller is send to the userRoute.js */

/*-------------
   |Reset Password|
-------------*/

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;         // provided by user

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {       // if user is not found
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashPassword;         // this user's password is taken from database
    await user.save();


    /* use for checking and error handling for password (optional)  */
    const updatedUser = await User.findOne({ email });
    if (updatedUser.password !== hashPassword) {
      throw new Error("Password update failed");
    }

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res
      .status(500)
      .json({ message: "An error occurred while resetting password" });
  }
};

/* Sign up */

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const users = await User.findOne({ email });
    if (users) {
      return res.status(400).json({ message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashPassword, 
    });
    await user.save(); 
    res.status(200).json({ message: "Created user successfully", user });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json(error);
  }
};

/* Login */

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password); //  password is user entered password and users.password is a hash password
    if (!user || !isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    else {
      res
        .status(200)
        .json({
          message: "Login successful",
          user: { _id: user._id, username: user.username, email: user.email },
        });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json(error);
  }
};

module.exports = { signup, login, resetPassword };
