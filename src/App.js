import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./global/Navbar";
import Behaviors from "./pages/Behaviors";
import Exercise from "./pages/Exercise";
import Goal from "./pages/Goal";
import Measure from "./pages/Measure";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/FoodMentor' element={<Goal />} />
        <Route path='/measure' element={<Measure />} />
        <Route path='/behaviors' element={<Behaviors />} />
        <Route path='/exercise' element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
