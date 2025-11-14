import MenuCard from "../../components/MenuCard";
import { useState } from "react";

const sample = [
  {id:1,name:"Margherita Pizza",desc:"Classic cheese pizza",price:299,img:"https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&w=800&q=60"},
  {id:2,name:"Veg Biryani",desc:"Fragrant basmati rice",price:249,img:"https://images.unsplash.com/photo-1604908177522-9f1d3b3f6c2f?auto=format&w=800&q=60"},
  {id:3,name:"Pasta Alfredo",desc:"Creamy garlic pasta",price:320,img:"https://images.unsplash.com/photo-1521389508051-d7ffb5dc8e5d?auto=format&w=800&q=60"},
];

export default function Menu(){
  const [cart,setCart]=useState([]);
  const add=(item)=> setCart(prev=>[...prev,item]);
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sample.map(it=> <MenuCard key={it.id} item={it} onAdd={add} />)}
      </div>

      {/* small cart preview */}
      <div className="fixed right-6 bottom-6">
        <a href="/cart" className="bg-accent text-white px-5 py-3 rounded-lg shadow">View Cart ({cart.length})</a>
      </div>
    </div>
  );
}
