import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MultiPartForm from "./pages/MultiPartForm";
import MyTickets from "./pages/MyTickets";
import AboutProject from "./pages/AboutProject";
import Home from "./pages/Home";
function App() {
  return (
    <main className="bg-(--primaryColor) pb-3">
      <div className="w-[90%] max-w-700px mx-auto ">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<MultiPartForm />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/about-project" element={<AboutProject />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
