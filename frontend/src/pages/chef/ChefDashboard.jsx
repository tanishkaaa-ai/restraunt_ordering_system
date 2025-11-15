// import { Link } from "react-router-dom";

// export default function ChefDashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 px-8 py-12 text-white">

//       <h1 className="text-5xl font-extrabold text-center mb-10 drop-shadow-lg">
//         👨‍🍳 Chef Dashboard
//       </h1>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* Orders Pending */}
//         <div className="p-10 bg-white/20 rounded-3xl backdrop-blur-xl shadow-xl border border-white/30">
//           <h2 className="text-3xl font-bold mb-4">Pending Orders</h2>
//           <p className="text-lg mb-6">View and manage new customer orders.</p>

//           <Link
//             to="/chef/orders"
//             className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition"
//           >
//             View Orders
//           </Link>
//         </div>

//         {/* Kitchen Status */}
//         <div className="p-10 bg-white/20 rounded-3xl backdrop-blur-xl shadow-xl border border-white/30">
//           <h2 className="text-3xl font-bold mb-4">Kitchen Status</h2>
//           <p className="text-lg mb-6">
//             Monitor orders currently being prepared.
//           </p>

//           <Link
//             to="/chef/orders"
//             className="px-6 py-3 bg-white text-gray-800 rounded-xl font-bold text-lg hover:scale-105 transition"
//           >
//             Go to Orders
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

import React from "react";

const ChefDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-green-100 to-green-300">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Chef Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-xl">
        <p>Orders to prepare will be shown here.</p>
      </div>
    </div>
  );
};

export default ChefDashboard;
