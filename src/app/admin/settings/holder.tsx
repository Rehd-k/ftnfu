"use client";
import { FormControl, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function TheForm({ currectWallet }: any) {
  const [wallet, setWallet] = useState(currectWallet);

  useEffect(() => {
    setWallet(currectWallet);
  }, [currectWallet]);

  async function handleUpdate(formData: FormData) {
    console.log(wallet);
    toast("Updating...");
    if (wallet.length > 0) {
      const curWallet = await axios.put(
        `/admin/settings/api?id=${wallet[0]._id}`,
        {
          address: formData.get("address"),
        }
      );
      setWallet([curWallet.data]);
      toast("Updated");
      window.location.reload();
    } else {
      toast("Updating...");
      const curWallet = await axios.post("/admin/settings/api", {
        address: formData.get("address"),
      });
      setWallet([curWallet.data]);
      toast("Updated");
      window.location.reload();
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="md:w-1/2 w-full rounded-md bg-gray-50">
        <div className="h-12 flex justify-center items-center border-b border-gray-100">
          Wallet Address
        </div>

        <div className="mt-5 text-center">Current Address</div>

        <div className="mt-5 text-center">
          {wallet.length > 0
            ? wallet[0].address
            : "No Current Wallet"}
        </div>

        <div className="mt-5 text-center">New Wallet</div>

        <form className="" action={handleUpdate}>
          <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <TextField
              className="outline-none border-none"
              type="text"
              name="address"
              label="BTC Wallet Address *"
            />
          </FormControl>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="p-4 rounded bg-green-800 text-white"
            >
              Update Wallet
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
