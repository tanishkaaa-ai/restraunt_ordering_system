import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CustomerRegister(){
  const [form,setForm]=useState({name:"",email:"",password:""});
  const nav = useNavigate();
  const submit=(e)=>{ e.preventDefault(); /* TODO: API register */ nav("/menu"); };
  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Create account</h2>
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="w-full border p-3 rounded" />
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full border p-3 rounded" />
        <input value={form.password} onChange={e=>setForm({...form,password:e.target.value})} type="password" placeholder="Password" className="w-full border p-3 rounded" />
        <button className="w-full bg-accent text-white py-3 rounded">Register</button>
      </form>
    </div>
  );
}
