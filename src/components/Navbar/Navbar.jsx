import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/weather"> <p>Weather</p> </Link>
      <Link to="/question"> <p>Question</p> </Link>
      <Link to="/football"> <p>Football</p> </Link>
    </nav>
  )
}

export default Navbar
