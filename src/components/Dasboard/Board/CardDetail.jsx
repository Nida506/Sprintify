// import { useState } from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { BASE_URL } from "@/utils/constants";
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

// const CardDetail = (Props) => {
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

//   const handleFileUpload = async (event) => {
//     const formData = new FormData();
//     const files = Array.from(event.target.files);
  
//     files.forEach(file => {
//       formData.append('files', file);
//     });
//     formData.append('cardId', Props.selectedCard._id);
  
//     const response = await fetch(`http://localhost:8214/api/upload-attachments`, {
//       method: 'POST',
//       body: formData,
//     });
  
//     const uploaded = await response.json();
//     setAttachments(prev => [...prev, ...uploaded]);
//   };
  

//   // Handle file removal
//   const handleRemoveFile = (index) => {
//     setAttachments(attachments.filter((_, i) => i !== index));
//   };
//   // Add comment to activity log
//   const handleAddComment = async () => {
//     if (comment.trim() !== "") {
//       const updatedActivity = [...activity, comment];
//       setActivity(updatedActivity);
//       setComment("");
  
//       await fetch(`http://localhost:8214/api/add-comment`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           cardId: Props.selectedCard._id,
//           comment,
//         }),
//       });
//     }
//   };
  

//   // Delete a comment
//   const handleDeleteComment = (index) => {
//     setActivity(activity.filter((_, i) => i !== index));
//   };

//   // Save description
//   const handleSaveDescription = async () => {
//     setDescription(tempDescription);
//     setIsEditing(false);
  
//     await fetch(`http://localhost:8214/api/update-description`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         cardId: Props.selectedCard._id,
//         description: tempDescription,
//       }),
//     });
//   };
  
//   // Join/Leave functionality
//   const handleJoin = async () => {
//     const updated = !isJoined;
//     setIsJoined(updated);
//     setShowMemberModal(false);
  
//     const updatedMembers = updated
//       ? [...members, "You"]
//       : members.filter((m) => m !== "You");
  
//     setMembers(updatedMembers);
  
//     await fetch(`http://localhost:8214/api/update-members`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         cardId: Props.selectedCard._id,
//         members: updatedMembers,
//       }),
//     });
//   };
  
//   // Save selected dates
//   const handleSaveDate = async () => {
//     setStartDate(tempStartDate);
//     setDueDate(tempDueDate);
//     setShowCalenderModel(false);
  
//     await fetch(`http://localhost:8214/api/update-dates`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         cardId: Props.selectedCard._id,
//         startDate: tempStartDate,
//         dueDate: tempDueDate,
//       }),
//     });
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




// ----------------------------------------------------------------------



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

// const CardDetail = (Props) => {
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


import { useState, useEffect } from "react";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BASE_URL } from "@/utils/constants";
import {
  Calendar as CalendarIcon,
  Plus,
  Trash,
  Users,
  Paperclip,
  Calendar,
  LogIn,
  LogOut,
} from "lucide-react";

const CardDetail = (Props) => {
  const cardId = Props.selectedCard?._id; // Assuming each card has an id

  const [description, setDescription] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [activity, setActivity] = useState([]);
  const [comment, setComment] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [members, setMembers] = useState([]);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showCalenderModel, setShowCalenderModel] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [tempStartDate, setTempStartDate] = useState("");
  const [tempDueDate, setTempDueDate] = useState("");
  const [attachments, setAttachments] = useState([]);

  // Fetch card data on mount or when cardId changes
  useEffect(() => {
    if (!cardId) return;

    axios
      .get(`http://localhost:8214/api/cards/${cardId}`)
      .then((res) => {
        const data = res.data;
        setDescription(data.description || "");
        setTempDescription(data.description || "");
        setActivity(data.activity || []);
        setIsJoined(data.isJoined || false);
        setMembers(data.members || []);
        setStartDate(data.startDate || null);
        setDueDate(data.dueDate || null);
        setTempStartDate(data.startDate || "");
        setTempDueDate(data.dueDate || "");
        setAttachments(data.attachments || []);
      })
      .catch((err) => {
        console.error("Failed to fetch card data", err);
      });
  }, [cardId]);

  // Save updated description to API
  const handleSaveDescription = () => {
    setDescription(tempDescription);
    setIsEditing(false);
  
    axios
      .put(`http://localhost:8214/api/cards/${cardId}/update-description`, { description: tempDescription })
      .then(() => {
        console.log("Description updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update description", err);
      });
  };
  

  // Add comment and save activity to API
const handleAddComment = () => {
  if (comment.trim() === "") return;

  const newComment = comment.trim();
  setComment("");

  axios
    .put(`http://localhost:8214/api/cards/${cardId}/comments`, { comment: newComment })
    .then((res) => {
      console.log("Activity updated successfully!");
      setActivity((prev) => [...prev, res.data.newComment]); // Add the new comment object
    })
    .catch((err) => {
      console.error("Failed to update activity", err);
    });
};



  // Delete comment and update activity on API
const handleDeleteComment = (index) => {
  const commentId = activity[index]._id; // use comments not activity

  const updatedComments = activity.filter((_, i) => i !== index);
  setActivity(updatedComments); // setComments, not setActivity

  axios
    .delete(`http://localhost:8214/api/cards/${cardId}/comments/${commentId}`)
    .then(() => {
      console.log("Comment deleted successfully!");
    })
    .catch((err) => {
      console.error("Failed to delete comment", err);
    });
};

  
  

  // Join or leave and update members on API
  const handleJoin = () => {
    let updatedMembers;
    if (!isJoined) {
      updatedMembers = [...members, "You"];
    } else {
      updatedMembers = members.filter((member) => member !== "You");
    }
  
    setIsJoined(!isJoined);
    setMembers(updatedMembers);
    setShowMemberModal(false);
  
    axios
      .put(`http://localhost:8214/api/cards/${cardId}/update-members`, { members: updatedMembers })
      .then(() => {
        console.log("Members updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update members", err);
      });
  };
  

  // Save dates to API
  const handleSaveDate = () => {
    setStartDate(tempStartDate);
    setDueDate(tempDueDate);
    setShowCalenderModel(false);
  
    axios
      .put(`http://localhost:8214/api/cards/${cardId}/update-dates`, { startDate: tempStartDate, dueDate: tempDueDate })
      .then(() => {
        console.log("Dates updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update dates", err);
      });
  };
  

  // Handle file upload (simulate saving attachments)
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileData = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
  
    const updatedAttachments = [...attachments, ...fileData];
    setAttachments(updatedAttachments);
  
    // For real backend, you would upload files here.
    axios
      .put(`http://localhost:8214/api/cards/${cardId}/attachments`, { attachments: updatedAttachments })
      .then(() => {
        console.log("Attachments updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update attachments", err);
      });
  };
  

  // Remove file and update API
  const handleRemoveFile = (index) => {
    const attachmentId = attachments[index].id; // Get the ID of the attachment to remove
  
    const updatedAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(updatedAttachments);
  
    axios
      .put(`http://localhost:8214/api/cards/${cardId}/attachments/${attachmentId}`, {
        attachments: updatedAttachments,
      })
      .then(() => {
        console.log("Attachment removed and updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update attachments", err);
      });
  };
  
  

  return (
    <div className="px-4 py-2 w-[500px]">
      {/* Your existing JSX code unchanged */}
      {/* ... */}
      {/* Description Section */}
      <div className="mb-4 bg-gray-100 p-2 rounded">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} />
            <h3 className="font-semibold">Description</h3>
          </div>
          {description && (
            <button
              className="text-sm text-blue-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
        {isEditing ? (
          <div>
            <textarea
              className="w-full p-2 border rounded mt-2"
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={handleSaveDescription}
                className="bg-blueish text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p
            className="p-2 bg-gray-100 cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {description || "Add a more detailed description..."}
          </p>
        )}
      </div>

      {/* Activity Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Users size={18} />
          <h3 className="font-semibold">Activity</h3>
        </div>
      <ul className="border p-2 rounded h-24 overflow-y-auto">
  {activity.map((item, index) => (
    <li
      key={index}
      className="flex justify-between items-center text-sm border-b py-1"
    >
      <span>{item.comment}</span>
      <button
        onClick={() => handleDeleteComment(index)}
        className="text-red-500"
      >
        <Trash size={14} />
      </button>
    </li>
  ))}
</ul>

        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blueish text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>

      {/* Members Section */}
      {isJoined && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Members</h3>
          <div className="flex items-center gap-2">
            {members.map((member, index) => (
              <span
                key={index}
                className="bg-red-500 text-white px-3 py-1 rounded-full"
              >
                {member[0]}
              </span>
            ))}
            <button
              onClick={() => setShowMemberModal(true)}
              className="bg-gray-200 p-2 rounded-full"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Selected Dates Section */}
      {startDate && dueDate && (
        <p className="pt-2">
          <span className="pe-2">
            <strong>Start Date:</strong> {startDate}
          </span>
          <span>
            <strong>Due Date:</strong> {dueDate}
          </span>
        </p>
      )}

      {/* Buttons Section */}
      <div className="relative  flex gap-2">
        <div className="relative mt-2 flex gap-2">
          {/* Join/Leave Button */}
          <button
            onClick={handleJoin}
            className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2"
          >
            {isJoined ? <LogOut size={18} /> : <LogIn size={18} />}
            {isJoined ? "Leave" : "Join"}
          </button>

          {/* Members Modal */}
          {showMemberModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded shadow-lg w-[400px]">
                <h3 className="font-semibold mb-4">Members</h3>
                <ul>
                  {members.map((member, index) => (
                    <li key={index} className="mb-1">{member}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowMemberModal(false)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Calendar Button */}
          <button
            onClick={() => setShowCalenderModel(true)}
            className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2"
          >
            <Calendar size={18} />
            Dates
          </button>

          {/* Calendar Modal */}
          {showCalenderModel && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded shadow-lg w-[400px]">
                <h3 className="font-semibold mb-4">Select Dates</h3>
                <div className="flex gap-2 mb-4">
                  <input
                    type="date"
                    value={tempStartDate}
                    onChange={(e) => setTempStartDate(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Start Date"
                  />
                  <input
                    type="date"
                    value={tempDueDate}
                    onChange={(e) => setTempDueDate(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Due Date"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleSaveDate}
                    className="bg-blueish text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setShowCalenderModel(false)}
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Attachment Button */}
          <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer flex items-center gap-2">
            <Paperclip size={18} />
            Attach
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Attachment Display */}
      <div className="mt-4 flex flex-wrap gap-2">
        {attachments.map((file, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 p-2 rounded"
          >
            {file.type.startsWith("image/") ? (
              <img
                src={file.url}
                alt={file.name}
                className="w-16 h-16 object-cover rounded"
              />
            ) : (
              <Paperclip size={18} />
            )}
            <span>{file.name}</span>
            <button
              onClick={() => handleRemoveFile(index)}
              className="text-red-500"
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetail;
