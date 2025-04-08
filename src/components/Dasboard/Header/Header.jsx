import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    SidebarTrigger,
  } from "@/components/ShadcnComponents/sidebar";
import ChatPage from '@/Pages/ChatPage/ChatPage';

function Header({activeDashboard}) {
  return (
    <div className="flex justify-between items-center overflow-hidden  bg-black bg-opacity-30 w-full px-9  h-[55px] shadow-2xl">
      <div className="left">
        <h1 className="font-semibold text-xl text-white ms-4">{activeDashboard?.name}</h1>
      </div>
      <div className="right flex justify-around items-center gap-4 border-l px-4 ">
        <div className="avatar cursor-pointer">
          <div className="w-[40px] h-[40px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        
        <button className="bg-white flex text-black px-2 py-1 rounded-lg gap-1">
          
          <ChatPage/>
          </button>
        <button className="bg-white flex text-black px-2 py-1 rounded-lg gap-1">
                  <PersonAddAltIcon className="text-[35px] mb-1 " />
                  <h1>
                  Share
                  </h1>
         
        </button>

        <MoreVertIcon className="cursor-pointer" />
        
      </div>
    </div>
  );
}

export default Header;
