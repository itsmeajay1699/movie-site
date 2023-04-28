const express = require("express");
const { User } = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/hashPassword");
const jwt = require("jsonwebtoken");
const registerController = (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  // check if user already exists

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "User already exists" });
    }
    const user = new User({
      name,
      email,
      password: hashPassword(password),
    });
    user
      .save()
      .then((user) => {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.json({
          user: user,
          token: token,
          message: "user created successfully",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const loginController = (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(302).json({ error: "Please add email" });
    }
    if (!password) {
      return res.status(302).json({ error: "Please add password" });
    }
    User.findOne({ email: email })
      .then((savedUser) => {
        if (!savedUser) {
          return res.status(302).json({ error: "Invalid email" });
        }
        const isMatch = comparePassword(password, savedUser.password);
        if (isMatch) {
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET
          );
          return res.json({
            user: savedUser,
            token: token,
            message: "Successfully signed in",
          });
        } else {
          return res.status(302).json({ error: "Invalid password" });
        }
      })
      .catch((err) => {
        res.status(302).json({ error: "Invalid email or password" });
      });
  } catch (err) {
    console.log(err);
  }
};

const protectHomePage = (req, res) => {
  res.status(202).send({
    ok: true,
  });
};

module.exports = { registerController, loginController, protectHomePage };

//dno9b1bLpn1IQMRR
