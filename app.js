const express = require("express");
const path = require("path");
const app = express();
require("./conn");
const Register = require("./models/register")
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "public")

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(static_path));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/register", async (req, res) => {
try {
    const registerHp = new Register({
        fullname: req.body.fullname,
        fathername: req.body.fathername,
        email: req.body.email,
        phone: req.body.phone,
        Company: req.body.Company,
        address: req.body.address,
        state: req.body.state,
        district: req.body.district,
        pincode: req.body.pincode,
        cast: req.body.cast,
        pump: req.body.pump,
        dealership: req.body.dealership,
        message: req.body.message
    })

    const registered = await registerHp.save();
    res.status(201).render(index);
} catch (error) {
    res.status(400).send(error);
}
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})