import { CopyAllOutlined, PeopleAltOutlined, PercentOutlined, TrendingUp } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Referal() {
    return <>
        <div className="grid md:grid-cols-6 md:gap-5 p-10">
            <div className="col-span-4 grid grid-cols-8 p-4  shadow-lg rounded-md">
                <div className="col-span-2 h-32 text-4xl text-gray-100 flex justify-center items-center bg-gradient-to-r from-pink-700 to-pink-800 rounded">
                    IK
                </div>

                <div className="col-span-3 text-gray-700 pl-2">
                    <div className="">
                        Ikenna Kelvin
                    </div>
                    <div className="font-extralight">
                        coolmirth35@gmail.com
                    </div>
                </div>
                <div className=""></div>
                <div className="col-span-2 text-gray-600 text-sm">
                    <div className="flex justify-between">
                        <div className="font-semibold">
                            Referal ID
                        </div>
                        <div className="">
                            34489
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="font-semibold">
                            Status
                        </div>
                        <div className="">
                            Active
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="font-semibold">
                            Role
                        </div>
                        <div className="">
                            Referal
                        </div>
                    </div>
                </div>

                <div className="col-span-8 grid grid-cols-4 mt-10">
                    <div className="flex">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded flex justify-center items-center text-gray-100">
                            <PercentOutlined fontSize="small" />
                        </div>
                        <div className="text-xs ml-2 text-gray-700">
                            <div className="">
                                0.00
                            </div>

                            <div className="">
                                CTR
                            </div>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded flex justify-center items-center text-gray-100">
                            <PeopleAltOutlined fontSize="small" />
                        </div>
                        <div className="text-xs ml-2 text-gray-700">
                            <div className="">
                                0
                            </div>

                            <div className="">
                                # of Referrals
                            </div>
                        </div>
                    </div>



                    <div className="flex">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded flex justify-center items-center text-gray-100">
                            <TrendingUp fontSize="small" />
                        </div>
                        <div className="text-xs ml-2 text-gray-700">
                            <div className="">
                                $0.00
                            </div>

                            <div className="">
                                Total Credits
                            </div>
                        </div>
                    </div>



                    <div className="flex">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-200 to-green-300 rounded flex justify-center items-center text-gray-100">
                            <TrendingUp fontSize="small" />
                        </div>
                        <div className="text-xs ml-2 text-gray-700">
                            <div className="">
                                $0.00
                            </div>

                            <div className="">
                                Aviable Credits
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-10 ml-5" >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
                        Withdraw Credit
                    </button>
                </div>
            </div>
            <div className="col-span-2 p-4 shadow-lg rounded-md">
                <div className="flex justify-between">
                    <div className="text-gray-600">
                        Affiliate Plan
                    </div>

                    <div className="rounded px-2 py-1 text-xs bg-red-300 text-red-800">
                        Referrer
                    </div>
                </div>



                <div className="text-gray-600 text-sm py-1">
                    First Order
                </div>

                <div className="text-gray-600 text-sm py-1">
                    2% Commission Rate
                </div>

                <div className="text-gray-600 text-sm py-1">
                    0 Min Credit
                </div>


                <div className="text-gray-600 text-sm py-1">
                    Referrer Link <CopyAllOutlined fontSize="small" color="inherit" />   
                </div>


            </div>
        </div>
    </>
}