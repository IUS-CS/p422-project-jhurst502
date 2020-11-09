const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/v1', require('./lib/routes'));

function connectToMongo(url, cb) {
    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(url, options)
        .then((client) => cb(null, client))
        .catch((err) => cb(err));
}

connectToMongo('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    app.locals.db = client;
    app.listen(8080, function() {
        console.log('Listening on 8080');
    });
});
