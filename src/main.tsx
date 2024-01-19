import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
/*--------------------Store--------------------*/
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const store = setupStore();
/*--------------------Store--------------------*/
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
