"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ConfirmationComponent() {
  const searchParams = useSearchParams();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  const email = searchParams.get("email");
  const id = searchParams.get("id");
  useEffect(() => {
    async function getUser() {
      const confirmed_user = await axios.get(
        `/confirmation/api?email=${email}&otp=${id}`
      );
      console.log(confirmed_user.data);
      if (confirmed_user.data) {
        setIsConfirmed(true);
        toast("Email Confirmed, Login and Continue");
        router.replace("/login");
      } else {
        toast("Unable to Confirm, Try again");
        router.replace("/login");
      }
    }
    getUser();
  }, []);

  return isConfirmed ? (
    <>
      <p>
        Current pathname: {email}, {id}
      </p>

      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  ) : (
    <>
      Nope sire
      <ToastContainer />
    </>
  );
}
