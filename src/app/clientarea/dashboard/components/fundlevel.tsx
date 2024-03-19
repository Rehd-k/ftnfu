import Tooltip from "@mui/material/Tooltip";

export default function FundLevel() {
    return <div className="mt-10 flex mx-auto">
        <Tooltip title="$ 2000">
            <div className="w-1/4 rounded-r rounded-full border h-4 bg-gray-400 hover:bg-gray-500 ease-in-out transition-all duration-500"></div>
        </Tooltip>
        <div className="w-1/4 border h-4"></div>
        <div className="w-1/4 border h-4"></div>
        <div className="w-1/4 rounded-l rounded-full border h-4"></div>
    </div>

}