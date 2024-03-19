import Image from "next/image";

export default function Preloaders() {
    return <>
        <div className="h-screen w-full bg-gray-100 bg-opacity-10 overflow-hidden relative flex justify-center items-center">
            <div className="absolute w-full h-full flex justify-center items-center">
                <Image alt="" src="/logo.svg" width={30} height={30} />
            </div>

            <div className="circle h-32 w-32">

            </div>
        </div>
    </>
}