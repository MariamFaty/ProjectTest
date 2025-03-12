import React, { createContext, useState } from "react";
export let authContext = createContext();
export default function AuthContextProvider({ children }) {
  const [accessToken, setaccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setrefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  return (
    <authContext.Provider
      value={(accessToken, setaccessToken, refreshToken, setrefreshToken)}
    >
      {/* app */}
      {children}
    </authContext.Provider>
  );
}
