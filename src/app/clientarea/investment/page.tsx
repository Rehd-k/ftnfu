import React from "react";
import Preloaders from "../../../components/preloader";
import InvestmentModel from "@/model/investments";
import Investments from "./components/investmentCard";
export default async function Investment() {

    // const investments = await InvestmentModel.find()

    const investments: any[] = []
    return  <div className="md:w-11/12 mx-auto mt-5">
        {investments.length <= 0 ? <Preloaders /> :

            investments.map((res, index) => {
                return <div className="grid md:grid-cols-2" key={index}>
                    <Investments prop={JSON.stringify(res)} />
                </div>
            })

        }


    </div>
}