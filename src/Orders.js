import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Orders() {
  let [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
      .then((res) => {
        setOrder(res.data);
      });
  });

  return (
    <div>
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

          {order.map((x) => {
            return (
              <tr>
                <td>{x.id}</td>
                <td>{x.customerName}</td>
                <td>
                  {x.orderDate}, {x.orderTime}
                </td>
                <td>{x.amount}</td>
                <td>{x.orderStatus}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Orders;
