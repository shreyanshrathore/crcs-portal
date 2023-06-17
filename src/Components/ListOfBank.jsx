

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
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
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
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

function createData(
  BankName: string,
  Address: string,
  StateName: string,
  DistrictName: string,
) {
  return { BankName, Address, StateName, DistrictName };
}

const rows = [
  createData(
    'A.P. Mahesh Cooperative Urban Bank Ltd.',
    '5-3-989, 3rd Floor, Sherza Estate, Nizam Shahi Road, Hyderabad',
    'ANDHRA PRADESH',
    'HYDERABAD'
  ),
  createData(
    'The Andhra Bank Employees Cooperative Bank Ltd (ABC Coop Bank)',
    'Mithila Complex, 3rd Floor, H. No. 4-4-296/297, Post Box No. 535, Bank Street, Hyderabad, 500095',
    'ANDHRA PRADESH',
    'HYDERABAD'
  ),
  createData(
    'Vishakhapatnam Cooperative Bank Ltd.',
    'D.no.47-3-27/3, 5th Lane, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh.Pin: 530016',
    'ANDHRA PRADESH',
    'VISAKHAPATANAM'
  ),
  createData(
    'The Bihar Rajya Sahakari Bhumi Vikas Bank Simiti',
    'Budh Marg, Patna – 800 001(Bihar)',
    'BIHAR',
    'PATNA'
  ),
  createData(
    'Citizens Cooperative Bank Ltd',
    'Oppo. Mahatma Gandhi Vidhyalaya, Jawahar Road, Rajkot, Gujarat 360001',
    'GUJARAT',
    'RAJKOT'
  ),
  createData(
    'Kalupur Commercial Coop. Bank',
    'Kalupur Bank Bhawan, Nr. Income Tax Circle, Ashram Road, Ahmedabad, Gujarat 380014',
    'GUJARAT',
    'AHMEDABAD'
  ),
  createData(
    'Nagar Urban Cooperative Bank Ltd.',
    'Urban Bank Road, Ahmednagar, Gujarat',
    'GUJARAT',
    ''
  ),
  createData(
    'Nutan Nagarik Sahakari Bank Ltd.',
    '1 to 9, 2nd Floor, A Wingh, Maradia Plaza, Ellisbridge, Ahmedabad 380006 Gujarat',
    'GUJARAT',
    'AHMEDABAD'
  ),
];

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
        <TableRow>
            
            <StyledTableCell>Name of Bank</StyledTableCell>
            <StyledTableCell align="left" > Address</StyledTableCell>
            <StyledTableCell align="right">State Name</StyledTableCell>
            <StyledTableCell align="right">District Name</StyledTableCell>
          </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.BankName}>
                <TableCell component="th" scope="row">
                {row.BankName}
              </TableCell>
              <TableCell component="th" scope="row" >
                {row.Address}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.StateName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.DistrictName}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
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
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
