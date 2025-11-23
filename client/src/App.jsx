import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { RouteIndex } from "./helpers/RouteName";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import { RouteSignIn } from "./helpers/RouteName";
import { RouteSignUp } from "./helpers/RouteName";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path={RouteSignIn} element={<SignIn />} />
        <Route path={ RouteSignUp} element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
