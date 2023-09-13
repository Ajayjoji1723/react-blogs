import { Link } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Blogs
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" >
               Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
