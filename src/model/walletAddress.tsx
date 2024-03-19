import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true
    },
    network: {
        type: String,
        required: true
    },
    createdOn: {
        type: Number,
        required: true,
        default: Date.now()
    }

})

const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", WalletSchema);

export default Wallet;