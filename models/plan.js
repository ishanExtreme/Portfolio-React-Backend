const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
});

const Plan = mongoose.model('Plan', PlanSchema);

exports.Plan = Plan;