import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    // Perform logout actions, such as clearing authentication token or session
    // Redirect the user to the login page using Link
    window.location.href = "/login";
    navigate("login")
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <header className="text-3xl font-bold mb-4">Logout</header>
      <p className="mb-4">Are you sure you want to logout?</p>
      {/* Use Link to navigate to the login page */}
      <Link to="/login">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </Link>

    </div>
  );
};

export default Logout;
