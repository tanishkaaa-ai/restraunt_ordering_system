import { Link } from "react-router-dom";
export default function Landing(){
  return (
    <section className="relative">
      <div className="h-[70vh] bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&w=1600&q=80')"}}>
        <div className="bg-black/40 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Delicious meals delivered fast</h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl">Order from your favorite restaurants, track in real time, and enjoy.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/menu" className="bg-accent px-6 py-3 rounded-md text-white font-semibold">View Menu</Link>
              <Link to="/select" className="border border-white/30 px-6 py-3 rounded-md text-white">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
