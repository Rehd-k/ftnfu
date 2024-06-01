import Account from "@/model/accounts";
import HorizontalLinearStepper from "./settpers";

export default async function WithdrawalPage({ params }: { params: { id: string } }) {
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
