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
    console.log(userAccounts)

    return <>
    {userAccounts.length > 0 ?  <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:p-5 p-2.5 w-full bg-gray-50 dark:bg-gray-800 min-h-screen">
            {userAccounts.map((res, index) => {
                return <span key={index}>
                    <UserAccounts dbprops={JSON.stringify(res)} />
                </span>
            })
            }
        </div>: <div className="h-screen w-full flex items-center justify-center font-bold text-2xl">
            No Accounts yet
        </div>

    }
        

    </>
}