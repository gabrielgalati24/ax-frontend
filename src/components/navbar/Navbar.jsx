import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-link"> Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
       
      </li>
      <li className="nav-link">
      <Link to="/register-becado" className="nav-link">Registar becados</Link>
      </li>
      <li className="nav-link">
      <Link to="/all-coach" className="nav-link">Todos los coach</Link>
      </li>
      <li className="nav-link">
      <Link to="/all-becados" className="nav-link">Todos los becados</Link>
      </li>
      <li className="nav-item dropdown">


      </li>
    </ul>
  </div>
</nav>
        
        

    </div>
  )
}
