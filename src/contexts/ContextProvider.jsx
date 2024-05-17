import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  ContextProvider.propTypes = {
    children: PropTypes.node,
  };

  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#57be79");

  const [currentMode, setCurrentMode] = useState("Dark");

  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false)
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        handleClick,
        initialState,
        themeSettings,
        setThemeSettings,
        activeMenu,
        setActiveMenu,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);