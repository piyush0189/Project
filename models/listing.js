const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
       type: String,
       default: "https://th.bing.com/th/id/OIP.KGuRfbrIg5SoY92BTuGb2gHaHa?rs=1&pid=ImgDetMain",
       set: (v) =>
         v=== "" ? "https://th.bing.com/th/id/OIP.KGuRfbrIg5SoY92BTuGb2gHaHa?rs=1&pid=ImgDetMain"
         : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;