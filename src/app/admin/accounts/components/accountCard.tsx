'use client'

import { useState } from "react";
import PlanForm from "./form";
import axios from "axios";

export default function AccountCard({ props }:any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose= () => setOpen(false) ;
    const deletePlan = async () => {
        await axios.delete(`/admin/accounts/api?id=${props._id}`)
        }

    return <>
        <div className="rounded-lg w-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-100">
            <div className="bg-blue-700 text-gray-100 h-16 font-bold flex justify-center items-center rounded-t-lg">
                {props.name}
            </div>


            <div className="mt-10 text-gray-600 dark:text-gray-100 flex justify-center">
                <h5>
                    <span className="md:text-sm text-xs">$</span>
                    <span className="text-2xl font-bold">
                        {props.price}
                    </span>
                </h5>

            </div>
            <div className="mt-1 text-center font-extrabold">
                One Time Fee
            </div>

            <ul className="mt-5 px-4 md:text-sm text-xs font-semibold">
                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Buying Power</p>
                    <p className="">$ {props.buyingPower}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Profit target</p>
                    <p className="">$ {props.pofitTraget}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Max Loss</p>
                    <p className="">$ {props.maxLoss}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Payout Split</p>
                    <p className="">{props.payoutSlip}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Minimum Trades</p>
                    <p className="">{props.minimumTrades}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Growth</p>
                    <p className="">{props.growth} %</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Trading Period</p>
                    <p className="">{props.tradingPeriod} days</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Daily Loss Allowance</p>
                    <p className="">$ {props.dailyLossAllowance}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Trading Booster</p>
                    <p className="">Optional</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Real Time Market Data</p>
                    <p className="">FREE</p>
                </li>
            </ul>

            <div className="mt-5 flex justify-between px-2 gap-5 pb-5">
                <button onClick={handleOpen} className="w-full py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Update
                </button>

                <button onClick={deletePlan} className="w-full py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
        <PlanForm isOpen={open} handleClose={handleClose} formContent={props} />
    </>
}