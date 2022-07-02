import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Calender from "./Pages/Calender/Calender";
import Tasks from "./Pages/ToDo/Tasks/Tasks";
import Completed from "./Pages/ToDo/Completed/Completed";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="completed" element={<Completed />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
