import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCheck, BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
// import { UseStateContext } from "../../contexts/ContextProvider";

const SubscriptionDetails = () => {
  // const { handleClick, isClicked } = UseStateContext();
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    }

  return (
    <div className="flex flex-col border border-gray-300 w-full">
      <div className="flex justify-between items-center w-full md:w-[300px] lg:w-full border border-gray-400 p-3 rounded">
        <p>subscription details</p>
        <div className="flex gap-3">
          <AiOutlineMinus />
          <AiOutlinePlus />
        </div>
      </div>
      {/*  */}
      <div className="py-2 flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm bg-main-bg p-3 w-full">
          <p>package name</p>
          <p className=" bg-button-bg rounded-md px-1 py-1 text-white">
            starter package
          </p>
        </div>
        <div className="text-sm bg-main-bg p-3 w-full flex items-center justify-between">
          <p>Package status</p>
          <p className=" bg-button-bg rounded-md px-1 py-1 text-white flex gap-2 items-center">
            Active{" "}
            <span className="text-xl">
              <BsCheck />
            </span>
          </p>
        </div>
        {/*  */}
        <div className="text-sm bg-main-bg p-3 w-full flex flex-col items-center justify-between">
          <p>Upgrade package</p>
          <div className="flex justify-between items-center w-full mt-5">
            <div className="cursor-pointer flex flex-col">
              <div
                className="flex items-center"
                onClick={handleClick}
              >
                <span>starter pack </span>
                <span className="text-xl">
                  <BsArrowRightShort />
                </span>
              </div>
              <p className={isClicked ? "flex flex-col gap-2" : "hidden"}>
                <span className="text-gray-500">features:</span>
                  <span>- upto 10 tenants</span>
                  <span>- upto 5 properties</span>
                  <span>- enabled report dowload</span>
                  <span>- 100 bulk sms&apos;s</span>
              </p>
            </div>
            <div className="bg-button-bg px-4 py-1 text-white rounded-md cursor-pointer hover:opacity-90">
              <p>Get</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SubscriptionDetails;
