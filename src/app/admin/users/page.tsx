import User from "@/model/user";
import UsersTable from "./components/usersTable";
import dbConnect from "@/helpers/dbConnect";

export default async function UsersAdmin() {
  await dbConnect();
  let dbusers = await User.find();
  return (
    <>
      <UsersTable dbusers={JSON.stringify(dbusers)}/>
    </>
  );
}
