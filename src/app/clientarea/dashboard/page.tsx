'use client'
import { redirect } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"

export default function RedirectAction() {
    toast('Select Account to View')
    redirect('/clientarea/accounts-overview')
    return <>
        <ToastContainer />
    </>
}