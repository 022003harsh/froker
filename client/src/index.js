import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// const store = configureStore({
//   reducer: rootReducer,
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);