import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true,
    },
    pair: {
        type: String,
        required: true,
    },
    entryPrice: {
        type: String,
        required: true,
    },
    exitPrice: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'processing',
        enum: [
            'processing',
            'blocked',
            'no Transfer',
            'confirmed',
            'suspened'
        ]
    },
    tradeDate: Date,
    
    createdOn: {
        type: Number,
        required: true,
        default: Date.now()
    }

})

const Trade = mongoose.models.Trade || mongoose.model("Trade", TradeSchema);

export default Trade;