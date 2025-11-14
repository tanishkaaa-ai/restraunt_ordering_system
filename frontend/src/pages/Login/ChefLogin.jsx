import { useNavigate } from "react-router-dom";

export default function ChefLogin() {
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    nav("/chef");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-red-700 to-orange-600">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-2xl w-96 shadow-2xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Chef Login 👨‍🍳
        </h2>

        <input
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
        />

        <button className="w-full py-3 rounded-lg text-white font-bold 
          bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition">
          Login
        </button>
      </form>
    </div>
  );
}
