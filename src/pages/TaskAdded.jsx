import { useDispatch, useSelector } from "react-redux";
import { getTask, removeTask, addTask } from "../slice/taskSlice"; // Assuming addTask is available in the slice
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TaskAdded() {
  const tasks = useSelector(getTask);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // States for handling completion and editing
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track which task is being edited
  const [editValue, setEditValue] = useState("");

  function handler() {
    navigate(-1); // Go back to the previous page
  }

  function handleDelete(task) {
    dispatch(removeTask(task)); // Pass the task to be deleted
  }

  const handleCheckboxChange = (task) => {
    setCompletedTasks((prev) =>
      prev.includes(task)
        ? prev.filter((item) => item !== task)
        : [...prev, task]
    );
  };

  const handleEditClick = (task) => {
    setIsEditing(task); // Set the task to be edited
    setEditValue(task); // Set the value to the current task
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value); // Update the edit value
  };

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      dispatch(removeTask(isEditing)); // Remove the old task
      dispatch(addTask(editValue)); // Add the updated task
      setIsEditing(null); // Reset editing state
      setEditValue(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 p-4">
      {/* Styled Back Button */}
      <div
        onClick={handler}
        className="px-6 py-2 bg-gray-500 text-white rounded-lg cursor-pointer mb-6 hover:bg-gray-600 transition-all"
      >
        &#8592; Back
      </div>

      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        Your Added Tasks
      </h1>
      <div className="space-y-4 w-full max-w-lg">
        {tasks.length === 0 ? (
          <p className="text-xl text-gray-400 text-center">
            No tasks added yet!
          </p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {/* Custom Styled Task Completion Checkbox */}
              <label className="relative inline-block">
                <input
                  type="checkbox"
                  checked={completedTasks.includes(task)} // Check if the task is completed
                  onChange={() => handleCheckboxChange(task)} // Toggle completion status
                  className="opacity-0 absolute inset-0 cursor-pointer"
                />
                <span
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center 
                    ${
                      completedTasks.includes(task)
                        ? "bg-green-500 border-green-500"
                        : "bg-gray-700 border-gray-500"
                    } 
                    transition-all duration-300 hover:scale-105`}
                >
                  {completedTasks.includes(task) && (
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
              </label>

              {/* Task Text or Edit Form */}
              {isEditing === task ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  className="px-4 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white"
                />
              ) : (
                <h2
                  className={`text-xl font-semibold px-4 py-2 ${
                    completedTasks.includes(task)
                      ? "line-through text-gray-500"
                      : "text-white"
                  }`}
                >
                  {task}
                </h2>
              )}

              {/* Action Buttons */}
              <div className="flex items-center">
                {/* Edit Button */}
                {isEditing === task ? (
                  <button
                    onClick={handleSaveEdit}
                    className="ml-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-all"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(task)} // Trigger editing mode
                    className="ml-4 bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(task)} // Pass the task to be deleted
                  className="ml-4 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-all"
                  disabled={completedTasks.includes(task)} // Disable delete for completed tasks
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskAdded;
