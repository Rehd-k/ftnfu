import dbConnect from "@/helpers/dbConnect";
import Withdraw from "@/model/withdrawal";
import { NextRequest, NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890", 6);

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();
  const {
    user,
    accountId,
    balance,
    paymentWallet,
    bankName,
    bankNumber,
    bankAccountName,
    swift,
    routing,
    country
  } = body;
  console.log(body);
  const account = await Withdraw.create({
    user,
    accountId,
    balance,
    paymentWallet,
    bankName,
    bankNumber,
    bankAccountName,
    swift,
    routing,
    country,
    VAT: nanoid(),
  });

  console.log(account);

  return NextResponse.json(account);
}

export async function PUT(request: NextRequest) {
  await dbConnect();
  const accountId = request.nextUrl.searchParams.get("id");

  const accountUpdate = await Withdraw.findById(accountId);

  accountUpdate.status = "done";
  await accountUpdate.save();

  return NextResponse.json(accountUpdate);
}

export async function GET(request: NextRequest) {
  await dbConnect();
  const user = request.nextUrl.searchParams.get("id");

  const accountUpdate = await Withdraw.findOne({
    user,
  })
    .where("status")
    .equals("processing");

  return NextResponse.json(accountUpdate);
}
