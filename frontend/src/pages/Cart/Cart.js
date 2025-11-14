export default function Cart(){
  const items = [
    {id:1,name:"Margherita Pizza",price:299},
    {id:2,name:"Veg Biryani",price:249}
  ];
  const total = items.reduce((s,i)=>s+i.price,0);
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {items.map(it=>(
          <div key={it.id} className="flex justify-between">
            <div>{it.name}</div>
            <div>₹{it.price}</div>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-4"> <div>Total</div><div>₹{total}</div></div>
        <a href="/checkout" className="block mt-4 bg-accent text-white py-3 rounded text-center">Checkout</a>
      </div>
    </div>
  );
}
