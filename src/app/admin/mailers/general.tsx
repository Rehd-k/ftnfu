"use client";

import { GeneralMail } from "@/mails/general";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function GeneralMailer({ dbUsers, sendMail }: any) {
  const [users, setUsers] = useState(JSON.parse(dbUsers));
  const [usersToMail, setUsersToMail] = useState<any[]>([]);
  const [count, setCount] = useState(0);

  async function updateUserList() {
    toast("updating users");
    const users = await axios.get("/admin/users/api");
    setUsers(users.data);
    toast("Done");
  }

  useEffect(() => {
    updateUserList();
  }, []);

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

  async function handleSubmit(formData: FormData) {
    const mailInfo = {
      subject: formData.get("subject"),
      reason: formData.get("reason"),
      body: formData.get("body"),
      subtext: formData.get("subtext"),
      action_link: formData.get("actionLink"),
      action_display: formData.get("actionDisplay"),
      recivers: usersToMail,
    };
    for (const iterator of mailInfo.recivers) {
      toast(`Now sending Mail to ${iterator.firstName}`, {
        type: "info",
      });
      try {
        await sendMail(
          mailInfo.subject,
          iterator.email,
          GeneralMail(
            mailInfo.body,
            mailInfo.action_link,
            mailInfo.action_display,
            iterator.firstName,
            mailInfo.subtext,
            mailInfo.reason
          )
        );
      } catch (error) {
        toast(
          "An Error Occured One or more of your users wont recive the Email"
        );
      }
    }
    toast("Done");
  }
  return (
    <>
      <div className="flex justify-center">
        <Button variant="outlined" onClick={updateUserList}>
          Update Users
        </Button>
      </div>
      <div className="w-full h-full md:p-5 p-2">
        <div className="py-4 text-center font-bold">General Mailer</div>
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
                name="body"
                label="BODY"
                multiline
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
                name="actionLink"
                label="Action Link"
              />
            </FormControl>

            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="actionDisplay"
                label="Action Display"
              />
            </FormControl>

            <FormControl
              sx={{ marginTop: 2, minWidth: 120 }}
              className="w-full"
            >
              <TextField
                className="outline-none border-none"
                type="text"
                name="subtext"
                multiline
                label="SUBTEXT"
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
      <ToastContainer />
    </>
  );
}
