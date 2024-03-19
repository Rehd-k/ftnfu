import { authOptions } from "@/helpers/auth";
import User from "@/model/user";
import { Person2Outlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getServerSession } from "next-auth";

export default async function Profile() {
    const session = await getServerSession(authOptions) as any

    const userInfo = await User.findById(session.user.id);

    console.log(userInfo);
    return <div className="dark:bg-gray-900 bg-gray-100 text-gray-500 dark:text-gray-200 pt-16 md:p-10 P-5 md:text-md text-sm px-5">
        <div className="md:p-5 p-5 bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-10">
            <div className="w-full">
                <div className="text-center md:text-left text-4xl font-thin">My Profile</div>
                <div className="mt-5 h-28 w-28 rounded-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 mx-auto md:mx-0">
                    <Person2Outlined color="inherit" fontSize="large" />
                </div>
            </div>

            <div className="mt-10 w-full grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="">
                    <p className="">Email</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" value={userInfo.email} />
                </div>

                <div className="">
                    <p className="">First Name</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" value={userInfo.firstName} />
                </div>

                <div className="">
                    <p className="">Last Name</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" value={userInfo.lastName} />
                </div>

                <div className="">
                    <p className="">Address</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" />
                </div>

                <div className="">
                    <p className="">City</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" />
                </div>

                <div className="">
                    <p className="">Zip Code</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" />
                </div>


                <div className="">
                    <p className="">Country</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" value={userInfo.country} />
                </div>

                <div className="">
                    <p className="">Phone</p>

                    <TextField className="mt-1 w-full" variant="outlined" size="small" value={userInfo.country}  />
                </div>
            </div>

            <div className="mt-10 w-full flex justify-center">
                <Button variant="outlined">
                    Save Profile
                </Button>
            </div>
        </div>


    </div>
}