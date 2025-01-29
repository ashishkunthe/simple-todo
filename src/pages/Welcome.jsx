import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
        Welcome to Your To-Do App!
      </h1>
      <p className="text-xl text-white mb-8 text-center">
        Manage your tasks effortlessly. Get started by clicking below.
      </p>

      <Link
        to="/task"
        className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 hover:bg-indigo-500 transition-all duration-300 ease-in-out"
      >
        Let's Start 🚀
      </Link>
    </div>
  );
}

export default Welcome;
