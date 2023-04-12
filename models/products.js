const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	artist: { type: String, required: true },
    img:  {type: String, required: true },
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
	completed: Boolean,
    artist: { type: String, required: true },
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;