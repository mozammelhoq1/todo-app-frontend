import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Task from "./Pages/Task/Task";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
