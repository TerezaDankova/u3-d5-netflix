import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import MyNavbar from "./Components/MyNavbar";
import MyDiv from "./Components/MyDiv";
import MyFooter from "./Components/MyFooter";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyDiv />
      <Home />
      <MyFooter/>
    </div>
  );
};

export default App;
