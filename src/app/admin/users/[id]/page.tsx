import Account from "@/model/accounts"
import UserAccounts from "./components/accounts"
import dbConnect from "@/helpers/dbConnect"

export default async function UserInfo(
    { params }: { params: { id: string } }
) {
    await dbConnect()
    const userAccounts = await Account.find({
        user: params.id
    })

    return <>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:p-5 p-2.5 w-full bg-gray-50 dark:bg-gray-800 min-h-screen">
            {userAccounts.map((res, index) => {
                return <span key={index}>
                    <UserAccounts props={res} />
                </span>
            })
            }
        </div>

    </>
}