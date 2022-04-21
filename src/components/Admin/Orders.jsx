import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "../Header/Header";
import { useState } from 'react';

export default function BasicTable() {
  const [id, setId] = useState("");
  const [username, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState("");

  const handleChange = async(e) => {
    e.preventDefault();
    setId("");
    setUserName("");
    setAddress("");
    setAmount("");
    setStatus("");
    setOrder("");

    let response = await fetch("http://localhost:8800/api/order/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({id, username, address, amount, status}),
    });
    let order = await response.json();
    console.log(order);
 };

  return (
    <div>
    <Header/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((order) => (
            <TableRow
              key={order.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.username}
              </TableCell>
              <TableCell align="right">{order.username}</TableCell>
              <TableCell align="right">{order.address}</TableCell>
              <TableCell align="right">{order.amount}</TableCell>
              <TableCell align="right">{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}