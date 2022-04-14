const mongoose = require('mongoose');

const productDb = "productDb"

mongoose.connect(`mongodb://localhost/${productDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${productDb}`))
    .catch(err => console.log(`Something went wrong when connecting to ${productDb} `, err));

// in a class example, there are { } around the console.log function. I didn't need them previously, but if there are issues, it's worth trying