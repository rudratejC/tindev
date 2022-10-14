import React from "react";
import { useMoralis } from "react-moralis";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SemiProtected = ({ children, ...rest }) => {
  const { isAuthenticated } = useMoralis();
  // const { Moralis } = useMoralis();
  // const user = Moralis.User.current();
  // const activated = user.attributes.activated;
  const activated = true;

  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated && activated ? (
            <Navigate to="/home" />
          ) : isAuthenticated && !activated ? (
            children
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default SemiProtected;
