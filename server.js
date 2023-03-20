const express = require ("express");
const path = require ("path");
const fs = require("fs");
const app = express();
const PORT = process.env.prot || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Get Route for homepage
app.get("/", (req,res) =>
res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Get Route for notes page
app.get("/notes", (req,res) =>
res.sendFile(path.join(__dirname, "/public/notes.html"))
);


app.listen(PORT, () => {
    console.log(`app server is listening on http://localhost/${PORT}`);
}
);