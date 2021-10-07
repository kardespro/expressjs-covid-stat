const express = require("express");
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req,res) => {
res.render("home");
});


console.log(`Hazır`);
app.listen(6060)
