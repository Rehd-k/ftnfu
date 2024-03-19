import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GraphicLogin from "./components/graphic";
import FormReg from "./components/loginForm";

export default async function Login() {
    const session = await getServerSession(authOptions) as any
    if (session) {
        redirect('/clientarea/accounts-overview')
    }
    return <>
        <div className="grid md:grid-cols-3 grid-cols-1">
            <FormReg />
            <div className="col-span-2 md:block hidden">
                <GraphicLogin />
            </div>

        </div>

    </>
}