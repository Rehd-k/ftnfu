import dbConnect from "@/helpers/dbConnect"
import Trade from "@/model/trades"
import UsersTrades from "./components/trades"
import TableHolder from "./components/holder"

export default async function TradesFromAccounts({ params }: any) {
    await dbConnect()
    const trades = await Trade.find({
        account: params.account
    })

    let openTrades: any[] = []
    let closedTrades: any[] = []

    trades.map((res) => {
        if (res.exitPrice === '0') {
            openTrades.push(res)
        } else {
            closedTrades.push(res)
        }
    })
    return <>
        <div className="md:px-4 px-2">
            <TableHolder openTrades={openTrades} closedTrade={closedTrades} />

        </div>

    </>
}