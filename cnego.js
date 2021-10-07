const express = require("express");
const app = express()
const axi = require("axios");

app.set('view engine', 'ejs')

app.get("/", (req,res) => {
res.render("home");
});
app.post("/api", async(req,res) => {
var b = req.body.nego;
var resnego = await axi.get(`https://disease.sh/v3/covid-19/countries/${b}`)
return res.json({
ölüm: resnego.deaths,
aktiv: resnego.active,
recovered: resnego.recovered,
activePerOneMillion: resnego.activePerOneMillion
});
});

console.log(`Hazır`);
app.listen(6060)
