import dbConnect from "@/helpers/dbConnect";
import Investment from "@/model/investments";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()
    const newTrade = await Investment.create({
        name: body.name,
        ROI: body.ROI,
        minimum: body.minimum,
        maximum: body.maximum,
        payout: body.payout,
        period: body.period,
    })
    return NextResponse.json(newTrade);
}

export async function PUT(request: NextRequest) {
    await dbConnect()
    const body = await request.json()
    const userId = request.nextUrl.searchParams.get("id");

    const userUpdate = await Investment.findById(userId);
    for (const key in body) {
        if (userUpdate[key]) {
            userUpdate[key] = body[key]
        }
    }

    await userUpdate.save()
    return NextResponse.json(userUpdate);

}

export async function DELETE(request: NextRequest) {
    await dbConnect()
    const accountId = request.nextUrl.searchParams.get("id");

    const userUpdate = await Investment.findByIdAndDelete(accountId);

    return NextResponse.json({
        status: 'Done'
    });
}