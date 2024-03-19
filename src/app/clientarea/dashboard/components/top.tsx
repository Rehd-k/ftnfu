import RefreshOutlined from "@mui/icons-material/RefreshOutlined";
import { format } from "date-fns";

export default function TopPart({ account }: any) {
    return <div className="flex justify-around mt-10">
        <div className="">
            <span className="font-semibold">
                Account # {account.accountNumber} {account.accountType}
            </span> <br /> -  {account.status}
        </div>

        <div className="flex">
            <RefreshOutlined fontSize="small" />
            Updated 3 minutes ago
        </div>

        <div className="">
            <span className="font-semibold">
                Expiration Date
            </span>  {
                format(account.endDate, 'LLLL d, yyyy')
            }
        </div>
    </div>
}