import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import datas from './year.json';

function createData(year, num) {
  return { year, num };
}

const rows = {
  "Andhra Pradesh": [
    {
      "S.No": 1,
      "Year": 1992,
      "Num": 1
    },
    {
      "S.No": 2,
      "Year": 1999,
      "Num": 1
    },
    // Rest of the data objects...
  ],
  "Arunachal Pradesh": [
    {
      "S.No": 1,
      "Year": 2012,
      "Num": 1
    }
  ]
};

export default function AccessibleTable({ name }) {
  const filteredRows = datas[name] || []; // Filter the rows based on the provided name
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300, width: 100 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>YEAR</TableCell>
            <TableCell align="right">hello</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((item) => (
            <TableRow key={`${name}-${item.Year}`}>
              <TableCell component="th" scope="row">
                {item.Year}
              </TableCell>
              <TableCell align="right">{item.Num}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
