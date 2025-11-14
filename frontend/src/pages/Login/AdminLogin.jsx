import { useNavigate } from "react-router-dom";
export default function AdminLogin(){
  const nav = useNavigate();
  const submit=(e)=>{ e.preventDefault(); /* auth */ nav("/admin"); };
  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <input placeholder="Email" className="w-full border p-3 rounded" />
        <input placeholder="Password" type="password" className="w-full border p-3 rounded" />
        <button className="w-full bg-accent text-white py-3 rounded">Login</button>
      </form>
    </div>
  );
}
