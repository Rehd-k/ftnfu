"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import AddInfo from "./step2";
import PaymentMethord from "./step1";
import OTPInput from "./step3";
import { ToastContainer, toast } from "react-toastify";

const steps = ["Basic Information", "VAT Request", "Confirmation"];

export default function HorizontalLinearStepper({ account }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [accountInfo, setAccountInfo] = React.useState(JSON.parse(account));
  const [wallet, setWallet] = React.useState("");
  const [withdarwalData, setwithdarwalData] = React.useState<any>();
  const [paymentMethord, setPaymentMethord] = React.useState("");
  const [bankInfo, setBankInfo] = React.useState<any>();
  const [otp, setOtp] = React.useState("");

  const handleOtpChange = (value: any) => {
    setOtp(value);
    console.log(value);
  };

  const handlePaymentMethord = async (event: any) => {
    setPaymentMethord(event.target.value);
  };

  const bankFormInfo = (data: any) => {
    setBankInfo(data);
    console.log(bankInfo);
    HandleRequest(data);
  };
  const HandleRequest = async (bankInfo: any) => {
    toast("Processing...");
    let data;
    if (paymentMethord === "crypto") {
      data = {
        user: accountInfo.user,
        accountId: accountInfo.accountNumber,
        balance: accountInfo.balance,
        paymentWallet: wallet,
      };
    } else {
      data = {
        user: accountInfo.user,
        accountId: accountInfo.accountNumber,
        balance: accountInfo.balance,
        bankName: bankInfo.bankName,
        bankNumber: bankInfo.bankNumber,
        bankAccountName: bankInfo.bankAccountName,
        swift: bankInfo.swift,
        routing: bankInfo.routing,
        country: bankInfo.country,
      };
    }

    const exits = await axios.get(
      `/clientarea/withdrawal/api?id=${accountInfo.user}`
    );
    if (exits.data) {
      toast(
        "Vat Already sent for this User Please Check Mail or contact Customer Care"
      );
      setwithdarwalData(exits.data);
      setActiveStep(2);
    } else {
      const dbData = await axios.post("/clientarea/withdrawal/api", data);
      if (dbData.data) {
        toast("Done");
        setwithdarwalData(dbData.data);
        setActiveStep(2);
      }
    }
  };

  const handleWalletChange = (value: any) => {
    setWallet(value);
    console.log(value);
  };

  const handleFinish = async () => {
    if (withdarwalData.VAT === otp) {
      toast("Checking...");
      const dbData = await axios.put(
        `/clientarea/withdrawal/api?id=${withdarwalData._id}`,
        {}
      );
      const account = await axios.put(
        `/admin/users/api?accountNumber=${accountInfo.accountNumber}`,
        { status: "withdrawn" }
      );
      toast("Done");
      window.location.replace("/clientarea/accounts-overview");
    } else {
      toast("Incorrect VAT code Please try again or contact Support");
    }
    console.log(withdarwalData.VAT, otp);
  };

  React.useEffect(() => {
    setAccountInfo(JSON.parse(account));
  }, [account]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 ? (
            <PaymentMethord
              onClick={handlePaymentMethord}
              balance={accountInfo.ProfitLoss}
            />
          ) : activeStep === 1 ? (
            <AddInfo
              onChange={handleWalletChange}
              bankFormInfo={bankFormInfo}
              paymentMethord={paymentMethord}
              HandleRequest={HandleRequest}
            />
          ) : activeStep === 2 ? (
            <OTPInput length={6} onChange={handleOtpChange} />
          ) : null}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === 1 ? null : activeStep === 0 ? (
              <Button disabled={paymentMethord === ""} onClick={handleNext}>
                Next
              </Button>
            ) : activeStep === steps.length - 1 ? (
              <Button
                disabled={otp.split("").length < 6}
                onClick={handleFinish}
              >
                Finish
              </Button>
            ) : null}
          </Box>
        </React.Fragment>
      )}
      <ToastContainer />
    </Box>
  );
}
