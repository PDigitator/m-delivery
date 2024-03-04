import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import PageLayout from "./components/PageLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ShopCartPage = lazy(() => import("./pages/ShopCartPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="catalog" element={<ShopPage />} />
        <Route path="favorites" element={<FavoritesPage />} /> */}

        <Route path="shop" element={<PageLayout />}>
          <Route index element={<ShopPage />} />
        </Route>
        <Route path="shop-cart" element={<PageLayout />}>
          <Route index element={<ShopCartPage />} />
        </Route>
        <Route path="history" element={<PageLayout />}>
          <Route index element={<HistoryPage />} />
        </Route>
        <Route path="favorites" element={<PageLayout />}>
          <Route index element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
