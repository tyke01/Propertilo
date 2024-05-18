import { useClerk } from "@clerk/clerk-react";
import GridComponent from "./components/GridComponent";
import LatestPayments from "./components/LatestPayments";
import RowComponent from "./components/RowComponent";
import SubscriptionDetails from "./components/SubscriptionDetails";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {user} = useClerk()
  return (
    <main className="flex flex-col items-start justify-center lg:mx-10 my-20 p-5 gap-5 ">
      <div className="p-5 rounded-lg flex flex-col relative justify-center bg-white overflow-hidden">
        <span className="bg-button-bg w-2 h-full absolute top-0 left-0"></span>
        <p className="text-2xl font-semibold">Good Afternoon {user.firstName} </p>
        <p className="text-lg">
          Welcome to the Property Management dashboard. Easily manage your
          property, Tenants, Units, and automate rent collection. Click{" "}
          <Link to="/tutorial" className="text-link-text underline" href="">
            here
          </Link>{" "}
          to explore the tutorial
        </p>
      </div>
      {/*  */}
      <div className="w-full">
        <GridComponent />
      </div>
      {/*  */}
      <div className="w-full">
        <RowComponent />
      </div>
      <div className="md:flex gap-3 w-full">
        <div className="bg-white  rounded-md mb-6 w-full">
          <SubscriptionDetails />
        </div>
        <div className="bg-white rounded-md">
          <LatestPayments />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
