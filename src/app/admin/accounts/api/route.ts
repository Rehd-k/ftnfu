import dbConnect from "@/helpers/dbConnect";
import TradingAccount from "@/model/tradingAccount";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()

    try {
        const savedInfo = await TradingAccount.create({
            name: body.name,
            price: body.price,
            buyingPower: body.buyingPower,
            pofitTraget: body.pofitTraget,
            maxLoss: body.maxLoss,
            payoutSlip: body.payoutSlip,
            minimumTrades: body.minimumTrades,
            growth: body.growth,
            tradingPeriod: body.tradingPeriod,
            dailyLossAllowance: body.dailyLossAllowance
        })

        return NextResponse.json(savedInfo);
    } catch (err) {
        throw new Error(err as string)
    }

}


export async function PUT(request: NextRequest) {
    await dbConnect()
    const body = await request.json()
    const userId = request.nextUrl.searchParams.get("id");

    const userUpdate = await TradingAccount.findById(userId);
    for (const key in body) {
        if (userUpdate[key]) {
            userUpdate[key] = body[key]
        }
    }

    await userUpdate.save()

    console.log(body, userUpdate)
    return NextResponse.json(userUpdate);

}

export async function DELETE(request: NextRequest) {
    await dbConnect()
    const accountId = request.nextUrl.searchParams.get("id");

    const userUpdate = await TradingAccount.findByIdAndDelete(accountId);

    return NextResponse.json({
        status: 'Done'
    });
}