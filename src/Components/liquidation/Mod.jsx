

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

import datas from './module2.json'

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
      'Chakra MS Credit Cooperative Society Ltd.,',
      'Kolkata, West Bengal',
      'West Bengal',
      'Kolkata'
    ),
    createData(
      'Misal Multipurpose Cooperative Society Ltd.,',
      'Godrej Water Side, Tower-2,15th Floor, Office No.1505, 1506, 1507, Plot No.5, Block DP, Salt Lake, Sector-V, Kolkata-700091, West Bengal',
      'West Bengal',
      'Kolkata'
    ),
    createData(
      'Rainbow Multi State Credit Cooperative Society ltd.,',
      'Balaji Majestic, Mithu Road, Bank More, Dhanbad, Jharkhand',
      'Jharkhand',
      'Dhanbad'
    ),
    createData(
      'Sovereign Multipurpose Cooperative Society Ltd,',
      'P-164/1, CIT Road, Scheme-7M, Ultadanga, Ground Floor, near ICICI ATM, PS Manicktala, 24 Parganas (North) Kolkata 700054 West Bengal',
      'West Bengal',
      'Kolkata'
    ),
    createData(
      'Rage Multi State Credit Cooperative Society Ltd.,',
      'Parial Market, 3rd floor, Near 1 No. Rail Gate, Post Harba, Dist. North 24 Parganas, 743263, West Bengal',
      'West Bengal',
      'North 24 Parganas'
    ),
    createData(
      'Universal Multi State Credit Cooperative Society Ltd,',
      '24, Hemata Babu Sarani, Manglam Building, Block – A, 3rd Floor, office No. 304, Kolkata 700001 West Bengal',
      'West Bengal',
      'Kolkata'
    ),
    createData(
      'Lokhit Bharti Credit Cooperative Society Ltd,',
      'DSM No.635, 6th Floor, DLF Tower, Shivaji Marg, Najafgarh Road, New Delhi - 110015',
      'Delhi',
      'New Delhi'
    ),
    createData(
      'Eye Vision India Credit Cooperative Society Ltd, A112,',
      'Gali No.1, Shakarpur, Delhi 110092',
      'Delhi',
      'Delhi'
    ),
    createData(
      'Aadi Credit Cooperative Society Ltd, 915,',
      'pearls Omaxe Tower 2, Netaji Subhash Palace, New Delhi 110034',
      'Delhi',
      'New Delhi'
    ),
    createData(
      'Malaika Multi State Cooperative Credit Society Ltd.,',
      'Malaika Estate, Raje Shivaji Nagar, Sakivihar road, Pawai, Mumbai',
      'Mumbai',
      'Mumbai'
    )
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
          
          <StyledTableCell>Name of the Society </StyledTableCell>
          <StyledTableCell align="left" > State </StyledTableCell>
          <StyledTableCell align="right">Name Of Liquidator</StyledTableCell>
          <StyledTableCell align="right">Appointment Date</StyledTableCell>
          <StyledTableCell align="right">Liquidation date</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell> 
        </TableRow>
        {(rowsPerPage > 0
          ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : datas
        ).map((row) => (
          <TableRow key={row.SNO}>
            <TableCell style={{ width: 460 }} scope="row" >
              {row['S NO']} {row['Name of Society']}
            </TableCell>
            <TableCell style={{ width: 120 }} align="left">
              {row.State}
            </TableCell>
            <TableCell style={{ width: 260 }} align="right">
              {row['Name Of Liquidator']}
            </TableCell>
              <TableCell style={{ width: 120 }} scope="row" align='right'>
                {row['Date of Appointment Order']}
            </TableCell>
            <TableCell style={{ width: 120 }} scope="row" align='right'>
                {row['Liquidation Validity Date']}
            </TableCell>
            <TableCell style={{ width: 120 }} scope="row" align='right'>
                {row['Status']}
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
            count={datas.length}
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
