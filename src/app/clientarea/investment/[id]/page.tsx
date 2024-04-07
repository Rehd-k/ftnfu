import dbConnect from "@/helpers/dbConnect";
import PaymentForm from "./paymentForm";
import User from "@/model/user";
import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";
import Investment from "@/model/investments";

export default async function BuyAccount(
    { params }: any
) {
    await dbConnect()
    const session = await getServerSession(authOptions) as any
    const user = await User.findById(session?.user.id)
    let accountInfo = await Investment.findById(params.id)
    return <>
        <PaymentForm accountInfo={accountInfo} user={user} />
    </>
}