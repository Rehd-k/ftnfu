'use client'
import { useState } from "react";
import CreateCard from "./createCard";


export default function JustAdd() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose= () => setOpen(false) ;

    return <>
        <div className="w-full flex justify-center">
            <button
                onClick={handleOpen}
                className="w-full py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Add New
            </button>
        </div>


        <CreateCard isOpen={open} handleClose={handleClose} />

    </>
}