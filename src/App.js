import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Orders from "./Orders";
import Login from "./Login";
import Products from "./Products";
import Users from "./Users";

function App() {
  let [isLoggedin, setLoggedin] = useState(true);
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  function updateStates() {
    setLoggedin(userName == "admin" && password == "admin" ? !isLoggedin : "");
  }

  return (
    <div>
      <div className="headbar">
        <BrowserRouter>
          <div className="nav">
            <div>
              <Link className="link" to="/orders">
                Orders
              </Link>
            </div>
            <div>
              <Link className="link" to="/products">
                Products
              </Link>
            </div>
            <div>
              <Link className="link" to="/users">
                Users
              </Link>
            </div>
            <div>
              {isLoggedin ? (
                <button className="logg" onClick={updateStates}>
                  Logout
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <Routes>
            <Route path="/orders" element={isLoggedin ? <Orders /> : ""} />
            <Route path="/products" element={isLoggedin ? <Products /> : ""} />
            <Route path="/users" element={isLoggedin ? <Users /> : ""} />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        {isLoggedin ? (
          ""
        ) : (
          <div className="login">
            <div>
              <input
                className="user"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div>
              <input
                className="user"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button onClick={updateStates}>Logged in</button>
            <h2>username: admin and password: admin</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
