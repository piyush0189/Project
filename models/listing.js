const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }   
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;