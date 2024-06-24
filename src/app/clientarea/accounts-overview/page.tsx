import { authOptions } from "@/helpers/auth";
import dbConnect from "@/helpers/dbConnect";
import Account from "@/model/accounts";
import { Add, ViewInArOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { format } from "date-fns";
import UserInvestment from "@/model/userinvestments";

export default async function AccountSurmary() {
  await dbConnect();
  const session = (await getServerSession(authOptions)) as any;
  const accounts = await Account.find({ user: session?.user.id });

  const investments = await UserInvestment.find({ user: session?.user.id });

  return (
    <>
      <div className="min-h-screen dark:bg-gray-800 bg-gray-100 text-gray-500 dark:text-gray-200 px-5 md:text-md text-sm float-left w-full">
        <div className="mt-5">
          {accounts.length < 1 ? (
            <div className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md p-5 flex justify-center items-center">
              No Accounts
            </div>
          ) : (
            <>
              <div className="text-center text-4xl font-thin text-gray-500">
                Trading Accounts
              </div>
              {accounts.map((res, index) => {
                let date = res.endDate;
                return (
                  <div
                    className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md flex p-5 mt-5"
                    key={index}
                  >
                    <div className="flex flex-wrap w-full md:ml-5 items-center text-xs md:text-sm">
                      <div className="flex w-1/2 sm:w-1/4">
                        <div className="rounded shadow flex justify-center items-center p-2.5">
                          <ViewInArOutlined fontSize="large" />
                        </div>

                        <div className="flex-col w-full ml-1">
                          <div className="font-semibold">
                            {res.accountType} - {res.accountNumber}
                          </div>
                          <div className="font-semibold">
                            ${res.startAmount}
                          </div>
                          <div className="">{res.status}</div>
                        </div>
                      </div>

                      <div className="flex-col md:text-center w-1/2 sm:w-1/4 text-right">
                        <div className="">Balance</div>
                        <div className="mt-2.5 text-blue-900 dark:text-gray-500">
                          ${res.balance}
                        </div>
                      </div>
                      <div className="flex-col text-center w-1/2 sm:w-1/4 mt-5 md:mt-0">
                        <div className="">Expiry Date</div>
                        <div className="mt-2.5 text-gray-300 dark:text-gray-500">
                          {format(date, "LLLL d, yyyy")}
                        </div>
                      </div>
                      <div className="w-1/2 sm:w-1/4 mt-5 md:mt-0 flex justify-end">
                        <div className="w-full flex justify-end">
                          {res.status === "active" ? (
                            <Link href={`./dashboard/${res.accountNumber}`}>
                              <Button variant="outlined" className=" ">
                                Dashboard
                              </Button>
                            </Link>
                          ) : (
                            <p className="capitalize">{res.status}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <Link
            href={"/clientarea/trading-space"}
            className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md p-5 flex justify-center items-center mt-10"
          >
            <Add /> New Account
          </Link>
        </div>

        <div className="mt-5">
          {investments.length < 1 ? (
            <div className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md p-5 flex justify-center items-center">
              No Investments
            </div>
          ) : (
            <>
              <div className="text-center text-4xl font-thin text-gray-500">
                Investments
              </div>
              {investments.map((res, index) => {
                return (
                  <div
                    className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md flex p-5 mt-5"
                    key={index}
                  >
                    <div className="flex flex-wrap w-full md:ml-5 items-center text-xs md:text-sm">
                      <div className="flex w-1/2 sm:w-1/4">
                        <div className="rounded shadow flex justify-center items-center p-2.5">
                          <ViewInArOutlined fontSize="large" />
                        </div>

                        <div className="flex-col w-full ml-1">
                          <div className="font-semibold">{res.name}</div>
                          <div className="font-semibold">{res.ROI}%</div>
                          <div className="capitalize">{res.status}</div>
                        </div>
                      </div>

                      <div className="flex-col md:text-center w-1/2 sm:w-1/4 text-right">
                        <div className="">Balance</div>
                        <div className="mt-2.5 text-blue-900 dark:text-gray-500">
                          ${res.balance}
                        </div>
                      </div>
                      <div className="flex-col text-center w-1/2 sm:w-1/4 mt-5 md:mt-0">
                        <div className="">Since</div>
                        <div className="mt-2.5 text-gray-300 dark:text-gray-500">
                          {format(
                            new Date(Number(res.createdOn)).toISOString(),
                            "LLLL d, yyyy"
                          )}
                        </div>
                      </div>

                      <div className="w-1/2 sm:w-1/4 mt-5 md:mt-0 flex justify-end">
                        <div className="w-full flex justify-end">
                          {res.withdrawable === "true"
                            ? "You Can Now Contact Customer Care to make Withdrawals"
                            : "You Can't Make Withdrawals from this Accoun"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <Link
            href={"/clientarea/trading-space"}
            className="bg-white dark:bg-gray-700 shadow rounded hover:shadow-md p-5 flex justify-center items-center mt-10"
          >
            <Add /> New Account
          </Link>
        </div>
      </div>
    </>
  );
}
