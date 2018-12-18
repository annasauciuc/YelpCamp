const express = require("express");
var app = express();
app.set("view engine", "ejs")
app.get("/", function(req, res) {
    res.render("landing");
});
app.get("/campgrounds", function(req, res) {
    var campgrounds = [{ name: "Salmon Creek", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" },
        { name: "Sanded Cream", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" },
        { name: "Cerman Dean", image: "https://floresdalia.com/wp-content/uploads/2018/07/love-image-lovely-images-photo-gallery-629721354-300x199.jpg" }
    ];
    res.render("campgrounds", { campgrounds: campgrounds });
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelp  server camp has started");
})