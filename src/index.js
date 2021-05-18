import React from "react";
import reactdom from "react-dom"
import App from "./App.js"
import "./styles.css"

reactdom.render(
   <React.StrictMode>
      <div>
         <App />
      </div>
   </React.StrictMode>,
   document.getElementById("root")
)