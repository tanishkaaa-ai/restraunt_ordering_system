// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Cart 🛒</h1>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-xl">

//           {cart.map((item, index) => (
//             <div key={index} className="flex justify-between mb-4">
//               <span className="font-medium text-gray-800">{item.name}</span>
//               <span className="text-gray-600">₹{item.price}</span>
//             </div>
//           ))}

//           <hr className="my-4" />

//           <p className="text-xl font-bold text-gray-800">
//             Total: ₹{total}
//           </p>

//           <button
//             onClick={handleCheckout}
//             className="w-full bg-green-500 text-white py-3 rounded-lg mt-5"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-yellow-100 to-orange-200">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Your Cart</h1>

      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold">Your selected items will appear here.</h2>
      </div>
    </div>
  );
};

export default Cart;
