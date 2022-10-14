import React from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Protected = ({ children, ...rest }) => {
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
            children
          ) : isAuthenticated && !activated ? (
            <Navigate to="/profile" />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default Protected;
