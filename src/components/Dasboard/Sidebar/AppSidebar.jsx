import {
  Calendar,
  Home,
  Inbox,
  PlusIcon,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ShadcnComponents/sidebar";

import { Square } from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//INTERNAL IMPORTS
import { activeBoard } from "@/Redux/BoardsSlice/BoardsSlice";

// Menu items.

export function AppSidebar({ dashboardData }) {
  const user = useSelector((store) => store.user);
  let dispatch = useDispatch();
  let setActiveBoard = (id) => {
    dispatch(activeBoard(id));
  };
  return (
    <Sidebar className="pt-[85px]" side="left">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm h-auto text-black border-b py-2 gap-2 rounded-none border-b-slate-[#9fadbc29]">
            <div>
              <div>
                <img src={user?.photoUrl} className=" w-[37px] h-[37px]" />
              </div>
            </div>{" "}
            <h1 className="text-[16px]">
              <span className="font-semibold">
                {`${user?.firstName?.charAt(0).toUpperCase()}${user?.firstName
                  ?.slice(1)
                  .toLowerCase()}'s Workplace`}
              </span>
            </h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="text-black px-2 py-3">
                <div className="flex justify-between">
                  <h2 className="font-bold text-[18px]">Your boards</h2>
                  <button>
                    <PlusIcon size={16} />
                  </button>
                </div>
                <ul className="gap-3 mt-2">
                  {dashboardData?.boards?.map((board) => (
                    <li
                      className="boardsList py-2 px-1 hover:bg-gray-300 flex cursor-pointer items-center"
                      onClick={() => setActiveBoard(board._id)}
                    >
                      <Square sx={{ color: board?.bgColor }} />
                      <h1>{board?.name}</h1>
                    </li>
                  ))}
                </ul>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
