import Account from "@/model/accounts";
import HorizontalLinearStepper from "./settpers";
import dbConnect from "@/helpers/dbConnect";

export default async function WithdrawalPage({ params }: { params: { id: string } }) {
  await dbConnect()
  const account = await Account.findOne({
    accountNumber: params.id,
  });
  return (
    <>
      <div className="p-4">
        <HorizontalLinearStepper account={JSON.stringify(account)}  />
      </div>
    </>
  );
}
