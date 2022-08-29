import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Products() {
  let [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
      .then((res) => {
        setproduct(res.data);
      });
  });

  return (
    <div>
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>Expiry Date </th>
            <th>Unit Price </th>

            <th>Stock</th>
          </tr>

          {product.map((x) => {
            return (
              <tr>
                <td>{x.id}</td>
                <td>{x.medicineName}</td>
                <td>{x.medicineBrand}</td>
                <td>{x.expiryDate}</td>
                <td>{x.unitPrice}</td>
                <td>{x.prescriptionRequired}</td>
                <td>{x.stock}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Products;
