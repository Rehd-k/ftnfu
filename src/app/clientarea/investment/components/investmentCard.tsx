import Link from "next/link";

export default function Investments({ prop }: any) {
    const props = JSON.parse(prop)

    return <>
        <div className="rounded-lg w-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-100">
            <div className="bg-blue-700 text-gray-100 h-16 font-bold flex justify-center items-center rounded-t-lg">
                {props.name}
            </div>


            <div className="mt-10 text-gray-600 dark:text-gray-100 flex justify-center">
                <h5>
                    <span className="md:text-sm text-xs">%</span>
                    <span className="text-2xl font-bold">
                        {props.ROI}
                    </span>
                </h5>

            </div>
            <div className="mt-1 text-center font-extrabold">
                ROI
            </div>

            <ul className="mt-5 px-4 md:text-sm text-xs font-semibold">
                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Minimum</p>
                    <p className="">$ {props.minimum}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Maximum</p>
                    <p className="">$ {props.maximum}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Payout</p>
                    <p className="">$ {props.payout}</p>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300">
                    <p className="">Period</p>
                    <p className="">{props.period}</p>
                </li>
            </ul>

            <div className="mt-5 flex justify-between px-2 gap-5 pb-5">

                <Link href={`investment/${props._id}`} className="w-full">
                    <button

                        className="w-full py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Make Investment
                    </button>
                </Link>
            </div>
        </div>
    </>
}