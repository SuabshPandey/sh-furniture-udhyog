// import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Admin from "./components/router/admin/Admin";
import HomeRoute from "./components/router/homeRouter/HomeRoute";
// import DataFetch from "./DataFetch";

function App() {
  return (
    <div className="">
      <Header />
      <HomeRoute />

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
