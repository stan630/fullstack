import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/get_user/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User</h1>
      <Link to="/" className="btn btn-success">
        Back
      </Link>
      {data.map((user) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {user["id"]}
            </li>
            <li className="list-group-item">
              <b>First Name: </b>
              {user["firstName"]}
            </li>
            <li className="list-group-item">
              <b>Last Name: </b>
              {user["lastName"]}
            </li>
            <li className="list-group-item">
              <b>Gender: </b>
              {user["gender"]}
            </li>
            <li className="list-group-item">
              <b>Email: </b>
              {user["email"]}
            </li>
            
          </ul>
        );
      })}
    </div>
  );
};

export default Read;
