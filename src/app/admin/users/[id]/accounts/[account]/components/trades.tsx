'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { format } from 'date-fns';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }} className='dark:text-gray-100'>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(date: string, symbol: string, entry: number, price: number, type: number) {
    return { date, symbol, entry, price, type };
}



export default function UsersTrades({ trades, Header }: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    let rows: any[] = []
    if (trades) {
        rows = trades.sort((a: any, b: any) => (a.tradeDate < b.tradeDate ? -1 : 1));
    }



    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="mt-10">
            <div className="font-semibold">
                {
                    Header
                }
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 text-white rounded-lg shadow-lg mt-5'>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell className='dark:text-gray-100'>Date</TableCell>
                            <TableCell align="center" className='dark:text-gray-100'>Symbol</TableCell>
                            <TableCell align="center" className='dark:text-gray-100'>Entry</TableCell>
                            <TableCell align="center" className='dark:text-gray-100'>Price</TableCell>
                            <TableCell align="center" className='dark:text-gray-100'>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row: any, index: number) => (
                            <TableRow key={index} className={`bg-gradient-to-r ${row.type === 'sell' ? 'from-red-500 to-red-700' : 'from-blue-500 to-blue-700'} text-white`}>
                                <TableCell className='dark:text-gray-100'>
                                    {format(row.tradeDate, 'LLLL d, yyyy')}
                                </TableCell>
                                <TableCell align="center" className='dark:text-gray-100'>
                                    {row.pair}
                                </TableCell>
                                <TableCell align="center" className='dark:text-gray-100'>
                                    {row.entryPrice}
                                </TableCell>
                                <TableCell align="center" className='dark:text-gray-100'>
                                    {row.exitPrice}
                                </TableCell>
                                <TableCell align="center" className='dark:text-gray-100'>
                                    {row.type}
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
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
        </div>

    );
}
