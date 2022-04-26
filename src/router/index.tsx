import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Country from "../views/Country";
import Home from "../views/Home";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<Country />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
