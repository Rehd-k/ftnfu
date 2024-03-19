import { CheckBoxOutlined, Groups2Outlined, LoginOutlined, MoneyOutlined, OutboundOutlined, SmsFailedOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function AdminDashBoard() {
    return <>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pb-32 pt-10 px-2 bg-gray-50">
            <Link href="./users" className="md:w-full w-full mx-auto h-52 bg-gradient-to-br from-blue-800 to-blue-950 shadow-lg rounded-lg  text-gray-200 ease-in-out transition-all duration-1000 hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">
                    <Groups2Outlined fontSize="large" />
                </div>

                <div className="text-center font-bold mt-5">
                    129 Users
                </div>
            </Link>


            <Link href="./accounts" className="w-full h-52  bg-gradient-to-b from-orange-800 to-orange-950 shadow-lg rounded-lg  text-gray-200 ease-in-out transition-all duration-1000 hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">
                    <CheckBoxOutlined fontSize="large" />
                </div>

                <div className="text-center font-bold mt-5">
                    129 Accounts
                </div>
            </Link>


            <Link href="./deposits" className="w-full h-52 bg-gradient-to-t from-cyan-800 to-cyan-950  shadow-lg rounded-lg  text-gray-200 ease-in-out transition-all duration-1000 hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">
                    <LoginOutlined />
                </div>

                <div className="text-center font-bold mt-5">
                    129 Confirmed Deposits
                </div>
            </Link>


            <div className="w-full h-52 bg-gradient-to-t from-yellow-800 to-yellow-950  shadow-lg rounded-lg  text-gray-200 ease-in-out transition-all duration-1000 hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">

                    <SmsFailedOutlined />
                </div>

                <div className="text-center font-bold mt-5">
                    129 Pending Deposits
                </div>
            </div>


            <div className="w-full h-52 bg-gradient-to-t from-green-800 to-green-950  shadow-lg hover:shadow-2xl rounded-lg  text-gray-200 ease-in-out transition-all hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">
                    <MoneyOutlined />
                </div>

                <div className="text-center font-bold mt-5">
                    $129 Deposits Amount
                </div>
            </div>


            <div className="w-full h-52 bg-gradient-to-t from-red-800 to-red-950  shadow-lg hover:shadow-2xl rounded-lg  text-gray-200 ease-in-out transition-all hover:bg-gradient-to-tr hover:cursor-pointer">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gray-200 flex justify-center items-center mt-5">
                    <OutboundOutlined />
                </div>

                <div className="text-center font-bold mt-5">
                    129 Total Withdrawal
                </div>
            </div>
        </div>
    </>
}