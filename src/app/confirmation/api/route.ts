import dbConnect from "@/helpers/dbConnect";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const email = request.nextUrl.searchParams.get("email");
  const otp = request.nextUrl.searchParams.get("otp");
  let confrimed_user;
  if (email && otp && email !== "" && otp !== "") {
    confrimed_user = await User.findOne({
      email: email,
      otp: otp,
    });
  }

  if (confrimed_user) {
    try {
      await User.findByIdAndUpdate(
        confrimed_user._id,
        { status: "confirmed" },
        { new: true }
      );
    } catch (err) {
      throw Error(`This error ${err} happened`);
    }
  }
  return NextResponse.json(confrimed_user);
}
