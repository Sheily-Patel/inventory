import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Header from "../Header/Header";
import axios from 'axios';

const useStyle = makeStyles({
  heading: {
    marginTop: "3%",
    paddingLeft: "1%",
  },
  table: {
    marginTop: "2%",
    paddingLeft: "1%",
  }
});

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [order, setOrder] = useState([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`
    },
  };

  useEffect(() => {
    axios.get("http://localhost:8800/api/order/").then(response => {return response.json(order);}).then((order)=>{setOrder(order)},config);
  });

  const classes = useStyle();
  return (
    <React.Fragment>
      <Header/>
     <h3 className={classes.heading}>Recent Orders</h3>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.username}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell align="right">{`$${order.status}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table><br/>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }} className={classes.heading}>
        See more orders
      </Link>
    </React.Fragment>
  );
}