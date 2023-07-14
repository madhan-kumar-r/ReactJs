import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import MovieDetails from "./Components/MovieDetails";
import Edit from "./Components/Edit";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/edit/:id" element={<Edit/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
