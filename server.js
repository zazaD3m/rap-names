const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());
const rappers = {
    "21 savage": {
        birthName: "savage Name",
        birthLocation: "savage Location",
        age: 29,
    },
    "chance the rapper": {
        birthName: "chance Name",
        birthLocation: "chance Location",
        age: 22,
    },
    unknown: {
        birthName: "unknown",
        birthLocation: "unknown",
        age: 0,
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
    res.json(rappers);
});

app.get("/api/:rapperName", (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers["unknown"]);
    }
});

app.listen(PORT, () => {
    console.log(`The server is now running on port: ${PORT}`);
});
