
import dbConnect from "@/helpers/dbConnect";
import User from "@/model/user";
import { NextResponse, NextRequest } from "next/server";
import { customAlphabet } from 'nanoid'; 
const nanoid = customAlphabet('1234567890', 6)

export async function GET(request: NextRequest) {
    let user;


    await dbConnect()
    const emailParam = request.nextUrl.searchParams.get("email")!;

    const usernameParam = request.nextUrl.searchParams.get("username")!;

    if (emailParam) {
        const savedUser = await User.findOne({
            email: emailParam,

        })
        user = savedUser
    } else if (usernameParam) {
        const savedUser = await User.findOne({
            username: usernameParam
        })
        user = savedUser
    }

    return NextResponse.json({ user });
}

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()

    try {
        const savedInfo = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            email: body.email,
            country: body.country,
            phoneNumber : body.phoneNumber,
            refCode : nanoid()
        })
 
        return NextResponse.json(savedInfo);
    } catch (err) {
        throw new Error(err as string)
    }

}
