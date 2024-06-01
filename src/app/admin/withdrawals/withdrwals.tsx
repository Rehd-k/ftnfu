"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import Link from "next/link";
0;
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className="dark:text-gray-100">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(
  user: string,
  accountId: string,
  balance: string,
  paymentWallet: string,
  VAT: string,
  status: string
) {
  return { user, accountId, balance, paymentWallet, VAT, status };
}
export default function WithdrawalCompnent({ dbwithdrawals }: any) {
  const [withdrawals, setwithdrawals] = React.useState(dbwithdrawals);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();
  const rows = withdrawals.sort(
    (a: { createdOn: number }, b: { createdOn: number }) =>
      a.createdOn < b.createdOn ? -1 : 1
  );

  React.useEffect(() => {
    setwithdrawals(dbwithdrawals);
  }, [dbwithdrawals]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  async function handleTableUpdate() {
    const withdrawals = await axios.get("/admin/withdrawals/api?id=all");

    setwithdrawals(withdrawals.data);
    setRowsPerPage(10);
    setPage(0);
  }

  return (
    <div className="px-2">
      <Button variant="outlined" onClick={handleTableUpdate}>
        Update Table
      </Button>
      <div className="bg-gray-50 dark:bg-gray-800 text-white rounded-lg shadow-lg mt-5">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" className="dark:text-gray-100">
                User
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                Account Number
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                Balance
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                Wallet
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                VAT
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                Status
              </TableCell>
              <TableCell align="center" className="dark:text-gray-100">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row: any, index: number) => (
              <TableRow
                key={index}
                onClick={() => router.push(`./withdrawals/${row._id}`)}
                className="cusor-pointer"
              >
                <TableCell className="dark:text-gray-100">{row.user}</TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  {row.accountId}
                </TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  {row.balance}
                </TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  {row.paymentWallet}
                </TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  {row.VAT}
                </TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  {row.status}
                </TableCell>
                <TableCell align="center" className="dark:text-gray-100">
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // SelectProps={{
                //     inputProps: {
                //         'aria-label': 'rows per page',
                //     },
                //     native: true,
                // }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <ToastContainer />
    </div>
  );
}
