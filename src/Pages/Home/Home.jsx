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
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageIcon from '@mui/icons-material/Message';
import DownloadIcon from '@mui/icons-material/Download';

import { Link } from 'react-router-dom';

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
                                        <StarBorderIcon className='text-purple'/>
                                        <p>Favorite Items</p>
                                   </div>

                                   {/* recently added */}
                                   <div className='flex gap-[5px]'>
                                        <ListAltIcon className='text-purple'/>
                                        <p>recently added</p>
                                   </div>

                                   {/* recently modified */}
                                   <div className='flex gap-[5px]'>
                                        <PlaylistAddIcon className='text-purple'/>
                                        <p>recently modified</p>
                                   </div>

                                    {/* My Uploads*/}
                                    <div className='flex gap-[5px]'>
                                        <CloudUploadIcon className='text-purple'/>
                                        <p>My uploads</p>
                                   </div>

                                   {/* Un used Items*/}
                                   <div className='flex gap-[5px]'>
                                        <NewReleasesIcon className='text-purple'/>
                                        <p>Unused items</p>
                                   </div>

                                   {/* Saved Filters*/}
                                   <div className='flex gap-[5px]'>
                                        <TuneIcon className='text-purple'/>
                                        <p>Saved Filters</p>
                                   </div>

                                   {/* Saved Filters*/}
                                   <div className='flex gap-[5px] ml-[20px]'>
                                        <AddIcon className='text-purple'/>
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
                 <div className='p-[20px] w-full'>
                    {/* searchbar with buttons */}
                    <div className='flex gap-[20px] justify-between'>
                         {/* searchbar */}
                           <div className='flex items-center gap-[20px]'>
                              <div className='border-[1px] flex  w-full min-w-[500px] rounded-md text-black text-[18px] border-gray-300 p-[10px]'>
                                   <SearchIcon className='text-xl mr-2'/>
                                   <div className='flex-1'><input type="text" placeholder='Search Board' /></div>
                                   
                              </div>

                              <TuneIcon/>
                           </div>
                           {/* buttons */}
                           <div className='flex gap-[10px] items-center'>
                              <p className='font-semibold mr-[30px]'>Follow</p>
                              <button data-aos="zoom-in" className='bg-gray-200 px-[20px] py-[10px] rounded-md font-semibold'>Share</button>
                              <button data-aos="zoom-in" className='bg-blue px-[20px] py-[10px] rounded-md text-white font-semibold'>+ Add</button>
                           </div>
                    </div>
                    {/* heading with icons */}
                    <div data-aos="fade-down" className='flex gap-[10px] mt-[30px]'>
                           <h1 className='text-3xl font-Roboto font-semibold'>Welcome to Air</h1>
                           <div className='flex gap-[15px] items-center mt-[30px]'>
                                 <StarBorderIcon/>
                                 <ListAltIcon/>
                                 < MoreHorizIcon />
                           </div>
                    </div>

                    {/* paragraph */}
                    <div data-aos="zoom-in" className='max-w-[650px] leading-[25px] mt-[30px]'>
                           <p className='text-[16px]'>🙂😇 Wodering What your team can do with Air? We put together a welcome board that has everything you need t start organizing,collaborating and more!</p>
                    </div>
                    {/* hepl conter visit */}
                    <div data-aos="zoom-in" className='mt-[30px] max-w-[650px]'>
                           <p><MessageIcon/>  For more questions or support, visit our help center <Link to='#' className='text-blue'>https://help.air.inc/</Link>or email us at <span className='text-blue'>hello@gmail.com</span></p>
                    </div>

                    {/* Boards */}
                    <div className='mt-[70px]'>
                          <h1 className='text-xl font-semibold'>Boards (4)</h1>
                          <div className='flex gap-[10px] mt-[20px]'>
                              {/* board 1 */}
                              <div style={{ backgroundImage: 'url(/images/card1.avif)'}} data-aos="zoom-out" className='text-white w-[240px] h-[220px] rounded-sm flex flex-col justify-end'>
                                  <div className='flex justify-between items-end p-[10px] bg-black bg-opacity-10'>
                                      <p className='text-[18px] font-semibold'>1. Getting Started</p>
                                      <ArrowForwardIcon />
                                   </div>
                              </div>

                              {/* board 2 */}
                              <div style={{ backgroundImage: 'url(/images/card5.avif)'}} data-aos="zoom-in" className='text-white w-[240px] h-[220px] rounded-sm flex flex-col justify-end'>
                                  <div className='flex justify-between items-end p-[10px] bg-black bg-opacity-10'>
                                      <p className='text-[18px] font-semibold'>2. Organize</p>
                                      <ArrowForwardIcon />
                                   </div>
                              </div>

                              {/* board 3 */}
                              <div style={{ backgroundImage: 'url(/images/card3.avif)'}} data-aos="zoom-out" className='text-white w-[240px] h-[220px] rounded-sm flex flex-col justify-end'>
                                  <div className='flex justify-between items-end p-[10px] bg-black bg-opacity-10'>
                                      <p className='text-[18px] font-semibold'>3. Collaborate</p>
                                      <ArrowForwardIcon />
                                   </div>
                              </div>

                              {/* board 4 */}
                              <div style={{ backgroundImage: 'url(/images/card4.avif)'}} data-aos="zoom-in" className='text-white w-[240px] h-[220px] rounded-sm flex flex-col justify-end'>
                                  <div className='flex justify-between items-end p-[10px] bg-black bg-opacity-10'>
                                      <p className='text-[18px] font-semibold'>4. Share</p>
                                      <ArrowForwardIcon />
                                   </div>
                              </div>

                          </div>
                    </div>

                    {/* sub board with icons */}
                    <div className='flex justify-between items-center mt-[20px]'>
                           <div>
                                <p>4 sub-boards . 144MB</p>
                           </div>
                           <div className='flex p-[10px] items-center'>
                                <div className='flex gap-[4px] border-r-[1px] font-semibold border-r-gray-400 pr-[10px]'>
                                     <PlaylistAddIcon/>
                                     <p>Expand nested items</p>
                                </div>
                                <div className='p-[10px]'>
                                     <DownloadIcon/>
                                </div>
                           </div>
                    </div>
                 </div>
         </div>
    </>
}


export default Home ;