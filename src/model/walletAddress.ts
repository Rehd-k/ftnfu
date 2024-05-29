import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
    address: {
        type: String
    },
    name: {
        type: String,
        default : 'BTC'
    },
    icon: {
        type: String
    },
    network: {
        type: String,
        default: 'BITCOIN'
    },
    createdOn: {
        type: Number,
        required: true,
        default: Date.now()
    }

})

const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", WalletSchema);

export default Wallet;