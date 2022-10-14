import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/SideBar/Sidebar.jsx";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Authenticate from "./pages/Register/Authenticate";
import "./App.css";
import Public from "./Routes/Public";
import Welcome from "./pages/Welcome/Welcome";
import SemiProtected from "./Routes/SemiProtected";
import Feeds from "./Components/Feeds/Feeds";
import Rightbar from "./Components/RightBar/RightBar.jsx";
import AddPost from "./Components/AddPost/AddPost";
import Protected from "./Routes/Protected";
import { useMoralis } from "react-moralis";

const App = () => {
  const { isAuthenticated, Moralis } = useMoralis();
  return (
    // <>
    //   <Navigation />
    //   <Public path="/" exact>
    //     <Authenticate />
    //   </Public>
    //   <SemiProtected path="/profile">
    //     <Profile />
    //   </SemiProtected>
    //   <Protected path="/home">
    //     <div className="page">
    //       <Sidebar />
    //       <Feeds />
    //       <Rightbar />
    //     </div>
    //   </Protected>
    //   <AddPost />
    // </>
    <>
      <Navigation />
      {isAuthenticated ? (
        <div className="page">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Feeds />} />
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>

          <Rightbar />
        </div>
      ) : (
        <Authenticate />
      )}
    </>
  );
};

export default App;
