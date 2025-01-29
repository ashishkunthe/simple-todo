import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-gray-300 ">Welcome!</h1>
      <p className="text-lg mb-4">Get started by clicking the button below.</p>

      <Link
        to="/task"
        className="px-6 py-3 bg-blue-950 text-gray-200 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-all"
      >
        Let's Start 🚀
      </Link>
    </div>
  );
}

export default Welcome;
