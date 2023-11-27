import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="top-nav-header">
      <nav className="top-nav">
        <Link to={"/"}><h2 className="nav-logo">Jonathan's</h2></Link>
        <ul>
          <Link to={"/about"}>OM MIG</Link>
          <Link to={"/projects"}>MINA PROJEKT</Link>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;