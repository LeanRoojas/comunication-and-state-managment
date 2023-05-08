import { createContext, useContext, useState } from "react";

export const GentlemanContext = createContext();

export const GentlemanProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState("");
  return <GentlemanContext.Provider value={{ contextValue, setContextValue }}>{children}</GentlemanContext.Provider>;
};

export const useGentlemanContext = () => {
  const context = useContext(GentlemanContext);

  if (context === undefined) {
    throw new Error("GentlemanContex must be used within a GentlemanProvider");
  }

  return context;
};
