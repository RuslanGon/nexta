"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// "use client";
// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Состояние для хранения текущей темы
//   const [mode, setMode] = useState("dark");

//   // Загружаем сохранённую тему из localStorage при монтировании
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setMode(savedTheme);
//     }
//   }, []);

//   // Функция переключения темы
//   const toggle = () => {
//     setMode((prevMode) => {
//       const newMode = prevMode === "dark" ? "light" : "dark";
//       localStorage.setItem("theme", newMode); // Сохраняем тему в localStorage
//       return newMode;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ toggle, mode }}>
//       <div className={`theme ${mode}`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
