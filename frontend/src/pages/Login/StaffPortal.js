import { Link } from "react-router-dom";
export default function StaffPortal(){
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Staff Roles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link to="/admin/login" className="p-6 bg-white rounded-xl text-center shadow">Admin</Link>
        <Link to="/chef/login" className="p-6 bg-white rounded-xl text-center shadow">Chef</Link>
        <Link to="/delivery/login" className="p-6 bg-white rounded-xl text-center shadow">Delivery</Link>
      </div>
    </div>
  );
}
