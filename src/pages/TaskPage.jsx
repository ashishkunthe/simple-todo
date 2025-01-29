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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Task Page</h1>
      <p className="text-lg mb-4 text-center">Manage your tasks efficiently!</p>

      <form
        className="flex flex-col sm:flex-row sm:space-x-3 w-full max-w-lg"
        onSubmit={taskSubmitHandler}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <button
          type="submit"
          className="px-6 py-2 mt-3 sm:mt-0 bg-gray-500 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all w-full sm:w-auto"
        >
          Submit
        </button>
      </form>

      {/* Styled Button (similar to the Submit button) */}
      <Link to="/added-tasks">
        <button className="px-6 py-2 mt-4 bg-gray-500 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all w-full sm:w-auto">
          Go to Added Tasks
        </button>
      </Link>
    </div>
  );
}

export default TaskPage;
