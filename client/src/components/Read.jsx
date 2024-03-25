import { useEffect, useState } from "react";
import {Link, useParams } from 'react-router-dom'
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
};

export default Read;
