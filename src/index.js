import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="0d92wvajPOZQPTtCqYCW29aIZcrfBZ4BbT0OrcpW"
      serverUrl="https://7ic1t1e5wwak.grandmoralis.com:2053/server"
    >
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
