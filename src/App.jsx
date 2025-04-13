import {
  BrowserRouter,
  Routes,
  Route,
  useRouteLoaderData,
} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import React, { useEffect, useState } from "react";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";
import CountryList from "./components/CountryList";
import { CitiesProvider, useCities } from "./contexts/CitiesContext";
export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />}></Route>
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form></Form>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
