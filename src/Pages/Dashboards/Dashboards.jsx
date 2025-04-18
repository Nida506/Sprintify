import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ShadcnComponents/sidebar";
import { AppSidebar } from "@/components/Dasboard/Sidebar/AppSidebar";
import Board from "@/components/Dasboard/Board/Board";
import { useSelector } from "react-redux";

export default function Dashboards() {
  let dashboardData = useSelector((store) => store.boards);

  return (
    <SidebarProvider className="overflow-hidden">
      
      <AppSidebar dashboardData={dashboardData} />
      <main className="w-full overflow-hidden ">
        <SidebarTrigger className="bg-white absolute z-[5000] ms-3 mt-4" >
        </SidebarTrigger>
        <Board dashboardData={dashboardData} />
      
       
      </main>
      
    </SidebarProvider>
  );
}
