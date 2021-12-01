const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Kushal:Kushal@cluster0.5pow1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection succesfull");
}).catch((err) => {
    console.log(err);
})