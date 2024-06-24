"use client";
import { Delete } from "@mui/icons-material";
import { FormControl, IconButton, TextField } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import DoTrade from "./doTrades";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DoAccount from "./doBalance";

export default function UserInvestments({ dbprops }: any) {
  const props = JSON.parse(dbprops);
  const [open, setOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [balance, setBalance] = useState(props.balance);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShowBalance = async () => {
    await doUpdate("", {
      balance,
    });
    setShowBalance(true);
  };
  const handleHideBalance = () => setShowBalance(false);
  const handleBalanceChange = (e: any) => {
    setBalance(e.target.value);
  };

  const [balanceOpen, setBalanceOpen] = useState(false);
  const handleBalanceOpen = () => setBalanceOpen(true);
  const handleBalanceClose = () => setBalanceOpen(false);

  const doUpdate = async (update: string, data: any) => {
    toast("updateing");
    let updater = data;
    if (update === "status") {
      let status;
      if (props.status !== "active") {
        status = "active";
      } else {
        status = "inactive";
      }
      updater = {
        status,
      };
    }

    if (update === "withdrawable") {
      let withdrawable;
      if (props.withdrawable === "false") {
        withdrawable = "true";
      } else {
        withdrawable = "false";
      }
      updater = {
        withdrawable,
      };
    }
    try {
      await axios.put(`/admin/users/api?investmentid=${props._id}`, updater);
      toast("Updated");
    } catch (err) {
      toast(err as string);
    }
  };

  const doDelete = async () => {
    toast("deleting");
    await axios.delete(`/admin/users/api?investmentid=${props._id}`);
    toast("Deleted");
  };

  return (
    <>
      <div className="rounded-lg w-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-100">
        <div className="bg-blue-700 px-4 text-gray-100 h-16 font-bold flex justify-between items-center rounded-t-lg">
          <span>{props.name}</span>

          <IconButton onClick={doDelete}>
            <Delete className="text-gray-10" />
          </IconButton>
        </div>
        {showBalance ? (
          <>
            <div
              onDoubleClick={handleHideBalance}
              className="mt-10 text-gray-600 dark:text-gray-100 flex justify-center"
            >
              <h5>
                <span className="md:text-sm text-xs">$ </span>
                <span className="text-2xl font-bold">{balance}</span>
              </h5>
            </div>
            <div className="mt-1 text-center font-extrabold">Balance</div>
          </>
        ) : (
          <>
            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full text-white"
            >
              <TextField
                className="outline-none border-none"
                onChange={handleBalanceChange}
                defaultValue={balance}
              />
            </FormControl>

            <div
              className="mt-1 text-center font-extrabold cursor-pointer text-blue-700"
              onClick={handleShowBalance}
            >
              Update Balance
            </div>
          </>
        )}

        <ul className="mt-5 px-4 md:text-sm text-xs font-semibold">
          <li className="flex justify-between py-2 border-b border-gray-300">
            <p className="">ROI</p>
            <p className="">{props.ROI}</p>
          </li>

          <li className="flex justify-between py-2 border-b border-gray-300">
            <p className="">Investment Plan ID</p>
            <p className="">{props.plan}</p>
          </li>

          <li className="flex justify-between py-2 border-b border-gray-300">
            <p className="">Withdrawable</p>
            <div className="">
              {props.withdrawable}{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={() => doUpdate("withdrawable", {})}
              >
                (Change)
              </span>
            </div>
          </li>

          <li className="flex justify-between py-2 border-b border-gray-300">
            <p className="">Since</p>
            <p className="">
              {new Date(Number(props.createdOn)).toLocaleDateString()}
            </p>
          </li>

          <li className="flex justify-between py-2 border-b border-gray-300">
            <p className="">Status</p>
            <p className="">{props.status}</p>
          </li>
        </ul>

        <div className="mt-5 grid grid-cols-2 px-2 gap-1 pb-5">
          <button
            onClick={() => doUpdate("status", {})}
            className="w-full py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {props.status !== "active" ? "Activate" : "Deactivate"}
          </button>

          <button
            onClick={handleBalanceOpen}
            className="w-full py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
      <ToastContainer />

      <DoTrade isOpen={open} handleClose={handleClose} neededInfo={props} />

      <DoAccount
        isOpen={balanceOpen}
        handleClose={handleBalanceClose}
        neededInfo={props}
      />
    </>
  );
}
