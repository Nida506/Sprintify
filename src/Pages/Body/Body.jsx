import MainNavBar from "@/components/MainNavBar/MainNavBar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div>
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default Body;
