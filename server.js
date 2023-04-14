// Dependencies
const express = require('express');
const mongoose = require("mongoose")
const product = require('./models/products');
const methodOverride = require("method-override")
const app = express();
require('dotenv').config();

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static('public'));
mongoose.connect(process.env.DATABASE_URL);




// I is for Index
app.get('/products', async (req, res) => {
    const allProducts = await product.find({})
    res.render('index.ejs', {
        product: allProducts
    }
    );
}); 


// N is for NEW
app.get('/products/new', (req, res) => {
	res.render('new.ejs');
});




// D is for DELETE
app.delete('/products/:id', async(req, res) => {
    await product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
});


// S is for SHOW
app.get('/products/:id', async(req, res) => {
    const selectedProduct = await product.findById(req.params.id).exec()
        res.render('show.ejs',
    {
        product: selectedProduct,
    })
    })


// U is for UPDATE
app.put('/products/:id', async (req, res) => {
    await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.redirect('/products/'+req.params.id);
});




// C is for CREATE
app.post('/products', (req, res) => {
    const createdProduct = new product(req.body)
    createdProduct.save().then(res.redirect('/products'))
})




// E is for EDIT
app.get ('/products/:id/edit', async (req, res) => {
    const selectedProduct= await product.findById (req.params.id).exec();
    res.render('edit.ejs', {product: selectedProduct });
})



// // S is for SHOW
// app.get ('/products/:id'), async(req, res) => {
// const selectedProduct = await Product.findById(req.params.id).exec()
//     res.render('show.ejs',
// {
//     product: selectedProduct,
// })
// }

//CONTACT



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));