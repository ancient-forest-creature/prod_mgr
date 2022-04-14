const Product = require('../models/prodmgr.model');

module.exports = {


    findAllProducts: (req, res) => {
        Product.find({}) //Find all
            .then((allProducts) => {
                console.log(allProducts)
                res.json(allProducts)
            })
            .catch((err) => {
                console.log("findAllProducts has failed!")
                console.log(err)
                res.json(err)
            })
    },

    createNewProduct: (req, res) => {
        Product.create(req.body) //creates new based on info passed through the client request's body (likely a form)
            .then((newProduct) => {
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err) => {
                console.log(err)
                console.log("createNewProduct has failed!")
                res.status(400).json(err)
            })
    },


    findOneProduct: (req, res) => {
        //Use a variable pulled from params to get the specifed item. So far, the specifier has always been id
        Product.findOne({ _id: req.params.id }) //the params variable, here being id, must match the variable in our routes
            .then((oneProduct) => {
                console.log(oneProduct)
                res.json(oneProduct)
            })
            .catch((err) => {
                console.log(err)
                console.log("findOneProduct has failed!")
                res.json(err)
            })
    },


    deleteOneProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deletedProduct) => {
                console.log(deletedProduct)
                res.json(deletedProduct)
            })
            .catch((err) => {
                console.log(err)
                console.log("deleteOneProduct has failed!")
                res.json(err)
            })
    },


    updateProduct: (req, res) => {
        //This is the one query that requires two pieces of data. the param specifer, and the req body
        Product.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedProduct) => {
                console.log(updatedProduct)
                res.json(updatedProduct)
            })
            .catch((err) => {
                console.log(err)
                console.log("updateProduct has failed!")
                res.status(400).json(err) 
            })

    }
}