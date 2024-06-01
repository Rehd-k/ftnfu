import dbConnect from "@/helpers/dbConnect";
import Wallet from "@/model/walletAddress";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const accountId = request.nextUrl.searchParams.get("id");
  const user = await Wallet.find({});

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
    await dbConnect();
    const body = await request.json();
    console.log(body)
    const newAddress = await Wallet.create({
      address: body.address
    });
    return NextResponse.json(newAddress);
  }
  
  export async function PUT(request: NextRequest) {
    await dbConnect();
    const accountId = request.nextUrl.searchParams.get("id");
  
    const accountUpdate = await Wallet.findById(accountId);
    const body = await request.json();
    console.log(body, accountUpdate)
    for (const key in body) {
      accountUpdate[key] = body[key];
    }
    await accountUpdate.save();
  
    return NextResponse.json(accountUpdate);
  }