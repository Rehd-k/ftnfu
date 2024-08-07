import dbConnect from "@/helpers/dbConnect";
import { sendMail } from "@/helpers/mailer";
// import { WelcomeMail } from "@/mails/welcome";
import User from "@/model/user";
import OTPMailer from "./otp";
import GeneralMailer from "./general";

export default async function Mailers() {
  await dbConnect();
  const dbUsers = await User.find();
  async function doSendMail(subject: string, reciver: string, email: any) {
    "use server";
    await sendMail(subject, reciver, email);
  }

  async function sendGeneralMail(subject: string, reciver: string, email: any) {
    "use server";
    try {
      await sendMail(subject, reciver, email);
    } catch (error) {
      return error;
    }
  }
  return (
    <>
      <div className="min-h-screen w-full grid md:grid-cols-2 gap-5">
        <OTPMailer dbUsers={JSON.stringify(dbUsers)} sendMail={doSendMail} />
        <GeneralMailer
          dbUsers={JSON.stringify(dbUsers)}
          sendMail={sendGeneralMail}
        />
      </div>
    </>
  );
}
