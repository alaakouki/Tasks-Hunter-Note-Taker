const express = require ("express");
const path = require ("path");
const app = express();
const PORT = process.env.prot || 3001;

const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// // Get Route for homepage
// app.get("/", (req,res) =>
// res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// // Get Route for notes page
// app.get("/notes", (req,res) =>
// res.sendFile(path.join(__dirname, "/public/notes.html"))
// );

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => {
    console.log(`app server is listening on http://localhost:${PORT}`);
}
);