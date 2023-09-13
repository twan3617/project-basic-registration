const express = require("express");
const router = express.Router();
const ejs = require("ejs");

module.exports = router; 

// *** Basic functionality map *** // 
// Get one user, get all users, create one user, delete one user, update user
// *** *** //

// *** Displaying the front register page *** //

// *** Display the front page *** // 

router.get("/", async (req, res) => {
    // const page = "../views/registration-page.ejs";
    // const html = await ejs.renderFile(page); // figure out how to do templating with object data
    res.status(200).render("registration-page", { firstName: "Tony" });
})


// *** Get one user *** // 
router.get("/:id", async (req, res) => {
    //
})


// *** Get all users *** // 

router.get("/all", async (req, res) => {
    //
})

// *** Create one user *** // 

router.post("/create", async (req, res) => {
    // 
})


// *** Delete one user *** // 

router.delete("/:id", async (req, res) => {
    //
})

// *** Update one user *** // 

router.patch("/:id", async (req, res) => {
    //
})