export default function DeliveryDashboard(){
  const del = [{id:1,name:"Tanisha",status:"Out for Delivery"}];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Delivery Panel</h2>
      <div className="bg-white p-6 rounded-xl shadow">
        {del.map(d=>(
          <div key={d.id} className="flex justify-between">
            <div>{d.name}</div>
            <div>{d.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
