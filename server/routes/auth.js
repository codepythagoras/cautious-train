import { compare, hash } from "bcrypt";
import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth.js";
const auth = Router();

auth.post("/register", async (req, res) => {
  try {
    const refUsername = req.query.ref;

    console.log("username: ", refUsername);

    const refUser = await User.findOne({ username: refUsername });

    if (refUser) {
      refUser.referral = refUser.referral + 1;
      await refUser.save();
    }

    const emailUsed = await User.findOne({ email: req.body.email });
    const userUsed = await User.findOne({ username: req.body.username });
    if (emailUsed && userUsed) {
      return res.status(203).json({
        status: 203,
        msg: "Email and username  already in use , Try login again",
      });
      // return console.log(`Email already in use ${email}`)
    }
    if (emailUsed) {
      return res.status(203).json({
        status: 203,
        msg: "Email already used",
      });
      // return console.log(`Email already in use ${email}`)
    }

    if (userUsed) {
      return res.status(203).json({
        status: 203,
        msg: "Username already exists",
      });
    }

    const { username, email, password } = req.body;

    const hashedPassword = await hash(password, 12);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: 1000 * 60 * 60 * 24 * 365,
      }
    );
    // save user token
    newUser.token = token;
    res
      .cookie("jwt", token, {
        httpOnly: true,
        maxAge: 365 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(newUser);
  } catch (err) {
    console.log(err);
  }
});

auth.get("/getUser", async (req, res) => {
  const id = req.query._id;

  const found = await User.findById(id);

  if (!found) {
    return res.status(404).json({ msg: "No user with that id" });
  }

  return res.status(200).json(found);
});

auth.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const auth = await compare(password, user.password);
    if (auth) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: 1000 * 60 * 60 * 24 * 365,
        }
      );

      // save user token
      user.token = token;
      return res
        .cookie("jwt", token, {
          httpOnly: true,
          maxAge: 365 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json(user);
    }
    res.status(203).json({ msg: "incorrect password" });
  }
  res.status(203).json({ msg: "email is incorrect" });
});

auth.get("/logout", (req, res) => {
  res.clearCookie("jwt");
});

export default auth;
