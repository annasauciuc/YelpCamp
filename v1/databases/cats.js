//install mongoose
var mongoose = require("mongoose");
//connect with database
mongoose.connect("mongodb://localhost/cat_app");
//schema
var catSchema = new mongoose.Schema({ name: String, age: Number, temperament: String });
// model
var Cat = mongoose.model("Cat", catSchema);
//adding a new cat to the DB
var George = new Cat({ name: "George", age: 11, temperament: "Grounchy" });
george.save(function(err, cat) {
        if (err) {
            console.log('something went wrong :');
        } else {
            console.log('We just added a cat to DB :');
            console.log('cat :', cat);
        }
    })
    //adding a new cat to the DB
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log('err :', err);
    } else {
        console.log('cat :', cat);
    }
})