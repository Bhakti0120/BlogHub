import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { RouteIndex } from "./helpers/RouteName";


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
