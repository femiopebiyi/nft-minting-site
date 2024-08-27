import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import { ThirdwebProvider as Provider } from "@thirdweb-dev/react";
import "./index.css";
import {PolygonAmoyTestnet} from "@thirdweb-dev/chains"
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider clientId= {import.meta.env.VITE_TEMPLATE_CLIENT_ID} activeChain={PolygonAmoyTestnet}>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);
