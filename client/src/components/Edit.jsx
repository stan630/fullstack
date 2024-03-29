import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
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

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post(`http://localhost:8000/edit_user/${id}`, data[0])
  .then ((res)=>{
    navigate("/")
    console.log(res)
  })
  .catch((err)=> console.log(err))
  }

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>Edit User</h1>
      <Link to="/" className="btn btn-success">
        Back
      </Link>
      {data.map((user)=> {
        return(
      <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="firstName">First Name</label>
            <input value= {user.firstName} type="text" name="firstName" onChange={(e)=> setData([{...data[0], firstName: e.target.value}])} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="lastName">Last Name</label>
            <input value={user.lastName} type="text" name="lastName" onChange={(e)=> setData([{...data[0], lastName: e.target.value}])} 
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="gender">Gender</label>
            <input value={user.gender} type="text" name="gender" onChange={(e)=> setData([{...data[0], gender: e.target.value}])} 
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <input value={user.email} type="email" name="email" onChange={(e)=> setData([{...data[0], email: e.target.value}])} 
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <input value={user.password} type="password" name="password" onChange={(e)=> setData([{...data[0], password: e.target.value}])}
            />
          </div>
          <div className="form-group my-3">
                <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
     )
    })}
    </div>
  );
};

export default Edit;
