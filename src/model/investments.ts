import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ROI: {
        type: String,
        required: true
    },
    minimum: {
        type: String,
        required: true
    },
    maximum: {
        type: String,
        required: true
    },


    payout: {
        type: String,
        required: true,
        default: 'Daily'
    },
    period: {
        type: String,
        required: true,
        default : '30'
    },

})

const Investment = mongoose.models.Investment || mongoose.model("Investment", InvestmentSchema);

export default Investment;