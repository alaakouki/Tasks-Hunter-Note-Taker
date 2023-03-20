const fs = require("fs");
const { default: ShortUniqueId } = require("short-unique-id");
const id = new ShortUniqueId ({length:7})
const router = require("express").Router();

// // To read db.json file and return all saved notes as JSON
// router.get("/api/notes", (req,res) => {
// const data = fs.readFileSync("./db.db.json");
// res.json(JSON.parse(data));
// });

// To read db.json file and return all saved notes as JSON
router.get("/api/notes", (req,res) => {
readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});



router.post("/api/notes", (req,res) => {
const notes = JSON.parse(fs.readFileSync("./db/db.json"));
// const addNote = req.body;
// addNote.id = id();

const addNote = {
    title : req.body.title,
    text : req.body.text,
    id: id(),
};

notes.push(addNote);
fs.writeFileSync("./db/db.json", JSON.stringify(notes));
res.json(notes);
});

router.delete("/api/notes/:id", (req,res) => {
const notes = JSON.parse(fs.readFileSync("./db/db.json"));
const eraseNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
fs.writeFileSync("./db/db.json", JSON.stringify(eraseNote));
res.json(eraseNote);
});

module.exports = router;