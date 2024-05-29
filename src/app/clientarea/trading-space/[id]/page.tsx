import dbConnect from "@/helpers/dbConnect";
import PaymentForm from "./paymentForm";
import User from "@/model/user";
import TradingAccount from "@/model/tradingAccount";
import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";
import Wallet from "@/model/walletAddress";

export default async function BuyAccount(
    { params }: any
) {
    await dbConnect()
    const session = await getServerSession(authOptions) as any
    const dbuser = await User.findById(session?.user.id)
    let dbaccountInfo = await TradingAccount.findById(params.id)
    let wallet = await Wallet.find()
    return <>
        <PaymentForm dbaccountInfo={JSON.stringify(dbaccountInfo)} dbuser={JSON.stringify(dbuser)} dbwallet ={JSON.stringify(wallet)} />
    </>
}