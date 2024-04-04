import { AccountBoxOutlined, CheckCircleOutlineOutlined, CheckCircleOutlined, CopyAllOutlined, RotateRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { format } from "date-fns";

export default function DashboardDetails({ accounts, accountStats, userStats }: any) {
    const account = JSON.parse(accounts)
    const accountStat = JSON.parse(accountStats)
    const user = JSON.parse(userStats)
    return <>
        <div className="md:grid md:grid-cols-6 py-10   px-5 md:w-[99%] border border-blue-100 rounded bg-white">
            <div className="col-span-2 grid md:grid-cols-3 w-full">
                <div className="pr-2 flex items-center">
                    <div className="h-20 w-20 rounded-full bg-gray-200 flex justify-center items-center text-3xl font-thin text-blue-900">
                        {user.firstName.split("")[0]}
                        {user.lastName.split("")[0]}
                    </div>

                    <div className="ml-2 md:hidden">
                        <div className="text-sm font-bold text-blue-950">
                            Hello Wisdom !
                        </div>
                        <div className="mt-1 text-xs font-bold text-blue-900">
                            Currently, you have an Express account
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 border-r border-blue-200">
                    <div className="text-sm font-bold text-blue-950 hidden md:block">
                        Hello {user.firstName} !
                    </div>
                    <div className="mt-1 text-xs font-bold text-blue-900 hidden md:block">
                        Currently, you have an {account.name}
                    </div>

                    <div className="text-xs  text-blue-950 md:mt-2 mt-4">
                        <div className="flex items-center">
                            <CheckCircleOutlined className="text-sm mr-2 text-blue-700" />
                            Initial Balance: ${account.buyingPower}
                        </div>

                        <div className="flex items-center md:mt-1 mt-2">
                            <CheckCircleOutlined className="text-sm mr-2 text-blue-700" />
                            Payout Slip: {account.payoutSlip}
                        </div>

                        <div className="flex items-center md:mt-1 mt-2">
                            <CheckCircleOutlined className="text-sm mr-2 text-blue-700" />
                            Account Type: {account.name}
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-span-3 md:ml-3 md:mt-0 mt-4 border-r border-blue-200">
                <div className="flex items-center pb-2">
                    <AccountBoxOutlined className="text-blue-900 md:text-base text-xl" />
                    <div className="text-blue-900 font-bold text-xl ml-2 md:text-base">
                        Account Details
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 pr-2">
                    <div className="border text-xs font-bold border-blue-800 rounded w-full py-2 md:py-1 px-2 flex justify-between items-center">
                        <div className="">Account No.</div>
                        <div className="flex items-center">{accountStat.accountNumber} <IconButton> <CopyAllOutlined className="text-sm text-blue-700" /></IconButton>  </div>
                    </div>

                    <div className="border text-xs font-bold border-blue-800 rounded w-full py-2 md:py-1 px-2 flex justify-between items-center">
                        <div className="">Master Pass.</div>
                        <div className="flex items-center">***** <IconButton> <CopyAllOutlined className="text-sm text-blue-700" /></IconButton>  </div>
                    </div>

                    <div className="border text-xs font-bold border-blue-800 rounded w-full py-2 md:py-1 px-2 flex justify-between items-center">
                        <div className="">Account Status</div>
                        <div className="flex items-center">{accountStat.status} </div>
                    </div>

                    <div className="border text-xs font-bold border-blue-800 rounded w-full py-2 md:py-1 px-2 flex justify-between items-center">
                        <div className="">Server</div>
                        <div className="flex items-center">LudaServer <IconButton> <CopyAllOutlined className="text-sm text-blue-700" /></IconButton>  </div>
                    </div>

                </div>
            </div>


            <div className="md:mt-0 mt-10">
                <div className="flex text-blue-900 items-center md:justify-center text-xl font-bold md:text-sm pb-4">
                    <RotateRight className=" mr-2 text-blue-700" />

                    Trading Cycle Details
                </div>

                <div className="ml-2 text-xs font-semibold text-blue-800">
                    <div className="mt-2 md:text-xs text-lg">
                        Start Date : {format(accountStat.startDate, 'LLLL d, yyyy')}
                    </div>

                    <div className="mt-4 md:text-xs text-lg">
                        End Date : {format(accountStat.endDate, 'LLLL d, yyyy')}
                    </div>
                </div>
            </div>
        </div>
    </>
}