import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enom: ['pending', 'confirmed', 'blocked', 'cancled']
    },


    withdrawable: {
        type: String,
        required: true,
        default: false
    },
    createdOn: {
        type: String,
        required: true,
        default: Date.now()
    },



})

const Investment = mongoose.models.Investment || mongoose.model("Investment", InvestmentSchema);

export default Investment;