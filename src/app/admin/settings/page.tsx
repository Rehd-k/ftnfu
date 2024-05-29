import dbConnect from "@/helpers/dbConnect";
import Wallet from "@/model/walletAddress";
import { FormControl, TextField } from "@mui/material";

export default async function WalletSettings() {
  await dbConnect();
  const currectWallet = await Wallet.find();
  const doWalletUpdate = async (formData: FormData) => {
    "use server";
    if (currectWallet.length > 0) {
      const curWallet = await Wallet.findById(currectWallet[0]._id);
      curWallet["address"] = formData.get("address");
      await curWallet.save();
      window.location.reload();
    } else {
      await Wallet.create({
        address: formData.get("address"),
      });
      window.location.reload();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="md:w-1/2 w-full rounded-md bg-gray-50">
          <div className="h-12 flex justify-center items-center border-b border-gray-100">
            Wallet Address
          </div>

          <div className="mt-5 text-center">Current Address</div>

          <div className="mt-5 text-center">
            {currectWallet.length > 0
              ? currectWallet[0].address
              : "No Current Wallet"}
          </div>

          <div className="mt-5 text-center">New Wallet</div>

          <form className="" action={doWalletUpdate}>
            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="address"
                label="BTC Wallet Address *"
              />
            </FormControl>

            <div className="flex justify-center mt-5">
              <input
                type="submit"
                value="Update Wallet"
                className="p-4 rounded bg-green-800 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
