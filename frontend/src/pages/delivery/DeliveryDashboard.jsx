// import { Link } from "react-router-dom";

// export default function DeliveryDashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 px-8 py-12 text-white">

//       <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
//         🚚 Delivery Dashboard
//       </h1>

//       <div className="max-w-4xl mx-auto bg-white/20 p-10 rounded-3xl shadow-xl backdrop-blur-xl border border-white/30">

//         <h2 className="text-3xl font-bold mb-6">
//           Manage Your Deliveries
//         </h2>

//         <p className="text-lg mb-8 text-white/90">
//           View orders assigned to you and update their delivery status in real time.
//         </p>

//         <Link
//           to="/delivery/orders"
//           className="px-10 py-3 bg-yellow-300 text-gray-900 font-bold text-xl rounded-xl shadow-lg hover:scale-105 transition"
//         >
//           View Delivery Orders
//         </Link>
//       </div>

//     </div>
//   );
// }
import React from "react";

const DeliveryDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-blue-100 to-cyan-200">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Delivery Agent Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-xl">
        <p>Delivery orders will be displayed here.</p>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
