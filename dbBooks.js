const mongoose = require("mongoose");
const db = require("./models/book.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googleBooks"
);

const bookSchema = [{
        title: "Applied Wisdom",
        authors: ["James C. Morgan"],
        description: "Wisdom book.",
        image: "",
        link: ""
    },
    {
        title: "Photography",
        authors: ["Henry Horenstein"],
        description: "Topic Of Photography",
        image: "",
        link: ""
    },
    {
        title: "The Hunger Game",
        authors: ["Peeta"],
        description: "biography",
        image: "",
        link: ""
    },
    {
        title: "Gregor The Overlander",
        authors: ["Suzanne Collins"],
        description: "Horror",
        image: "",
        link: ""
    }
]