const express = require('express');
const app = express();
const routes = require('./routes')
const mongoose = require('mongoose');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.use(routes);
const PORT = process.env.PORT || 3001;
app.listen(PORT);



mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googleBooks", {
        useMongoClient: true
    }
);