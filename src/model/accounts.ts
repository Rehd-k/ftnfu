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
        type: String,
        
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