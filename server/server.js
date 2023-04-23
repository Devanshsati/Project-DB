const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/testDB';

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Success");
}

app.use(cors());
app.use(express.json());

app.use('./server', require('./snippets'));

app.get('/', (req, res) => {
    res.json({ message: "Hello from server! nice to see yoi" });
});

app.listen(process.env.PORT || 3636, () => {
    console.log(`server is running on port ${process.env.PORT || 3636}`);
});

connectToMongo();