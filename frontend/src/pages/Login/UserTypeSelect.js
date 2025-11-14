import { Link } from "react-router-dom";
export default function UserTypeSelect(){
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Who are you?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link to="/register/customer" className="p-8 bg-white rounded-xl shadow text-center hover:scale-[1.02]">
          <div className="text-3xl mb-2">👤 Customer</div>
          <div className="text-sm text-muted">Order food and track delivery</div>
        </Link>
        <Link to="/staff" className="p-8 bg-white rounded-xl shadow text-center hover:scale-[1.02]">
          <div className="text-3xl mb-2">👨‍🍳 Staff</div>
          <div className="text-sm text-muted">Admin / Chef / Delivery</div>
        </Link>
      </div>
    </div>
  );
}    
