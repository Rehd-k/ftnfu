import dbConnect from "@/helpers/dbConnect";
import PaymentForm from "./paymentForm";
import User from "@/model/user";
import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";
import Investment from "@/model/investments";
import Wallet from "@/model/walletAddress";

export default async function BuyAccount(
    { params }: any
) {
    await dbConnect()
    const session = await getServerSession(authOptions) as any
    const user = await User.findById(session?.user.id)
    let accountInfo = await Investment.findById(params.id)
    let wallet = await Wallet.find()
    return <>
        <PaymentForm accountInfo={accountInfo} user={user} dbwallet={JSON.stringify(wallet)} />
    </>
}