import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { UseStateContext } from "../contexts/ContextProvider";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import { UserButton } from "@clerk/clerk-react";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-gray-300"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    // setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    // TODO: in React, always remove the event listener after use.
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <div
      className={
        activeMenu
          ? `flex p-2 relative w-[calc(100%-18rem)] items-center justify-between`
          : "flex p-2 relative w-full items-center justify-between"
      }
    >
      <div>
        <NavButton
          title="menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      </div>

      <div className="flex items-center ">
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <UserButton /> 
{/* 
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
