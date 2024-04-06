import JustAdd from "./components/justadd"
import ShowInvestmentCards from "./components/showcards"
import Investment from "@/model/investments"

export default async function AdminInvestments() {
    // const investments = await Investment.find()

    const investments: any[] = []
    return <>
        <div className="md:w-11/12 mx-auto mt-5">
            {investments.length <= 0 ? <div>
                <div className="text-center w-full text-4xl font-thin text-gray-600 mt-10">
                    No Investments Yet
                </div>
            </div> :
                investments.map((res, index) => {
                    return <div key={index} className="grid md:grid-cols-2">
                        <ShowInvestmentCards prop={JSON.stringify(res)} />
                    </div>
                })
            }

            <JustAdd />
        </div>
    </>
}