const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A product must have a title"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "A product must have a price"],
        min: [1, "Price must be at least $1"]
    },
    description: {
        type: String,
        required: [true, "A product must have a description"],
        minLength: [8, "Description must be at least 8 characters long"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);