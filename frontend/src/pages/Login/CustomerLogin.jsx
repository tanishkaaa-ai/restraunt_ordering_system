import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CustomerLogin(){
  const [email,setEmail]=useState(""); const [pass,setPass]=useState("");
  const navigate = useNavigate();
  const submit = (e)=>{ e.preventDefault(); /* TODO: call API */ navigate("/menu"); };
  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Login</h2>
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-3 rounded" />
        <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" className="w-full border p-3 rounded" />
        <button className="w-full bg-accent text-white py-3 rounded">Login</button>
      </form>
    </div>
  );
}
