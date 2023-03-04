import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RouteSwitch from "./route";
import { persistor, store } from "./redux/store";
import NavigationBar from "./components/NavigationBar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import CartModal from "./components/CartModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CartModal />
        <NavigationBar />
        <RouteSwitch />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
