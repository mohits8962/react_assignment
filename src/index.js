const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
app.use(express.json());

mongoose.connect("mongodb+srv://mohits8962:m26u72h8@react_assignment-database.f1gfhiv.mongodb.net/react_assignment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(cors())
app.use('/', route)

app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
});