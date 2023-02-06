import express from "express";
import auth from "./routes/auth.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import verifyToken from "./middleware/auth.js";
import cors from "cors";
import User from "./models/User.js";

(async () => {
  await config();
  await mongoose
    .connect(
      process.env.dbURI
      // "mongodb://localhost:27017/globalcrypto"
    )
    .then(() => {
      console.log("Database Connected");
    });

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());
  app.set("view engine", "ejs");
  app.use(
    cors({
      origin: ["https://global-crypto.netlify.app/", "http://localhost:3000"],
    })
  );

  app.use("/auth", auth);

  app.get("/me", verifyToken, (req, res) => {
    return res.status("201").send("Authenticated");
  });

  app.get("/melaninadmin", (req, res) => {
    res.render("melaninadmin");
  });
  app.get("/users", async (req, res) => {
    const allUsers = await User.find({});
    res.json(allUsers);
  });
  app.post("/melaninadmin", async (req, res) => {
    const { email, deposits, earnings } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status("404").json({ data: null });
    }
    if (deposits != null) {
      await user.deposits.push(deposits);
    }
    if (earnings != null) {
      await user.earnings.push(earnings);
    }
    const allDeposits = user.deposits.reduce(function (a, b) {
      return a + b;
    }, 0);
    const allEarnings = user.earnings.reduce(function (a, b) {
      return a + b;
    }, 0);
    user.accountBal = allDeposits + allEarnings;
    user.save();
    return res.status(200).json(user);
  });
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
})();
