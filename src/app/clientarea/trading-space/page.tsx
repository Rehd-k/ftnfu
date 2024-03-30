import dbConnect from "@/helpers/dbConnect"
import TradingAccount from "@/model/tradingAccount"
import { Key } from "react"
import PlanCard from "./components/planCard"

export default async function TradingSpace() {
    let accounts = []
    try {
        await dbConnect()
        accounts = await TradingAccount.find()
    } catch (err) {
        throw new Error(err as string) 
    }
    return <>
        <div className="bg-gray-300 dark:bg-gray-800 min-h-screen">
            <div className="grid md:grid-cols-2 gap-4 pt-10 px-4">
                {
                    accounts.map((res: any, index: Key | null | undefined) => {
                        return <span key={index}>
                            <PlanCard prop={JSON.parse(res)} />
                        </span>

                    })
                }

            </div>
        </div>

    </>
}