import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { StoreProvider } from "./StoreProvider";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

StoreProvider.initStore(configureStore);
const store = StoreProvider.getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
