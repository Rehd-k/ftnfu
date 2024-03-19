import HelpOutline from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import CalendarToday from "@mui/icons-material/CalendarToday"
import Box from "@mui/material/Box";


export default function ProgramObjectives({ account, trades }: any) {

    let theStuff
    const getCoverHeight = (currect: any, complete: number) => {
        const height = (Number(currect) / Number(complete)) * 100
        return Math.round(height)
    }

    return <div className="mt-2 grid md:grid-cols-5 grid-cols-1 md:gap-5 w-full">
        <div className="col-span-3">
            <div className="font-semibold">
                Program Objectives
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2 w-full mt-5 gap-4">
                <div className="w-full rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md text-center pb-5">
                    <div className="flex justify-center mt-4">
                        <p className="text-sm">
                            Profit Target
                        </p>
                        <div className="text-xs mt-0.5 ml-1">
                            <HelpOutline fontSize="inherit" />
                        </div>
                    </div>

                    <div className="text-xs text-center text-gray-400 mt-0.5">
                        $ {account.pofitTraget}
                    </div>

                    <div className="w-1/4 h-44 rounded-t-full rounded-b-full border border-gray-400 mx-auto mt-2 relative">
                        <Box className={`rounded-b-full bg-green-700 w-full absolute bottom-0`} sx={{
                            height: `${getCoverHeight(10, 100)}%`
                        }}></Box>
                    </div>
                </div>

                <div className="w-full rounded-lg bg-gray-50 dark:bg-gray-700  shadow-md text-center pb-5">
                    <div className="flex justify-center mt-4">
                        <p className="text-sm">
                            Max DD
                        </p>
                        <div className="text-xs mt-0.5 ml-1">
                            <HelpOutline fontSize="inherit" />
                        </div>
                    </div>

                    <div className="text-xs text-center text-gray-400 mt-0.5">
                        ${account.maxLoss}
                    </div>

                    <div className="w-1/4 h-44 rounded-t-full rounded-b-full border border-gray-400 mx-auto mt-2 relative">
                        <Box className={`rounded-b-full bg-green-700 w-full absolute bottom-0`} sx={{
                            height: `${getCoverHeight(10, 100)}%`
                        }}></Box>
                    </div>
                </div>

                <div className="w-full  rounded-lg bg-gray-50 dark:bg-gray-700  shadow-md text-center pb-5">
                    <div className="flex justify-center mt-4">
                        <p className="text-sm">
                            Total Trades
                        </p>
                        <div className="text-xs mt-0.5 ml-1">
                            <HelpOutline fontSize="inherit" />
                        </div>
                    </div>

                    <div className="text-xs text-center text-gray-400 mt-0.5">
                        {trades.length}
                    </div>

                    <div className="w-1/4 h-44 rounded-t-full rounded-b-full border border-gray-400 mx-auto mt-2 relative">
                        <Box className={`rounded-b-full bg-green-700 w-full absolute bottom-0`} sx={{
                            height: `${getCoverHeight(10, 100)}%`
                        }}></Box>
                    </div>
                </div>

                <div className="w-full  rounded-lg bg-gray-50 dark:bg-gray-700  shadow-md text-center pb-5">
                    <div className="flex justify-center mt-4">
                        <p className="text-sm">
                            Pump 0%
                        </p>
                        <div className="text-xs mt-0.5 ml-1">
                            <HelpOutline fontSize="inherit" />
                        </div>
                    </div>

                    <div className="text-xs text-center text-gray-400 mt-0.5">
                        5 Days
                    </div>

                    <div className="w-1/4 h-44 rounded-t-full rounded-b-full border border-gray-400 mx-auto mt-2 relative">
                        <Box className={`rounded-b-full bg-green-700 w-full absolute bottom-0`} sx={{
                            height: `${getCoverHeight(10, 100)}%`
                        }}></Box>
                    </div>
                </div>

                <div className="w-full  rounded-lg bg-gray-50 dark:bg-gray-700  shadow-md text-center pb-5">
                    <div className="flex justify-center mt-4">
                        <p className="text-sm">
                            Dump 0%
                        </p>
                        <div className="text-xs mt-0.5 ml-1">
                            <HelpOutline fontSize="inherit" />
                        </div>
                    </div>

                    <div className="text-xs text-center text-gray-400 mt-0.5">
                        5 Days
                    </div>

                    <div className="w-1/4 h-44 rounded-t-full rounded-b-full border border-gray-400 mx-auto mt-2 relative">
                        <Box className={`rounded-b-full bg-green-700 w-full absolute bottom-0`} sx={{
                            height: `${getCoverHeight(10, 100)}%`
                        }}></Box>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-2 w-full mt-10 md:mt-0">
            <div className="flex justify-between">
                <p>
                    Daily Performance
                </p>


                <IconButton>
                    <CalendarToday fontSize="small" />
                </IconButton>
            </div>

            <div className="w-full h-64 shadow-lg bg-white dark:bg-gray-700  rounded-lg mt-2 md:p-5 p-2">
                <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400">
                    <p className="">
                        Remaining Risk Today
                    </p>

                    <p className="">
                        2000
                    </p>
                </div>

                <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400 mt-10">
                    <p className="">
                        Realized P&L:
                    </p>

                    <p className="">
                        -
                    </p>
                </div>

                <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400 mt-10">
                    <p className="">
                        Market Value:
                    </p>

                    <p className="">
                        -
                    </p>
                </div>

                <div className="flex justify-between md:text-sm text-xs text-gray-500 dark:text-gray-400 mt-10">
                    <p className="">
                        Total Volume:
                    </p>

                    <p className="">
                        -
                    </p>
                </div>

            </div>



        </div>
    </div>
}