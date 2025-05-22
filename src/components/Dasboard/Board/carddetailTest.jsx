// import { useState } from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import {
//   Calendar as CalendarIcon,
//   Plus,
//   Trash,
//   Users,
//   Paperclip,
//   Calendar,
//   LogIn,
//   LogOut,
// } from "lucide-react";
// import { SetMealSharp } from "@mui/icons-material";

// const CardDetail = ({ Props.selectedCard, listTitle }) => {
//   const [description, setDescription] = useState(
//     Props.selectedCard?.description || ""
//   );
//   const [tempDescription, setTempDescription] = useState(description);
//   const [isEditing, setIsEditing] = useState(false);
//   const [activity, setActivity] = useState([]);
//   const [comment, setComment] = useState("");
//   const [isJoined, setIsJoined] = useState(false);
//   const [members, setMembers] = useState([]);
//   const [showMemberModal, setShowMemberModal] = useState(false);
//   const [showCalenderModel, setShowCalenderModel] = useState(false);
//   const [startDate, setStartDate] = useState(null);
//   const [dueDate, setDueDate] = useState(null);
//   const [tempStartDate, setTempStartDate] = useState("");
//   const [tempDueDate, setTempDueDate] = useState("");
//   const [attachments, setAttachments] = useState([]);

//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const fileData = files.map((file) => ({
//       name: file.name,
//       url: URL.createObjectURL(file),
//       type: file.type,
//     }));
//     setAttachments([...attachments, ...fileData]);
//   };

//   // Handle file removal
//   const handleRemoveFile = (index) => {
//     setAttachments(attachments.filter((_, i) => i !== index));
//   };
//   // Add comment to activity log
//   const handleAddComment = () => {
//     if (comment.trim() !== "") {
//       setActivity([...activity, comment]);
//       setComment("");
//     }
//   };

//   // Delete a comment
//   const handleDeleteComment = (index) => {
//     setActivity(activity.filter((_, i) => i !== index));
//   };

//   // Save description
//   const handleSaveDescription = () => {
//     setDescription(tempDescription);
//     setIsEditing(false);
//   };

//   // Join/Leave functionality
//   const handleJoin = () => {
//     setIsJoined(!isJoined);
//     setShowMemberModal();
//     if (!isJoined) {
//       setMembers([...members, "You"]);
//     } else {
//       setMembers(members.filter((member) => member !== "You"));
//     }
//   };

//   // Save selected dates
//   const handleSaveDate = () => {
//     setStartDate(tempStartDate);
//     setDueDate(tempDueDate);
//     setShowCalenderModel(false);
//   };

//   return (
//     <div className="px-4 py-2 w-[500px]">
//       <div className="flex justify-between items-center mb-4">
//         {/* <p className="font-bold text-xl text-gray-800">
//           <span className="text-blue-600">{Props.selectedCard.content}</span> in list
//           <span className="text-blue-600"> {listTitle}</span>
//         </p> */}

//         <h1 className="text-3xl font-bold ">Card Detail</h1>
//       </div>

//       {/* Description Section */}
//       <div className="mb-4 bg-gray-100 p-2 rounded">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <CalendarIcon size={18} />
//             <h3 className="font-semibold">Description</h3>
//           </div>
//           {description && (
//             <button
//               className="text-sm text-blue-500"
//               onClick={() => setIsEditing(true)}
//             >
//               Edit
//             </button>
//           )}
//         </div>
//         {isEditing ? (
//           <div>
//             <textarea
//               className="w-full p-2 border rounded mt-2"
//               value={tempDescription}
//               onChange={(e) => setTempDescription(e.target.value)}
//             ></textarea>
//             <div className="flex justify-end gap-2 mt-2">
//               <button
//                 onClick={handleSaveDescription}
//                 className="bg-blueish text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="bg-gray-300 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p
//             className="p-2 bg-gray-100 cursor-pointer"
//             onClick={() => setIsEditing(true)}
//           >
//             {description || "Add a more detailed description..."}
//           </p>
//         )}
//       </div>

//       {/* Activity Section */}
//       <div className="mb-4">
//         <div className="flex items-center gap-2 mb-2">
//           <Users size={18} />
//           <h3 className="font-semibold">Activity</h3>
//         </div>
//         <ul className="border p-2 rounded h-24 overflow-y-auto">
//           {activity.map((item, index) => (
//             <li
//               key={index}
//               className="flex justify-between text-sm border-b py-1"
//             >
//               {item}
//               <button
//                 onClick={() => handleDeleteComment(index)}
//                 className="text-red-500"
//               >
//                 <Trash size={14} />
//               </button>
//             </li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mt-2"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Write a comment..."
//         />
//         <button
//           onClick={handleAddComment}
//           className="mt-2 bg-blueish text-white px-4 py-2 rounded"
//         >
//           Add Comment
//         </button>
//       </div>

//       {/* Members Section */}
//       {isJoined && (
//         <div className="mt-4">
//           <h3 className="font-semibold mb-2">Members</h3>
//           <div className="flex items-center gap-2">
//             {members.map((member, index) => (
//               <span
//                 key={index}
//                 className="bg-red-500 text-white px-3 py-1 rounded-full"
//               >
//                 {member[0]}
//               </span>
//             ))}
//             <button
//               onClick={() => setShowMemberModal(true)}
//               className="bg-gray-200 p-2 rounded-full"
//             >
//               <Plus size={16} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Selected Dates Section */}
//       {startDate && dueDate && (
//         <p className="pt-2">
//           <span className="pe-2">
//             <strong>Start Date:</strong> {startDate}
//           </span>
//           <span>
//             <strong>Due Date:</strong> {dueDate}
//           </span>
//         </p>
//       )}
//       {/* Buttons Section */}
//       <div className="relative  flex gap-2">
//         <div className="relative mt-2 flex gap-2">
//           {/* Join/Leave Button */}
//           <button
//             onClick={handleJoin}
//             className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-300"
//           >
//             {isJoined ? <LogOut size={16} /> : <LogIn size={16} />}
//             {isJoined ? "Leave" : "Join"}
//           </button>

//           {/* Members Button */}
//           <button
//             onClick={() => setShowMemberModal(true)}
//             className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-300"
//           >
//             <Users size={16} />
//             Members
//           </button>

//           {/* Dates Button */}
//           <button
//             onClick={() => setShowCalenderModel((prev) => !prev)}
//             className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-300"
//           >
//             <Calendar size={16} />
//             Dates
//           </button>
//         </div>

//         {/* Member model */}
//         {showMemberModal && (
//           <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded">
//             <h3 className="font-semibold">Add Members</h3>
//             <input
//               type="text"
//               className="w-full p-2 border rounded mt-2"
//               placeholder="Search members"
//             />
//             <ul>
//               {members.map((member, index) => (
//                 <li key={index} className="p-2">
//                   {member === "You" ? "" : member}
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={() => setShowMemberModal(false)}
//               className="mt-2 bg-gray-300 px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         )}

//         {/* Calendar Popup */}
//         {showCalenderModel && (
//           <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg w-72">
//             <h3 className="font-semibold text-lg mb-3">Select Dates</h3>

//             {/* Start Date */}
//             <div className="mb-3">
//               <label className="block text-sm font-medium mb-1">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 className="w-full p-2 border rounded"
//                 value={tempStartDate}
//                 onChange={(e) => setTempStartDate(e.target.value)}
//               />
//             </div>

//             {/* Due Date */}
//             <div className="mb-3">
//               <label className="block text-sm font-medium mb-1">Due Date</label>
//               <input
//                 type="date"
//                 className="w-full p-2 border rounded"
//                 value={tempDueDate}
//                 onChange={(e) => setTempDueDate(e.target.value)}
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={() => setShowCalenderModel(false)}
//                 className="bg-gray-300 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveDate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="py-4 w-[500px]">
//         {/* Attachments Button */}
//         <div className="relative">
//           <button
//             onClick={() => document.getElementById("fileInput").click()}
//             className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-300"
//           >
//             <Paperclip size={16} /> Attachments
//           </button>
//           <input
//             id="fileInput"
//             type="file"
//             className="hidden"
//             multiple
//             onChange={handleFileUpload}
//           />
//         </div>

//         {/* Attachments List */}
//         {attachments.length > 0 && (
//           <div className="mt-4 bg-gray-100 p-3 rounded shadow-sm">
//             <h3 className="font-semibold mb-2">Uploaded Files</h3>
//             <ul className="space-y-2">
//               {attachments.map((file, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between bg-white p-2 rounded shadow-sm"
//                 >
//                   {file.type.startsWith("image/") ? (
//                     <a
//                       href={file.url}
//                       download={file.name}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src={file.url}
//                         alt="Preview"
//                         className="w-12 h-12 rounded"
//                       />
//                     </a>
//                   ) : (
//                     <a
//                       href={file.url}
//                       download={file.name}
//                       className="text-blue-600 hover:underline truncate w-full"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {file.name}
//                     </a>
//                   )}
//                   <button
//                     onClick={() => handleRemoveFile(index)}
//                     className="text-red-500"
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardDetail;