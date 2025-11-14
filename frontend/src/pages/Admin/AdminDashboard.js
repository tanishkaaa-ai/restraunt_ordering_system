export default function AdminDashboard(){
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">Orders <div className="text-2xl font-bold mt-4">120</div></div>
        <div className="bg-white p-6 rounded-xl shadow">Revenue <div className="text-2xl font-bold mt-4">₹52,400</div></div>
        <div className="bg-white p-6 rounded-xl shadow">Active Users <div className="text-2xl font-bold mt-4">345</div></div>
      </div>
    </div>
  );
}
