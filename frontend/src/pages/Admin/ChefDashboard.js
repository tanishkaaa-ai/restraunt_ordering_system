export default function ChefDashboard(){
  const orders = [{id:1,item:"Pizza"},{id:2,item:"Biryani"}];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Chef Panel</h2>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {orders.map(o=>(
          <div key={o.id} className="flex justify-between">
            <div>{o.item}</div>
            <div><button className="bg-accent text-white px-3 py-1 rounded">Mark Ready</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
