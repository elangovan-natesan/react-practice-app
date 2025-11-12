import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
