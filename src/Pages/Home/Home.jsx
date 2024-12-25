import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home()
{
    return <>
         <div className="pt-[80px] flex min-h-screen">
            {/* part 1 */}
                 <div className="bg-blue flex flex-col justify-between items-center p-[10px]">
                        <div className="flex flex-col gap-[10px] items-center">
                             <div className="bg-pink-400 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                 <span>icon</span>
                             </div>
                             <div className="bg-black rounded-md  w-[40px] h-[40px] flex items-center justify-center">
                                <span className="text-xl text-gray-300">+</span>
                             </div>
                             
                        </div>
                              <div className="w-[40px] flex flex-col gap-[10px]">
                                  <div className=" bg-pink-300 w-[40px] h-[40px] rounded-full flex items-center justify-center p-[10px]">
                                     <span className=" text-xl">?</span>
                                  </div>

                                  <div className="bg-red-300 rounded-full w-[40px] h-[40px] p-[10px] flex items-center justify-center">
                                      <p className="text-[18px] font-semibold">MG</p>
                                  </div>
                                  
                                  
                              </div>
                        
                 </div>
            {/* part 2 */}
                 <div className='w-[320px] border-r-[1px] border-r-gray-300 '>
                       {/* heading with bell icon */}
                      <div className='flex justify-between border-b-[1px] m-[10px] p-[10px] border-b-gray-200'>
                            <div className='flex'>
                                  <p className='text-[18px] font-semibold'>Figure</p>
                                  <ArrowDropDownOutlinedIcon/>
                            </div>
                            <NotificationsIcon/>
                      </div>

                      {/* library part */}
                      <div className='mb-[70px]'>
                           {/* library with dropdown icon */}
                              <div className='flex justify-between m-[10px] p-[10px]'>
                                   <div className='flex gap-[5px]'>
                                        <LibraryBooksOutlinedIcon/>
                                        <p className='text-[16px] font-semibold'>Library</p>
                                   </div>
                                   <ArrowDropDownOutlinedIcon/>
                              </div>

                              {/* library items */}
                              <div className='pl-[50px] flex flex-col gap-[15px]'>
                                {/* favourite items */}
                                   <div className='flex gap-[5px]'>
                                        <StarBorderIcon/>
                                        <p>Favorite Items</p>
                                   </div>

                                   {/* recently added */}
                                   <div className='flex gap-[5px]'>
                                        <ListAltIcon/>
                                        <p>recently added</p>
                                   </div>

                                   {/* recently modified */}
                                   <div className='flex gap-[5px]'>
                                        <PlaylistAddIcon/>
                                        <p>recently modified</p>
                                   </div>

                                    {/* My Uploads*/}
                                    <div className='flex gap-[5px]'>
                                        <CloudUploadIcon className='text-blue'/>
                                        <p>My uploads</p>
                                   </div>

                                   {/* Un used Items*/}
                                   <div className='flex gap-[5px]'>
                                        <NewReleasesIcon className='text-blue'/>
                                        <p>Unused items</p>
                                   </div>

                                   {/* Saved Filters*/}
                                   <div className='flex gap-[5px]'>
                                        <TuneIcon/>
                                        <p>Saved Filters</p>
                                   </div>

                                   {/* Saved Filters*/}
                                   <div className='flex gap-[5px] ml-[20px]'>
                                        <AddIcon/>
                                        <p>Create Saved Filters</p>
                                   </div>
                              </div>

                              {/* setting and memebers */}
                              <div className=' m-[10px] p-[10px]'>
                                   <div className='flex gap-[5px]'>
                                        <SettingsIcon/>
                                        <p className='text-[16px] font-semibold'>Setting and Members</p>
                                   </div>
                                   
                              </div>

                              {/* Boards with + icon */}
                              <div className='flex justify-between m-[10px] p-[10px]'>
                                        <p className='text-[16px] font-semibold'>BOARDS</p>
                                   <AddIcon/>
                              </div>

                              {/* welcome to air */}
                              <div className=' m-[10px] p-[10px] bg-gray-200 rounded-md'>
                                   <div className='flex gap-[5px]'>
                                        <ArrowForwardIcon/>
                                        <p className='text-[16px] font-semibold'>Welcome to Air</p>
                                   </div>
                                   
                              </div>
                      </div>

                      {/* Create New Board */}
                      <div className='flex font-semibold gap-[5px] bg-gray-100 p-[15px] border-t-[1px]'>
                           <AddIcon/>
                           <p>Create New Board</p>
                      </div>
                 </div>
            {/* part 3 */}
                 <div></div>
         </div>
    </>
}


export default Home ;