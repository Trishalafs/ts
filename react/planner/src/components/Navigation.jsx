import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end>Plan Budget</NavLink>
      <NavLink to="/tracker">Track Transactions</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </nav>
  )
}

export default Navigation;
