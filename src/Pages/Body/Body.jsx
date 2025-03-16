import MainNavBar from "@/components/MainNavBar/MainNavBar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="overflow-x-hidden">
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default Body;
