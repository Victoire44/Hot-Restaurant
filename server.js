var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Gab",
        phone: "123-456-7685",
        email: "gab@gmail.com",
        id: 49
    },
    {
        name: "Victoire",
        phone: "123-436-7285",
        email: "victoire@gmail.com",
        id: 145,
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "hotRestaurant.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});


app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
})

app.post("/api/reservations", function(req, res) {

    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
   
    console.log(newcharacter);
   
    reservations.push(newcharacter);
   
    res.json(newcharacter);
   });



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});