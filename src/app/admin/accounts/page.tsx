import dbConnect from "@/helpers/dbConnect";
import AccountCard from "./components/accountCard";
import AddNew from "./components/filter";
import axios from "axios";
import TradingAccount from "@/model/tradingAccount";
import { Key } from "react";

export default async function Accounts() {
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
                            <AccountCard props={res} />
                        </span>

                    })
                }

            </div>

            <div className="mt-5">
                <AddNew />
            </div>
        </div>
    </>
}