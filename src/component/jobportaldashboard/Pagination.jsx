// "use client";
// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Pagination = ({ 
//   currentPage = 1, 
//   totalPages = 8, 
//   onPageChange = (page) => console.log(`Page ${page} selected`) 
// }) => {
//   const getPageNumbers = () => {
//     return Array.from({ length: totalPages }, (_, i) => i + 1);
//   };

//   return (
//     <div className="flex items-center justify-around px-72 ">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-8 py-4 mr-2 rounded-full text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//       >
//         <ChevronLeft className="w-4 h-4 mr-1" />
//         Previous
//       </button>

//       <div className="flex justify-around w-1/2">
//         {getPageNumbers().map((pageNum) => (
//           <button
//             key={pageNum}
//             onClick={() => onPageChange(pageNum)}
//             className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
//               ${pageNum === currentPage 
//                 ? 'bg-black text-white' 
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//           >
//             {pageNum}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-8 py-4 ml-2 rounded-full text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//       >
//         Next
//         <ChevronRight className="w-4 h-4 ml-1" />
//       </button>
//     </div>
//   );
// };

// export default Pagination;