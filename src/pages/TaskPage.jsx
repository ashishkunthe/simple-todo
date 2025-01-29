import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slice/taskSlice";
import { Link } from "react-router-dom";

function TaskPage() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  function taskSubmitHandler(e) {
    e.preventDefault();

    // Only dispatch if there's a valid task
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue(""); // Clear the input field after submission
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-200">
        Task Manager
      </h1>
      <p className="text-lg mb-8 text-center text-gray-400">
        Manage your tasks with ease!
      </p>

      <form
        className="flex flex-col sm:flex-row sm:space-x-4 w-full max-w-xl"
        onSubmit={taskSubmitHandler}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 w-full sm:w-80 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-6 py-2 mt-4 sm:mt-0 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all w-full sm:w-auto"
        >
          Add Task
        </button>
      </form>

      {/* Styled Button for Navigation */}
      <Link to="/added-tasks" className="mt-6">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all w-full sm:w-auto">
          View Added Tasks
        </button>
      </Link>
    </div>
  );
}

export default TaskPage;
