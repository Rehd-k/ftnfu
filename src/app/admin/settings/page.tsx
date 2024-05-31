import dbConnect from "@/helpers/dbConnect";
import Wallet from "@/model/walletAddress";
import TheForm from "./holder";

export default async function WalletSettings() {
  await dbConnect();
  const currectWallet = await Wallet.find();

  async function handleSeverAction(formData: FormData) {
    "use server";
    if (currectWallet.length > 0) {
      const curWallet = await Wallet.findById(currectWallet[0]._id);
      curWallet["address"] = formData.get("address");
      await curWallet.save();
    } else {
      await Wallet.create({
        address: formData.get("address"),
      });
    }
  }


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

          <TheForm handleSeverAction={handleSeverAction} />
        </div>
      </div>

    </>
  );
}
