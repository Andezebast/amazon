import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./services/route";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              Component={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
