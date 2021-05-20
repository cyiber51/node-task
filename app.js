require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//My routes
const userRoutes = require('./routes/user');

//DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
    console.log("DB connected...");
    });

//Middlewares
app.use(bodyParser.json());

//My Routes
app.use('/api', userRoutes);

//PORT
const port = process.env.PORT || 7000
//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
