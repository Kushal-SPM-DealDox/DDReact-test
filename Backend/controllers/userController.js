const db = require("../models");
const User = db.user
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      res.status(200).json({ status: "Failed", message: "All Fields must be filled!" });

    }
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
      res.status(200).json({ status: "Failed", message: "Incorrect email" });
    }
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      console.log(match + "--------------------------------------------");
      if (!match) {
        res.status(200).json({ status: "Failed", message: "Incorrect Password" });

      } else {
        // create a token
        const token = createToken(user.user_id);
        res.status(200).json({ status: "Success", message: "Successfully Loggedin!", email, token, user });
      }
    }

  } catch (error) {
    console.log(error)
    res.status(200).json({ status: "Failed", message: "Please try after sometime! " });

  }
}

// signup a user
const signupUser = async (req, res) => {
  console.log(req.body)
  const { full_name, email, phone_number, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({ full_name, email, phone_number, password: hash });

    // create a token
    const token = createToken(user._id)
    if (user) {
      res.status(200).json({ status: "Success", message: "Successfully Registered!" });
    } else {
      res.status(200).json({ status: "Failed", message: "Failed to Registered!" });

    }
  } catch (error) {
    res.status(200).json({ status: "Failed", message: error.message });
  }
}

//API to Scan Authenticator APP
const generatedSecrets = {}; // Store generated secrets for users
const generateQrcode = async (req, res) => {
  const userId = req.query.userId; // You need to pass the user's unique identifier here
  console.log(userId);
  if (!generatedSecrets[userId]) {
    generatedSecrets[userId] = speakeasy.generateSecret({
      name: 'DEALDOX',
    });
  }

  const secret = generatedSecrets[userId];
  qrcode.toDataURL(secret.otpauth_url, function (error, data) {
    res.json({ data, secret });
  });
};

//API to verify the OTP
const validate = async (req, res) => {
  const userId = req.query.userId;
  const { otp, secret } = req.body;
  console.log(req.body);
  var verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'ascii',
    token: otp
  });

  console.log(verified);
  if (verified) {
    res.json({ message: 'OTP validated successfully and secret updated' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }

};


module.exports = { signupUser, loginUser, generateQrcode, validate }