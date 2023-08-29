const bcryptjs = require("bcryptjs");
// Require Model
const User = require("../models/userShema");
const isAuth = require("../middleware/authenticate");
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const userShema = require("../models/userShema");

// Registration
router.post("/register", async (req, res) => {
  try {
    // Get body or Data
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const createUser = new User({
      username,
      email,
      password,
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find User if Exist
    const user = await User.findOne({ email: email });
    console.log(user);
    // Verify Password
    
    if (user) {
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Invalid Password" });
      } else {
        // Generate Token Which is Define in User Schema
        const token = await user.generateToken();
        res.status(200).send({ searchedUser: user, token: `Bearer ${token}` });
      }
    } else {
      return res.status(400).send({ msg: "Invalid Email" });
    }

    // else if (user.authorize === false) {
    //    res.status(400).send({ msg: "User Blocked" });
    // }
    // else if (!isMatch) {
    //    res.status(400).send({ msg: "Invalid Credentials" });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not login" });
  }
});

router.get("/auth", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body);
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("user updated");
  } catch (error) {
    res.status(400).send({ message: "No user with this id" });
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ allusers: result });
  } catch (error) {
    console.log(error);
  }
});
router.put("/apply/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } }
    // { _id: req.params.id },
    // { $addToSet: { formulaire1: req.body } }
  );
});

//second form
router.put("/apply2/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire2: req.body } }
  );
});
//third form
router.put("/apply3/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire3: req.body } }
  );
});
//fourth form
router.put("/apply4/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire4: req.body } }
  );
});
//fifth form
router.put("/apply5/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire5: req.body } }
  );
});
//6 form
router.put("/apply6/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire6: req.body } }
  );
});
//7 form
router.put("/apply7/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { formulaire7: req.body } }
  );
});

module.exports = router;
