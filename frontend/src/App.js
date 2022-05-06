import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateCuatomerProfile from "./pages/CreateCustomerProfile";
import CreateTraderProfile from "./pages/CreateTraderProfile";
import Products from "./pages/Products";
import ItemsAdd from "./pages/ItemsAdd";
import ItemsView from "./pages/ItemsView";
import ViewCustomers from "./pages/ViewCustomers";
import ItemsEdit from "./pages/ItemsEdit";
import TraderPage from "./pages/TraderPage";
import CustomerItemView from "./pages/CustomerItemView";
import AddPromotions from "./pages/AddPromotions";
import ViewPromotions from "./pages/ViewPromotions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CreateCuatomerProfile"
            element={<CreateCuatomerProfile />}
          />
          <Route
            path="/CreateTraderProfile"
            element={<CreateTraderProfile />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/ItemsAdd" element={<ItemsAdd />} />
          <Route path="/ItemsView" element={<ItemsView />} />
          <Route path="/ViewCustomers" element={<ViewCustomers />} />
          <Route path="/ItemsEdit" element={<ItemsEdit />} />
          <Route path="/TraderPage" element={<TraderPage />} />
          <Route path="/CustomerItemView" element={<CustomerItemView />} />
          <Route path="/AddPromotions" element={<AddPromotions />} />
          <Route path="/ViewPromotions" element={<ViewPromotions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
