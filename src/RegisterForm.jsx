import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [list, setlist] = useState([]);
  const [adminAdded, setAddminadd] = useState(false);
  const [search, setSearch] = useState("");

  const addData = () => {
    if (user && email && role) {
      if (role === "admin" && adminAdded) {
        alert("Admin Already Exists.");
        return;
      }

      let newUser = { user, email, role };
      setlist([...list, newUser]);
      if (role === "admin") {
        setAddminadd(true);
      }
      setUser("");
      setEmail("");
      setRole("");
    } else {
      alert("Please fill details");
    }
  };

  const deletebtn = (index) => {
    let newlist = [...list];
    newlist.splice(index, 1);
    setlist(newlist);

    if (list[index].role === "admin") {
      setAddminadd(false);
    }
  };
  return (
    <div className="box">
      <h2 className="Register">Register Form</h2>
      <br />
      <br />
      <form action="" className="form">
        <label>UserName:</label>
        <input
          type="text"
          className="userinput"
          value={user}
          id="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <br />

        <label>Email: </label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          className="emailinput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <label>Role:</label>
        <select
          name=""
          id="roleselect"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />
        <br />

        <button
          className="addbtn"
          type="button"
          onClick={() => {
            addData();
          }}
        >
          Add
        </button>
      </form>
      <br />

      <input
        type="search"
        name=""
        placeholder="Search...."
        id="searchbar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />
      <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Button</th>
        </tr>
      </thead>

      <tbody>
        {list
          .filter((result) => {
            return (
              result.user.includes(search) || result.email.includes(search)
            );
          })
          .map((result, index) => {
            return (
              <tr key={index}>
                <td>{result.user} </td>
                <td> {result.email} </td>
                <td>{result.role} </td>
                <td><button className="deletebtn"
                  onClick={() => {
                    deletebtn(index);
                  }}
                >
                  Delete
                </button></td>
              </tr>
            );
          })}
      </tbody>
      </table>
    </div>
  );
};

export default RegisterForm;
