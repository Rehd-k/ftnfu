import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function PaymentMethord({ onClick, balance }: any) {
  return (
    <>
      <div className="w-full md:w-1/2 mx-auto mt-5">
        <div className="h-12 w-full bg-gray-100 flex justify-center items-center rounded-t-md">
          Select Payment Methord
        </div>

        <div className="flex justify-center mt-5">
          <div className="min-w-36 min-h-36 flex justify-center items-center font-thin text-3xl border border-gray-100 rounded-full">
            ${balance}
          </div>
        </div>
        <div className="text-center mt-2">Amount</div>

        <div className="mt-10 text-justify text-gray-600 px-2">
          <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <InputLabel>Payment Methord *</InputLabel>
            <Select label="Payment Methord *" onChange={onClick}>
              <MenuItem key={"crypto"} value={"crypto"}>
                Crypto
              </MenuItem>
              <MenuItem key={"bank"} value={"bank"}>
                Bank Transfer
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}
