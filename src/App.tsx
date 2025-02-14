import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MultiPartForm from "./pages/MultiPartForm";
import MyTickets from "./pages/MyTickets";
import AboutProject from "./pages/AboutProject";
function App() {
  return (
    <main className="bg-(--primaryColor)">
      <div className="w-[90%] max-w-700px mx-auto ">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<MultiPartForm />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/about-project" element={<AboutProject />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
