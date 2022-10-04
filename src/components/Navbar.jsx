import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.nav}>

<Link to="/admin">Admin</Link>
<Link to="/user">User</Link>

<Link to="/login">Login</Link>
<Link to="/">SignUp</Link>

    </div>
  )
}

export default Navbar