"use client";

import { otpMail } from "@/mails/otp";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function OTPMailer({ dbUsers, sendMail }: any) {
  const [users] = useState(JSON.parse(dbUsers));
  const [usersToMail, setUsersToMail] = useState<any[]>([]);
  const [count, setCount] = useState(0);

  function addUser(newUser: any) {
    const { firstName, email } = newUser.target.value;
    const currectUser = usersToMail;
    currectUser.push({ firstName, email });
    setUsersToMail(currectUser);
    let counter = count + 1;
    setCount(counter);
  }

  function removeUser(index: number) {
    const currectUser = usersToMail;
    if (index !== -1) currectUser.splice(index, 1);
    setUsersToMail(currectUser);
    let counter = count + 1;
    setCount(counter);
  }

  function handleSubmit(formData: FormData) {
    const mailInfo = {
      subject: formData.get("subject"),
      reason: formData.get("reason"),
      otp: formData.get("otp"),
      recivers: usersToMail,
    };
    for (const iterator of mailInfo.recivers) {
      sendMail(
        mailInfo.subject,
        iterator.email,
        otpMail(iterator.firstName, mailInfo.otp, mailInfo.reason)
      );
    }
  }
  return (
    <>
      <div className="w-full h-full md:p-5 p-2">
        <div className="py-4 text-center font-bold">OTP Mailer</div>
        <div className="overflow-x-scroll w-full h-20 flex items-center">
          {usersToMail.length > 0 ? (
            usersToMail.map((res: any, index: any) => {
              console.log(usersToMail);
              return (
                <Chip
                  label={res.firstName}
                  onDelete={() => removeUser(index)}
                  key={index}
                  className="m-4"
                />
              );
            })
          ) : (
            <p className="text-center w-full">No User Selected Yet...</p>
          )}
        </div>
        <div className="mt-3">
          <form action={handleSubmit}>
            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="subject"
                label="SUBJECT"
                required
              />
            </FormControl>

            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="reason"
                label="REASON"
                required
              />
            </FormControl>

            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="otp"
                label="OTP"
                required
              />
            </FormControl>

            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <InputLabel>Recivers *</InputLabel>
              <Select
                name="recivers"
                onChange={addUser}
                label="Recivers *"
                required
              >
                {users.map((res: any, index: any) => {
                  return (
                    <MenuItem key={index} value={res}>
                      {res.firstName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <div className="flex justify-center w-full mt-5">
              <Button variant="outlined" type="submit">
                Send Mail
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
