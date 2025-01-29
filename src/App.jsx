import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import TaskPage from "./pages/TaskPage";
import TaskAdded from "./pages/TaskAdded";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/added-tasks" element={<TaskAdded />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
