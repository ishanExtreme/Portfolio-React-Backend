const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
});

const Quote = mongoose.model('Quote', QuoteSchema);

exports.Quote = Quote;