import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App Component mounted");

    return () => {
      console.log("App component unmounted");
    };
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
