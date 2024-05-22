import dbConnect from "@/helpers/dbConnect";
import Account from "@/model/accounts";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import { customAlphabet } from 'nanoid'; 
import TradingAccount from "@/model/tradingAccount";
const nanoid = customAlphabet('1234567890', 10)

export async function GET(request: NextRequest) {
    await dbConnect()
    // const body = await request.json()
    // const userId = request.nextUrl.searchParams.get("id");

    const  accounts = await TradingAccount.find();
    // for (const key in body) {
    //     if (userUpdate[key]) {
    //         userUpdate[key] = body[key]
    //     }
    // }

    // await userUpdate.save()

    // console.log(body, userId)
    return NextResponse.json(accounts);
}


export async function POST(request: NextRequest) {
   
    await dbConnect()
    const body = await request.json()
    console.log(body.tradingPeriod)
    const account = await Account.create({
        user: body.user,
        accountType: body.accountType,
        accountNumber : nanoid(),
        balance: body.balance,
        startAmount: body.tradingPeriod,
        startDate: Date.now(),
        endDate: Date.now() + (1000 * 60 * 60 * 24 * Number(body.tradingPeriod))
    })

    return NextResponse.json(account);
}
