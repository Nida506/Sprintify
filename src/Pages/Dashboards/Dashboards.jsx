import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ShadcnComponents/sidebar";
import { AppSidebar } from "@/components/Dasboard/Sidebar/AppSidebar";
import Board from "@/components/Dasboard/Board/Board";
import { useSelector } from "react-redux";
import axios from "axios";
import { addBoard, fetchAllDashboards } from "@/Redux/BoardsSlice/BoardsSlice";
import { useEffect } from "react";
import { BASE_URL } from "@/utils/constants";
import { useDispatch } from "react-redux";


export default function Dashboards() {
  let dispatch=useDispatch();
  let dashboardData = useSelector((store) => {
    return store.boards
  });

  const fetchBoards = async () => {
      try {
        const res = await axios.get(BASE_URL + "/getallboards", { withCredentials: true });
        dispatch(fetchAllDashboards(res.data.boards));
      } catch (err) {
        console.error(err);
      }
  };
  
  useEffect(() => {
    fetchBoards(); // get boards on mount
  }, []);
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
