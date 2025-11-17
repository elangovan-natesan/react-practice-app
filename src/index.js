import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppContext from "./context/AppContext";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("state in redux store :", store.getState());

root.render(
  // <AppContext>
  <Provider store={store}>
    <App />
  </Provider>
  // </AppContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
