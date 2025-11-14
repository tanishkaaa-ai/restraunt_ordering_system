export default function MenuCard({ item, onAdd }){
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={item.img} alt={item.name} className="w-full h-44 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-muted mt-1">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">₹{item.price}</div>
          <button onClick={()=> onAdd?.(item)} className="bg-accent text-white px-3 py-1 rounded-md text-sm">Add</button>
        </div>
      </div>
    </div>
  );
}
