import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [key, setKey] = useState(0);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("mode", event.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    setKey(key + 1);
    localStorage.setItem("color", color);
  };

  const handleClick = (element) => {
    setIsClicked({
      ...initialState,
      [element]: true,
    });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
        key,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
