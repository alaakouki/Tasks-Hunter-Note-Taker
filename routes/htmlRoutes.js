const path = require("path");
const router = require("express").Router();

// To return notes.html file to user
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// To return index.html file to user
router.get("*", (req,res) => {
res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = router;