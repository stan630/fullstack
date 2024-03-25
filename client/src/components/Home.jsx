import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Home = () => {
  
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8000/users`)
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>console.log(err))
    },[])
  
  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
        <h3>Users</h3>
        <div className="d-flex justify-content-end">
            <Link className='btn btn-success' to='/create'>Add User</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
               {
                data.map((user)=>{
                    return (<tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.id}</td>
                        <td>
                            <Link className='btn-btn-success' to={`/read/${user.id}`}>Read</Link>
                            <Link className='btn-btn-success' to={`/edit/${user.id}`}>Edit</Link>
                            <button className='btn btn-danger mx-2'>Delete</button>
                        </td>
                    </tr>)
                })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home