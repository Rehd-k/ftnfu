import { Button, FormControl, TextField } from "@mui/material";
import { useEffect } from "react";

export default function AddInfo({
  onChange,
  bankFormInfo,
  paymentMethord,
  HandleRequest,
}: any) {
  useEffect(() => {
    onChange("");
  }, []);
  const handleChange = (element: any) => {
    const value = element.target.value;
    onChange(value);
  };

  const handleFormAcount = (formData: FormData) => {
    const formInfo = {
      bankName: formData.get("bankName"),
      bankAccountName: formData.get("bankAccountName"),
      bankNumber: formData.get("bankNumber"),
      swift: formData.get("swift"),
      routing: formData.get("routing"),
      country: formData.get("country"),
    };
    bankFormInfo(formInfo);
    HandleRequest();
  };
  return (
    <>
      <div className="w-full md:w-1/2 rounded-md mt-5 mx-auto">
        <div className="h-12 w-full bg-gray-100 flex justify-center items-center rounded-t-md">
          Account Details
        </div>

        {paymentMethord === "crypto" ? (
          <div className="mt-5">
            Withdrwal BTC Address : <br />
            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="address"
                label="ADDRESS"
                required
                onChange={handleChange}
              />
            </FormControl>
            <div className="flex justify-center mt-5">
              <Button variant="outlined" onClick={HandleRequest}>
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <form action={handleFormAcount}>
            <div className="mt-5">
              Bank Name: <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="bankName"
                  label=" Bank Name"
                  required
                />
              </FormControl>
            </div>

            <div className="mt-5">
              Account Name : <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="bankAccountName"
                  label="Account Name"
                  required
                />
              </FormControl>
            </div>

            <div className="mt-5">
              Account Number : <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="bankNumber"
                  label="Account Number"
                  required
                />
              </FormControl>
            </div>

            <div className="mt-5">
            Swift : <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="swift"
                  label="Swift"
                  required
                />
              </FormControl>
            </div>

            <div className="mt-5">
            Routing: <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="routing"
                  label="Routing"
                  required
                />
              </FormControl>
            </div>

            <div className="mt-5">
              Account Number : <br />
              <FormControl
                sx={{ marginTop: 2, minWidth: 120 }}
                className="w-full"
              >
                <TextField
                  className="outline-none border-none"
                  type="text"
                  name="country"
                  label="Country"
                  required
                />
              </FormControl>
            </div>
            <div className="flex justify-center mt-5">
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
