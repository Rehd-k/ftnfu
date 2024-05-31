"use client";
import { FormControl, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

export default function TheForm({ handleSeverAction }: any) {
  const doWalletUpdate = (formData: FormData) => {
    toast("Updating...");
    handleSeverAction(formData);
    window.location.reload();
  };

  return (
    <form className="" action={doWalletUpdate}>
      <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
        <TextField
          className="outline-none border-none"
          type="text"
          name="address"
          label="BTC Wallet Address *"
        />
      </FormControl>

      <div className="flex justify-center mt-5">
        <button type="submit" className="p-4 rounded bg-green-800 text-white">
          Update Wallet
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
