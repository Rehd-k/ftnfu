import User from "@/model/user";
import UsersTable from "./components/usersTable";
import dbConnect from "@/helpers/dbConnect";

export default async function UsersAdmin() {
  await dbConnect();
  let dbusers = (await User.find()).map(user => user.toJSON());
  return (
    <>
      <UsersTable dbusers={dbusers}/>
    </>
  );
}
