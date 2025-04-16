import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Order } from "./pages/Order";
import { Confirmation } from "./pages/Confirmation";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  );
}
