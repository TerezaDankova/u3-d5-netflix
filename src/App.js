
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TvShows from "./components/TvShows";
import Home from "./components/Home";
import Details2 from "./components/Details2";
import MyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <div>
          <h1>Hello</h1>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvShows" element={<TvShows/>} />
          <Route path="/details/:movieId" element={<Details2 />} />
      
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;