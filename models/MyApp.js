const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyAppSchema = new Schema({
    id: Number,
    name: String,
})

const MyApp = mongoose.model("MyApp", MyAppSchema)



module.exports = MyApp;