import React, { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Create = () => {
  
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  function handleSubmit (e){
    e.preventDefault()
    
    axios.post(`http://localhost:8000/add_user`, values)
    .then((res)=>{
        navigate("/")
        console.log(res)
    })
    .catch((err)=>console.log(err))
  }
  
    return (
    <div className="container vh-100 vw-100 bg-primary">
      <div className="row">
        <h3>Add User</h3>
        <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-success">Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" onChange={(e)=> setValues({...values, firstName: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={(e)=> setValues({...values, lastName: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="gender">Gender</label>
            <input type="text" name="gender" onChange={(e)=> setValues({...values, gender: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e)=> setValues({...values, email: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e)=> setValues({...values, password: e.target.value})}/>
          </div>
          <div className="form-group my-3">
                <button type="submit" className="btn.btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
