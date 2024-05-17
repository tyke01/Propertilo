import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-main-bg min-h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-16 rounded-xl flex flex-col gap-3 items-center">
        <p className="text-2xl font-bold text-link-text">Propertillo</p>
        <p className="font-medium text-link-text text-sm">Register</p>

        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter name"
            className="p-4 border-b border-green-500 outline-0"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-4 border-b border-green-500 outline-0"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="p-4 border-b border-green-500 outline-0"
          />

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            className="p-4 border-b border-green-500"
          />
          <label
            htmlFor="file"
            className="flex items-center gap-5 text-link-text text-sm cursor-pointer"
          >
            <img className="w-8" src="add.png" alt="" />
            <p>Add an avatar</p>
          </label>

          <button className=" bg-[#580966] text-white p-3 font-bold hover:opacity-90 rounded-full">
            Sign up
          </button>
        </form>

        <p className="text-[#580966] text-xs mt-3">
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
