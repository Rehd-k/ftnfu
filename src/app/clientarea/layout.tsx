import ClientDrawer from "@/components/clinetdrawer";
import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation";

export default async function ClientLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    const session = await getServerSession(authOptions) as any
    if (!session) {
        redirect('/login')
    }
    
    return <ClientDrawer user={session}>
        {children}
    </ClientDrawer>
}