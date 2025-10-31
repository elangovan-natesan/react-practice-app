import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul class="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inventory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
        <AppRoutes />
      </div>
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          @2023
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
