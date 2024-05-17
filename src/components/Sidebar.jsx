import { Links } from "../dummy";
import { ImCancelCircle } from "react-icons/im";
import { NavLink } from "react-router-dom";

import { UseStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    UseStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-5 pr-10 pt-3 pb-2.5 rounded-lg text-gray-900 text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-5 pr-10 pt-3 pb-2.5 rounded-lg text-md text-text-color hover:text-black hover:bg-button-bg m-2";

  return (
    <div className="min-h-screen  md:hover:overflow-auto pb-1 w-72 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center mt-4 fixed -top-4 px-4 bg-sidebar-bg w-72 h-20">
            <a
              href=""
              onClick={handleCloseSidebar}
              className="items-center gap-3  flex text-xl font-extrabold tracking-tight text-text-color"
            >
              <span>Propertilo</span>
            </a>
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-lg rounded-full p-3 hover:bg-gray-600 text-text-color"
            >
              <ImCancelCircle />
            </button>
          </div>

          <div className="mt-28">
            {Links.map((side) => (
              <div key={side}>
                {side.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;