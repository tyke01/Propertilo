

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-20 bg-main-bg w-full h-screen">

      <div className="bg-white py-5 px-16 rounded-xl flex flex-col gap-3 items-center shadow-md">
        <p className="text-2xl font-bold text-link-text">Propertilo</p>
        <p className="font-medium text-link-text text-sm">Login</p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-4 border-b border-green-400 outline-0"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="p-4 border-b border-green-400 outline-0"
          />

          <button className="bg-button-bg text-white p-3 font-bold hover:opacity-90">
            Sign in
          </button>
          {/* {error && <span>Something went wrong when signing in</span>} */}
        </form>

        <p className="text-link-text text-xs mt-3 cursor-pointer">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      
    </div>
  );
};

export default Login;
