import mongoose from "mongoose";

const UserInvestmentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ROI: {
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

const UserInvestment = mongoose.models.UserInvestment || mongoose.model("UserInvestment", UserInvestmentSchema);

export default UserInvestment;