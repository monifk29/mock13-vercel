import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div style={{display : "flex", justifyContent : "space-around", marginTop : "150px", fontSize : "xx-large", fontWeight : "600", color : "gray"}}>

      <Link to="/admin/form">Jobs Form </Link>
      <Link to="/admin/list">Jobs List </Link>

    </div>
  )
}

export default Admin