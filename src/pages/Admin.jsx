import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>

      <Link to="/admin/form">Jobs Form </Link>
      <Link to="/admin/list">Jobs List </Link>

    </div>
  )
}

export default Admin