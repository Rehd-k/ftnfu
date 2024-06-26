import dbConnect from "@/helpers/dbConnect";
import Account from "@/model/accounts";
import Trade from "@/model/trades";
import User from "@/model/user";
import UserInvestment from "@/model/userinvestments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const accountId = request.nextUrl.searchParams.get("id");
  let user;
  if (accountId && accountId !== "") {
    user = Account.findOne({
      accountNumber: accountId,
    });
  } else {
    user = await User.find({});
  }

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();
  const newTrade = await Trade.create({
    user: body.user,
    account: body.account,
    pair: body.pair,
    entryPrice: body.entryPrice,
    exitPrice: body.exitPrice,
    type: body.type,
    tradeDate: body.tradeDate,
  });
  return NextResponse.json(newTrade);
}

export async function PUT(request: NextRequest) {
  await dbConnect();
  const accountId = request.nextUrl.searchParams.get("id");
  const accountNumber = request.nextUrl.searchParams.get("accountNumber");
  const investmentid = request.nextUrl.searchParams.get("investmentid");
  let accountUpdate;
  try {
    if (accountId && accountId !== "") {
      accountUpdate = await Account.findById(accountId);
    }

    if (accountNumber && accountNumber !== "") {
      accountUpdate = await Account.findOne({
        accountNumber: accountNumber,
      });
    }

    if (investmentid && investmentid !== "") {
      accountUpdate = await UserInvestment.findById(investmentid);
    }

    const body = await request.json();
    console.log(body);
    for (const key in body) {
      accountUpdate[key] = body[key];
    }
    await accountUpdate.save();
    return NextResponse.json(accountUpdate);
  } catch (err) {
    return NextResponse.error();
  }
}

export async function DELETE(request: NextRequest) {
  await dbConnect();
  const accountId = request.nextUrl.searchParams.get("id");

  const accountUpdate = await Account.findByIdAndDelete(accountId);

  return NextResponse.json(accountUpdate);
}
