const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/instagram', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('error connecting to db', err)
        })

}

module.exports = configureDB
