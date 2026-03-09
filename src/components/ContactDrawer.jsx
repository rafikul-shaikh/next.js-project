// "use client";
// import { useState } from "react";

// export default function ContactDrawer() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       {/* Contact Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="bg-black text-white px-6 py-2 rounded"
//       >
//         Contact Us
//       </button>

//       {/* Background Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       {/* Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[420px] bg-[#c6dde1] z-50 transform transition-transform duration-500
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-6">
//           <h2 className="text-3xl font-semibold">Get in contact</h2>
//           <button onClick={() => setOpen(false)}>✕</button>
//         </div>

//         {/* Form */}
//         <form className="px-6 space-y-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             type="text"
//             placeholder="Last Name"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-3 rounded"
//           />

//           <textarea
//             placeholder="Message"
//             className="w-full border p-3 rounded h-32"
//           ></textarea>

//           <button className="bg-black text-white px-6 py-3 rounded w-full">
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
