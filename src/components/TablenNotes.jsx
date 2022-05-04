import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, DiasdeDescuentos , Hotel, paymentMethod, amount) {
  return { id, DiasdeDescuentos, Hotel,  paymentMethod, amount};
}

const rows = [
  createData(
    0,
    '20/07/2022',
    'Hotel Cuesta de Miranda',
    'VISA ⠀•••• 3719',
    20000.44,
  ),
  createData(
    1,
    '23/09/2023',
    'Cabaña La Martina',
    'VISA ⠀•••• 2574',
    15000.99,
  ),
  createData(2,  '15/02/2022', 'Posada del Olivo',  'MC ⠀•••• 1253', 10000.81),
  createData(
    3,
    '24/12/ 2022',
    'GM Rooms Rental SuitesSe  ',
    'AMEX ⠀•••• 2000',
    24999.39,
  ),
  createData(
    4,
    '31/01/2023',
    'Hotel Boutique Pircas NegrasSe',
    'VISA ⠀•••• 5919',
    20500.79,
  ),
];

const TablenNotes = () => {
  return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Dias de Descuentos</TableCell>
            <TableCell>Hotel</TableCell>
            {/* <TableCell>Ship To</TableCell> */}
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.DiasdeDescuentos}</TableCell>
              <TableCell>{row.Hotel}</TableCell>
              {/* <TableCell>{row.shipTo}</TableCell> */}
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default TablenNotes