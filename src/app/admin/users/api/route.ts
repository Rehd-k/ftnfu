import dbConnect from "@/helpers/dbConnect";
import Account from "@/model/accounts";
import Trade from "@/model/trades";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    await dbConnect()
    const accountId = request.nextUrl.searchParams.get("id");

    return NextResponse.json('');
}

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()
    const newTrade = await Trade.create({
        user: body.user,
        account: body.account,
        pair: body.pair,
        entryPrice: body.entryPrice,
        exitPrice: body.exitPrice,
        type: body.type,
        tradeDate: body.tradeDate,
    })
    return NextResponse.json(newTrade);
}

export async function PUT(request: NextRequest) {
    await dbConnect()
    const accountId = request.nextUrl.searchParams.get("id");
    console.log(accountId)
    const body = await request.json()
    const accountUpdate = await Account.findById(accountId)
    accountUpdate.status = body.status

    await accountUpdate.save();

    return NextResponse.json(accountUpdate);
}