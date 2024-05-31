import dbConnect from "@/helpers/dbConnect";
import Wallet from "@/model/walletAddress";
import TheForm from "./holder";

export default async function WalletSettings() {
  await dbConnect();
  const currectWallet = (await Wallet.find()).map(wallet => wallet.toJSON());
  return (
    <>
      <TheForm currectWallet={currectWallet} />
    </>
  );
}
