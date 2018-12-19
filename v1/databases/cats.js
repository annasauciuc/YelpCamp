var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
var catSchema = new mongoose.Schema({ name: String, age: Number, temperament: String });
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