"use client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useQRCode } from "next-qrcode";
import { CheckBoxOutlineBlankOutlined, CheckCircle } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  px: 4,
};

export default function PaymentForm({ dbaccountInfo, dbuser, dbwallet }: any) {
  const [accountInfo, setAccountInfo] = useState(JSON.parse(dbaccountInfo));
  const [user, setUser] = useState(JSON.parse(dbuser));
  const [wallet, setWallet] = useState(JSON.parse(dbwallet));
  const [paymentMethord, setPaymentMethord] = useState("crypto");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { Canvas } = useQRCode();
  console.log(accountInfo, user);

  const account = async () => {
    toast("checking...");
    await axios.post("/clientarea/trading-space/api", {
      user: user._id,
      accountType: accountInfo.name,
      balance: accountInfo.buyingPower,
      tradingPeriod: accountInfo.tradingPeriod,
      accountId: accountInfo._id,
    });
    toast("waiting to confirm payment...", {
      type: "success",
    });
    router.replace("/clientarea/accounts-overview");
  };
  return (
    <div className="grid gap-5">
      <div className="grid md:grid-cols-5 md:gap-5 w-full p-4">
        <div className="font-bold pb-5 md:pb-0">Order</div>
        <div className="col-span-4 gap-4 text-center w-full  bg-gray-200 rounded py-10">
          <div className="h-20 w-20 mx-auto rounded bg-blue-900 flex justify-center items-center">
            <CheckCircle className="text-7xl text-white" />
          </div>

          <div className="mt-5 text-center font-bold md:text-base text-sm">
            The order has been received
          </div>

          <div className="text-gray-800 md:text-sm text-xs md:px-10 px-5 mt-5 font-semibold leading-relaxed">
            We will start processing your order as soon as we receive the
            payment. Your login creidentials will be emailed to you within 24
            hours of receving payment.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 md:gap-5 w-full p-4">
        <div className="font-bold pb-5 md:pb-0">Account Details</div>
        <div className="col-span-4 w-full  bg-gray-100 rounded pt-10">
          <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5">
            <div className="text-gray-600">Account Name</div>
            <div className="font-bold text-gray-800">{accountInfo.name}</div>
          </div>

          <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5">
            <div className="text-gray-600">Account Size</div>
            <div className="font-bold text-gray-800">
              ${accountInfo.buyingPower}
            </div>
          </div>

          <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5">
            <div className="text-gray-600">Trading Account Currency</div>
            <div className="font-bold text-gray-800">USD</div>
          </div>

          <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5">
            <div className="text-gray-600">Growth</div>
            <div className="font-bold text-gray-800">{accountInfo.growth}</div>
          </div>

          <div className="w-full flex justify-between py-4 bg-blue-700 px-5 text-white rounded-b">
            <div>To be paid</div>
            <div className="font-bold">${accountInfo.price}</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 md:gap-5 w-full p-4">
        <div className="font-bold pb-5 md:pb-0">Payment Methord</div>
        <div className="col-span-4 grid md:grid-cols-2 md:gap-4 gap-8">
          <div
            className="w-4/6 shadow-md mx-auto md:mx-0 md:w-4/6 rounded-xl bg-gray-50"
            onClick={() => setPaymentMethord("crypto")}
          >
            <div
              className={`py-5 ${
                paymentMethord === "crypto"
                  ? "border-gray-600"
                  : "border-gray-200"
              } px-2`}
            >
              <div className="w-full py-10 flex items-center">
                <div className="relative mx-auto h-10 w-10">
                  <Image
                    alt="crypto stuff"
                    src="/cryptocurrency.png"
                    fill
                  ></Image>
                </div>
              </div>
              <Divider />
              <div className="text-xs flex-cols text-center py-5">
                <div className="">Crypto</div>
                <div className="text-[0.5rem]">BTC/USDT/BNB</div>
                <div className="text-blue-950 text-xs font-bold">
                  Instant confirmation
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>

          <div
            className="w-4/6 shadow-md mx-auto md:mx-0 md:w-4/6 rounded-xl bg-gray-50"
            onClick={() => setPaymentMethord("card")}
          >
            <div
              className={`py-5 ${
                paymentMethord === "card"
                  ? "border-gray-600"
                  : "border-gray-200"
              }`}
            >
              <div className="w-full py-10 flex items-center">
                <div className="relative mx-auto h-10 w-10">
                  <Image alt="crypto stuff" src="/credit.png" fill></Image>
                </div>
              </div>
              <Divider />
              <div className="text-xs flex-cols text-center py-5">
                <div className="">Card</div>
                <div className="text-[0.5rem]">Debit/Credit</div>
                <div className="text-blue-950 text-xs font-bold">
                  Instant confirmation
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>

          <div
            className="w-4/6 shadow-md mx-auto md:mx-0 md:w-4/6 rounded-xl bg-gray-50"
            onClick={() => setPaymentMethord("Wire Transfer")}
          >
            <div
              className={`py-5 ${
                paymentMethord === "Wire Transfer"
                  ? "border-gray-600"
                  : "border-gray-200"
              }`}
            >
              <div className="w-full py-10 flex items-center">
                <div className="relative mx-auto h-10 w-10">
                  <Image
                    alt="crypto stuff"
                    src="/wire-transfer.png"
                    fill
                  ></Image>
                </div>
              </div>
              <Divider />
              <div className="text-xs flex-cols text-center py-5">
                <div className="">Wire Transfer</div>
                <div className="text-[0.5rem]">Debit/Credit</div>
                <div className="text-blue-950 text-xs font-bold">
                  5 days confirmation
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>

          <div
            className="w-4/6 shadow-md mx-auto md:mx-0 md:w-4/6 rounded-xl bg-gray-50"
            onClick={() => setPaymentMethord("Bank Transfer")}
          >
            <div
              className={`py-5 ${
                paymentMethord === "Bank Transfer"
                  ? "border-gray-600"
                  : "border-gray-200"
              }`}
            >
              <div className="w-full py-10 flex items-center">
                <div className="relative  mx-auto h-10 w-10">
                  <Image
                    alt="crypto stuff"
                    src="/wire-transfer.png"
                    fill
                  ></Image>
                </div>
              </div>
              <Divider />
              <div className="text-xs flex-cols text-center py-5">
                <div className="">Bank Transfer</div>
                <div className="text-[0.5rem]">Bank</div>
                <div className="text-blue-950 text-xs font-bold">
                  5 day confirmation
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 md:gap-5 w-full p-4">
        <div className="font-bold pb-5 md:pb-0">Make Payment</div>

        {paymentMethord === "crypto" ? (
          <Button onClick={handleOpen}>Pay Now</Button>
        ) : (
          <div className="h-40 col-span-4 flex justify-center items-center shadow-lg rounded">
            Not Avialable Now
          </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg w-11/12 md:w-auto pb-5 dark:text-gray-200"
        >
          <div className="w-full flex justify-center mt-10">
            <Canvas
              text={wallet[0].address}
              logo={{
                src: "/logo.svg",
                options: {
                  width: 40,
                },
              }}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: "#010599FF",
                  // light: '#FFBF60FF',
                },
              }}
            />
          </div>

          <div className="col-span-4">
            <Image
              alt=""
              src={"/bitcoin.png"}
              height={32}
              width={32}
              className="mx-auto"
            />

            <div className="mt-10 text-center w-full hidden md:block">
              {wallet[0].address}
            </div>

            <div className="mt-10 text-center w-full  md:hidden">
              {wallet[0].address}
            </div>
          </div>

          <div className="w-full flex justify-center py-5">
            <Button variant="outlined" onClick={account}>
              Payment Made
            </Button>
          </div>
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
}
