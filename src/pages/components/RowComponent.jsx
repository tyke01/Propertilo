import { GiFamilyHouse } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidCube, BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { HiMailOpen } from "react-icons/hi";

const RowComponent = () => {
  return (
    <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:flex-wrap border-[1.5px] border-link-text bg-white pt-3 pb-5 px-5 rounded-md gap-5">
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28 hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-link-text text-3xl">
          <GiFamilyHouse />
        </div>
        <p className="font-semibold text-sm">New property</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28  hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-sec-link-text text-3xl">
          <IoIosAddCircle />
        </div>
        <p className="font-semibold text-sm">New Unit</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28  hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-link-text text-3xl">
          <BsPersonFillAdd />
        </div>
        <p className="font-semibold text-sm">New Tenant</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28 hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-sec-link-text text-3xl">
          <BiSolidCube />
        </div>
        <p className="font-semibold text-sm">New Allocation</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28 hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-link-text text-3xl">
          <LiaMoneyBillWaveSolid />
        </div>
        <p className="font-semibold text-sm">Rent payments</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28 hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-link-text text-3xl">
          <HiMailOpen />
        </div>
        <p className="font-semibold text-sm">Sms Notifiation</p>
      </div>
      {/*  */}
      <div className="border border-gray-300 rounded-md bg-main-bg p-2 flex flex-col items-center w-28 hover:bg-gray-200 cursor-pointer text-center">
        <div className="text-link-text text-3xl">
          <BiSolidBriefcaseAlt2 />
        </div>
        <p className="font-semibold text-sm">landlords</p>
      </div>
      {/*  */}
    </div>
  );
};

export default RowComponent;
