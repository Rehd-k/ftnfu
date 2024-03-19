'use client'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

export default function AccountPandL({ accountStat }: any) {
    const data = [
        {
            name: '0',
            uv: 4000,
            pv: 2000,
            amt: 2400,
        },
        {
            name: '10',
            uv: 3000,
            pv: 1000,
            amt: 2210,
        },
        {
            name: '20',
            uv: 0,
            pv: 0,
            amt: 0,
        },
        {
            name: '30',
            uv: 2780,
            pv: -500,
            amt: 2000,
        },
        {
            name: '40',
            uv: 1890,
            pv: -1000,
            amt: 2181,
        },
        {
            name: '50',
            uv: 2390,
            pv: -1500,
            amt: 2500,
        },
        {
            name: '60',
            uv: 3490,
            pv: -2000,
            amt: 2100,
        },
    ];
    return <div className="mt-10">
        <div className="mt-2 grid md:grid-cols-5 grid-cols-1 md:gap-5 w-full">
            <div className="col-span-3">
                <div className="font-semibold">
                    Account P & L
                </div>

                <div className="">
                    <div className="h-80 w-full rounded-lg bg-white  dark:bg-gray-700  mt-2 pt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotoneX" dataKey="Number of Trades" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="col-span-2 w-full mt-10 md:mt-0">
                <div className="w-full">
                    <div className="font-semibold">
                        Account Stats
                    </div>
                    {accountStat ?

                        <div className="mt-1 bg-white round-md md:p-5 p-2  dark:bg-gray-700 ">
                            <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400">
                                <p className="">
                                    Best Pair
                                </p>

                                <p className="">
                                    {
                                        accountStat.bestPair || '-'
                                    }
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Best  Trading Day
                                </p>

                                <p className="">
                                    {
                                        accountStat.bestTradingDay || '-'
                                    }
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Risk/Reward Ratio
                                </p>

                                <p className="">
                                    {
                                        accountStat.riskRewardRatio || '-'
                                    }
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Success Rate:
                                </p>

                                <p className="">
                                    {
                                        accountStat.successRate || '-'
                                    }
                                </p>
                            </div>
                        </div> :

                        <div className="mt-1 bg-white round-md md:p-5 p-2  dark:bg-gray-700 ">
                            <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400">
                                <p className="">
                                    Best Pair
                                </p>

                                <p className="">
                                    -
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Best  Trading Day
                                </p>

                                <p className="">
                                    -
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Risk/Reward Ratio
                                </p>

                                <p className="">
                                    -
                                </p>
                            </div>

                            <div className="flex justify-between md:text-sm text-xs text-gray-500 mt-10 dark:text-gray-400">
                                <p className="">
                                    Success Rate:
                                </p>

                                <p className="">
                                    -
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>

}