import { Header } from "Header/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
