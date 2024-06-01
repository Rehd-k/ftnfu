import { Button } from "@mui/material";

export default function VatStep({ onClick }: any) {
  return (
    <>
      <div className="w-full md:w-1/2 mx-auto mt-5">
        <div className="h-12 w-full bg-gray-100 flex justify-center items-center rounded-t-md">
          VAT
        </div>

        <div className="mt-5 text-justify textgray-600 px-2">
          <span className="pr-5"></span>Almost there, to authorize your
          withdrawal, you will need to enter a unique VAT code.
          <br />
          <br />
          <div>
            A VAT code is usually a numerical identification number of a
            component that determines the VAT method and type of VAT to apply.
            VAT is a tax applied to customers goods and services. To complete
            your withdrawal, you must make a tax payment to obtain your VAT
            CODE.
          </div>
        </div>

        <div className="mt-5 flex justify-center items-center">
          <Button variant="outlined" onClick={onClick}>
            Request Vat Code
          </Button>
        </div>
      </div>
    </>
  );
}
