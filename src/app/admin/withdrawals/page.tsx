import dbConnect from "@/helpers/dbConnect";
import Withdraw from "@/model/withdrawal";
import WithdrawalCompnent from "./withdrwals";

export default async function AdminWithrawals() {
  await dbConnect();
  const withdrawals = (await Withdraw.find()).map((item) => item.toJSON());
  return (
    <>
      <WithdrawalCompnent dbwithdrawals={withdrawals} />
    </>
  );
}
