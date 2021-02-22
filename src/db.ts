import mongoose from 'mongoose';


const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("DB is connected"));

