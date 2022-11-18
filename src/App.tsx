import { GlobalStyle } from "./assets/globalStyle/style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
