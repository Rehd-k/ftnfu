import React from "react";
import Preloaders from "../../../components/preloader";
import Investments from "./components/investmentCard";
import Investment from "@/model/investments";
import dbConnect from "@/helpers/dbConnect";
export default async function InvestmentPage() {
    await dbConnect()
    const investments = await Investment.find()

    return <div className="md:w-11/12 mx-auto mt-5">
        {investments.length <= 0 ? <Preloaders /> :

            investments.map((res, index) => {
                return <div className="grid md:grid-cols-2" key={index}>
                    <Investments prop={JSON.stringify(res)} />
                </div>
            })

        }


    </div>
}