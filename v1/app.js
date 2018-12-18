const express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var campgrounds = [{ name: "Salmon Creek", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" },
    { name: "Sanded Cream", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" },
    { name: "Cerman Dean", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" }
];
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("landing");
});
app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", { campgrounds: campgrounds });
});
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelp  server camp has started");
});