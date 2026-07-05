require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcome to PolicyPal Backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});