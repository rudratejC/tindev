import React from "react";
import { useMoralis } from "react-moralis";
import { Navigate, Route, Routes } from "react-router-dom";

const Public = ({ children, ...rest }) => {
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
            <Navigate to="/profile" />
          ) : (
            children
          )
        }
      />
    </Routes>
  );
};

export default Public;
