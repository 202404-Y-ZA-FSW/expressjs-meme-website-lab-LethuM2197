const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();

// Middleware to parse urlencoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Set EJS as the view engine and configure views directory
app.set("view engine", "ejs");
app.set("views", "views");

// Mock data for memes
const memes = [
    {
        name: "Memes that make us smile",
        imgURL: "https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg",
        price: "$20.00 - $30.00"
    },
    {
        name: "Programmer memes",
        imgURL: "https://aprogrammerlife.com/images/pictuers/programmers_looking_at_programming_memes.jpg",
        price: "$10.00"
    }
];

// Route to render index page with memes data
app.get("/", (req, res) => {
    res.render("index", { memes });
});

// Route to render form for adding a new meme
app.get("/add-meme", (req, res) => {
    res.render("add-meme");
});

// Route to handle POST request for adding a new meme
app.post("/memes", (req, res) => {
    // Extract data from request body
    const { name, imgURL, price } = req.body;

    // Create a new meme object
    const newMeme = {
        name: name,
        imgURL: imgURL,
        price: price
    };

    // Add the new meme to the memes array
    memes.push(newMeme);

    // Redirect back to the index page after adding the meme
    res.redirect("/");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Export the app for testing or other uses
module.exports = app;


// got help from searching from google , and my hub mate 