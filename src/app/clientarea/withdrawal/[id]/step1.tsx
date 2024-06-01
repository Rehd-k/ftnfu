import { FormControl, TextField } from "@mui/material";
import { useEffect } from "react";

export default function AddInfo({ onChange }: any) {
  useEffect(() => {
    onChange("");
  }, []);
  const handleChange = (element: any) => {
    const value = element.target.value;
    onChange(value);
  };
  return (
    <>
      <div className="w-full md:w-1/2 rounded-md mt-5 mx-auto">
        <div className="h-12 w-full bg-gray-100 flex justify-center items-center rounded-t-md">
          Account Details
        </div>

        <div className="flex justify-center mt-5">
          <div className="w-28 h-28 flex justify-center items-center font-thin text-3xl border border-gray-100 rounded-full">
            $400
          </div>
        </div>
        <div className="text-center mt-2">Amount</div>

        <div className="mt-5">
          Withdrwal BTC Address : <br />
          <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <TextField
              className="outline-none border-none"
              type="text"
              name="address"
              label="ADDRESS"
              required
              onChange={handleChange}
            />
          </FormControl>
        </div>
      </div>
    </>
  );
}
