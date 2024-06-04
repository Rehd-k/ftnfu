import mongoose from "mongoose";

const WithdrawalSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  accountId: {
    type: String,
  },
  balance: {
    type: String,
  },

  bankName: {
    type: String,
  },
  bankNumber: {
    type: String,
  },
  bankAccountName: {
    type: String,
  },

  swift: {
    type: String,
  },
  routing: {
    type: String,
  },
  country: {
    type: String,
  },

  paymentWallet: {
    type: String,
  },
  VAT: {
    type: String,
  },
  brokerageCode: {
    type: String,
  },

  status: {
    type: String,
    default: "processing",
    enum: ["processing", "blocked", "done"],
  },
  createdOn: {
    type: Number,

    default: Date.now(),
  },
});

const Withdraw =
  mongoose.models.Withdraw || mongoose.model("Withdraw", WithdrawalSchema);

export default Withdraw;
