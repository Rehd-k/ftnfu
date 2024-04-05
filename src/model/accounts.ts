import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    user: {
        type: String,
       
    },
    accountId : {
        type: String,
        
    },
    accountType: {
        type: String,
        
    },
    accountNumber : {
        type : String,
        
    },
    balance: {
        type: String
        
    },

    ProfitLoss: {
        type: String,
        default : '0'
        
    },
    Drawdown: {
        type: String,
        default : '0'
        
    },
    TradingDays: {
        type: String,
        default : '0'
        
    },
    startAmount: {
        type: Number,
        
    },
    startDate: {
        type: Date,
        
    },
    endDate: {
        type: Date,
       
    },

    status: {
        type: String,
        default: 'processing',
        enum: [
            'processing',
            'blocked',
            'active',
            'inactive'
        ]
    },
    createdOn: {
        type: Number,
        
        default: Date.now()
    }

})

const Account = mongoose.models.Account || mongoose.model("Account", AccountSchema);

export default Account;