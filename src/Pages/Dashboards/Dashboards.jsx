import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ShadcnComponents/sidebar";
import { AppSidebar } from "@/components/Dasboard/Sidebar/AppSidebar";
import Board from "@/components/Dasboard/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addBoard, fetchAllDashboards } from "@/Redux/BoardsSlice/BoardsSlice";
import { useEffect } from "react";
import { BASE_URL } from "@/utils/constants";

export default function Dashboards() {
  const dispatch = useDispatch();
  const dashboardData = useSelector((store) => store.boards);

  const fetchBoards = async () => {
    try {
      const res = await axios.get(BASE_URL + "/getallboards", {
        withCredentials: true,
      });

      // ✅ Sort lists (and cards optionally) in each board
      const sortedBoards = res.data.boards.map((board) => {
        const sortedLists = (board.lists || []).sort(
          (a, b) => a.position - b.position
        );
        const listsWithSortedCards = sortedLists.map((list) => ({
          ...list,
          cards: (list.cards || []).sort((a, b) => a.position - b.position),
        }));

        return {
          ...board,
          lists: listsWithSortedCards,
        };
      });

      dispatch(fetchAllDashboards(sortedBoards));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!dashboardData.length) fetchBoards();
  }, []);

  return (
    <SidebarProvider className="overflow-hidden">
      <AppSidebar dashboardData={dashboardData} />
      <main className="w-full overflow-hidden">
        <SidebarTrigger className="bg-white absolute z-[5000] ms-3 mt-4" />
        <Board dashboardData={dashboardData} />
      </main>
    </SidebarProvider>
  );
}
