import { SignOutButton } from "@clerk/clerk-react";

const Logout = () => {

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <header className="text-3xl font-bold mb-4">Logout</header>
      <p className="mb-4">Are you sure you want to logout?</p>
      {/* Use Link to navigate to the login page */}
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          <SignOutButton />
        </button>
    </div>
  );
};

export default Logout;
