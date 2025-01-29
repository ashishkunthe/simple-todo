import { useSelector } from "react-redux";
import { getTask } from "../slice/taskSlice";
import { useNavigate } from "react-router-dom";

function TaskAdded() {
  const tasks = useSelector(getTask);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  function handler() {
    navigate(-1); // Go back to the previous page
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800 p-4">
      <div
        onClick={handler}
        className="text-gray-200 cursor-pointer mb-6 hover:underline"
      >
        Back
      </div>

      <h1 className="text-4xl font-bold mb-6">Your Added Tasks</h1>
      <div className="space-y-4 w-full max-w-xl">
        {tasks.length === 0 ? (
          <p className="text-xl text-gray-600 text-center">
            No tasks added yet!
          </p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <h2 className="text-lg font-semibold">{task}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskAdded;
