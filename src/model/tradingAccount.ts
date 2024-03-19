import mongoose from "mongoose";

const TradingAccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    buyingPower: {
        type: String,
        required: true
    },
    pofitTraget: {
        type: String,
        required: true
    },
    maxLoss: {
        type: String,
        required: true
    },
    payoutSlip: {
        type: String,
        required: true
    },
    minimumTrades: {
        type: String,
        required: true
    },
    growth: {
        type: String,
        required: true
    },
    tradingPeriod: {
        type: String,
        required: true
    },
    dailyLossAllowance: {
        type: String,
        required: true
    }

})

const TradingAccount = mongoose.models.TradingAccount || mongoose.model("TradingAccount", TradingAccountSchema);

export default TradingAccount;