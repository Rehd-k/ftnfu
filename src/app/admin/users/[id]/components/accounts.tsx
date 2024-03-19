'use client'
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import DoTrade from "./doTrades";
import axios from "axios";

export default function UserAccounts({ props }: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const doUpdate = async () => {
        let status
        if (props.status !== 'active') {
            status = 'active'
        } else {
            status = 'inactive'
        }
        await axios.put(`/admin/users/api?id=${props._id}`, {
            status
        })
    }

    return <>
        <div className="rounded-lg w-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-100">
            <div className="bg-blue-700 px-4 text-gray-100 h-16 font-bold flex justify-between items-center rounded-t-lg">
                <span>
                    {props.accountType}
                </span>

                <IconButton>
                    <Delete className="text-gray-10" />
                </IconButton>
            </div>


            <div className="mt-10 text-gray-600 dark:text-gray-100 flex justify-center">
                <h5>
                    <span className="md:text-sm text-xs">$ </span>
                    <span className="text-2xl font-bold">
                        {props.balance}
                    </span>
                </h5>

            </div>
            <div className="mt-1 text-center font-extrabold">
                Balance
            </div>

            <ul className="mt-5 px-4 md:text-sm text-xs font-semibold">
                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Start Amount</p>
                    <p className="">$ {props.startAmount}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Account Number</p>
                    <p className="">{props.accountNumber}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Start Date</p>
                    <p className="">{format(props.startDate, 'LLLL d, yyyy')}</p>

                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">End Date</p>
                    <p className="">{format(props.endDate, 'LLLL d, yyyy')}</p>

                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Status</p>
                    <p className="">{props.status}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Trades</p>
                    <p className="">40</p>
                </li>
            </ul>

            <div className="mt-5 grid grid-cols-2 px-2 gap-1 pb-5">
                <Link href={`${props.user}/accounts/${props.accountNumber}`}>
                    <button

                        className="w-full py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Check Trades
                    </button>
                </Link>



                <button
                    onClick={handleOpen}
                    className="w-full py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Do Trades
                </button>



                <button
                    onClick={doUpdate}
                    className="w-full py-2 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    {props.status !== 'active' ?
                        'Activate' : 'Deactivate'
                    }
                </button>

            </div>
        </div>

        <DoTrade isOpen={open} handleClose={handleClose} neededInfo={props} />
    </>
}