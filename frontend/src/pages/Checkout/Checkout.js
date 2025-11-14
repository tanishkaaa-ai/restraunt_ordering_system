export default function Checkout(){
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="bg-white p-6 rounded-xl shadow space-y-4">
          <input placeholder="Full name" className="w-full p-3 border rounded"/>
          <input placeholder="Phone number" className="w-full p-3 border rounded"/>
          <input placeholder="Address" className="w-full p-3 border rounded"/>
          <button className="w-full bg-accent text-white py-3 rounded">Place Order</button>
        </form>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="flex justify-between"><div>Items</div><div>₹548</div></div>
        </div>
      </div>
    </div>
  );
}
