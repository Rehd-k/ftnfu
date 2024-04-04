import TopPart from "../components/top";
import FundLevel from "../components/fundlevel";
import ProgramObjectives from "../components/projectObjective";
import AccountPandL from "../components/chartsection";
import OpenTrades from "../components/openTrades";
import Account from "@/model/accounts";
import { redirect } from "next/navigation";
import TradingAccount from "@/model/tradingAccount";
import Trade from "@/model/trades";
import AccountStat from "@/model/accountStats";
import DashboardDetails from "../components/toplaywer";
import User from "@/model/user";




export default async function Dashboard(
    { params }: { params: { id: string } }
) {
    let openTrades: any[] = []
    let closedTrades: any[] = []

    const account = await Account.findOne({
        accountNumber: params.id
    })

    const tradingAccount = await TradingAccount.findOne({
        name: account.accountType
    })

    const accountStat = await AccountStat.findOne({
        user: account.user
    })

    const userStats = await User.findById(account.user)

    const trades = await Trade.find({
        account: params.id
    })


    trades.map((res) => {
        if (res.exitPrice === '0') {
            openTrades.push(res)
        } else {
            closedTrades.push(res)
        }

    })

    if (!params.id) {
        redirect('/clientarea/accounts-overview')
    }

    const d = new Date();
    let year = d.getFullYear();
    return <>
        <div className="min-h-screen dark:bg-gray-800 bg-gray-100 text-gray-500 dark:text-gray-200 pt-16 md:px-5 px-2 md:text-md text-sm">

            <TopPart account={account} />

            <FundLevel />


            <div className="mt-10">
                <DashboardDetails accounts={JSON.stringify(tradingAccount)} accountStats={JSON.stringify(account)} userStats={JSON.stringify(userStats)} />
                <ProgramObjectives account={tradingAccount} trades={trades} />
                <AccountPandL accountStat={accountStat} />
                <OpenTrades trades={openTrades} header={'Open Trades'} />
                <OpenTrades trades={closedTrades} header={'Closed Trades'} />
            </div>

            <div className="py-5 flex justify-center items-center dark:text-gray-100">
                Funded Trades  Now For You - Copyright @ {year}
            </div>
        </div>

    </>
}