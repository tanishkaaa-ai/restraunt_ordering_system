export default function TrackOrder(){
  const steps = ["Order placed","Confirmed","Preparing","Out for delivery","Delivered"];
  const current = 2; // preparing
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Track Order</h2>
      <div className="bg-white p-6 rounded-xl shadow">
        {steps.map((s,i)=>(
          <div key={s} className="flex items-center gap-4 py-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i<=current ? 'bg-accent text-white':'bg-gray-200 text-gray-500'}`}>{i+1}</div>
            <div>{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
