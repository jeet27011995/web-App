import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Users() {
  let [user, userDetails] = useState([]);
  let [query, setQuery] = useState("");
  let [list, setList] = useState("");

  useEffect(() => {
    axios
      .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
      .then((res) => userDetails(res.data));
  }, []);

  useEffect(() => {
    if (query !== "") {
      axios
        .get(
          `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/u
    sers?fullName=${query}`
        )
        .then((res) => {
          setList(res.data);
        });
    }
  }, [query]);

  return (
    <div>
      <div className="search1">
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <input className="reset" type="reset" value="reset" />
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>User Avatar</th>
            <th>Full Name</th>
            <th>DoB</th>
            <th>Gender</th>
            <th>Current Location</th>
          </tr>

          {list.length == 0 &&
            user.map((x) => {
              return (
                <tr>
                  <td>{x.id}</td>
                  <td>
                    <img src={x.profilePic} />
                  </td>
                  <td>{x.fullName}</td>
                  <td>{x.dob}</td>
                  <td>{x.gender}</td>
                  <td>
                    {x.currentCity}, {x.currentCountry}
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Users;
