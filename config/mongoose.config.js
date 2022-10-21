const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbprueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Something went wrong', err));