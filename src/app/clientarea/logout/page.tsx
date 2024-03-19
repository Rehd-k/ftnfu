'use client'
import { signOut } from "next-auth/react"
import Preloaders from "../../../components/preloader";

export default async function Logout() {
    await signOut()
    return <>
        <Preloaders />
    </>
}