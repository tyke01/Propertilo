import { GiFamilyHouse, GiDirectionSign } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import {AiOutlineCalendar} from "react-icons/ai"
import {HiMailOpen} from "react-icons/hi"


const GridComponent = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid lg:grid-cols-4 gap-3">
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-1 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <GiFamilyHouse />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Properties</span>
            <span className="font-bold">5</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <FaDoorOpen />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Units</span>
            <span className="font-bold">6</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <MdGroupAdd />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Tenants</span>
            <span className="font-bold">6</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <BsFillPersonCheckFill />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">agents</span>
            <span className="font-bold">0</span>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <LiaMoneyBillWaveSolid />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Collected rent</span>
            <span className="font-bold">40,000.00</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <AiOutlineCalendar />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Rent dues</span>
            <span className="font-bold">88,000.00</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <HiMailOpen />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Sms balance</span>
            <span className="font-bold">0</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-md p-1 flex gap-5 items-center border-[1px] border-gray-200 pr-12 w-40 md:w-52">
          <div className="text-4xl bg-button-bg text-white p-2 rounded-md">
            <GiDirectionSign />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-gray-400 text-sm">Listed properties</span>
            <span className="font-bold">5</span>
          </div>
        </div>
        {/*  */}

      </div>
  )
}

export default GridComponent