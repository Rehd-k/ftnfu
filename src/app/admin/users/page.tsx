import User from "@/model/user";
import UsersTable from "./components/usersTable";
import dbConnect from "@/helpers/dbConnect";

export default async function UsersAdmin() {
    await dbConnect()
    const users = await User.find()
    return <>
        <UsersTable users={users} />
    </>
}