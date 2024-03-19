import mongoose from "mongoose";

const AccountStatSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    bestPair: {
        type: String
    },
    bestTradingDay: {
        type: String,
    },
    riskRewardRatio: {
        type: String
    },
    successRate: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Number,
        required: true,
        default: Date.now()
    }
  
})

const AccountStat = mongoose.models.AccountStat || mongoose.model("AccountStat", AccountStatSchema);

export default AccountStat;