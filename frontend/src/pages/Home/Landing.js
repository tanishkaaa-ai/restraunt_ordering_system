import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="relative">
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,100,0,0.7), rgba(255,40,0,0.6)), url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&w=1600&q=80')",
        }}
      >
        <div className="h-full flex items-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight">
              Eat Fresh, Hot & Fast
            </h1>

            <p className="mt-4 text-lg text-orange-200">
              Order food from top restaurants delivered to your doorstep.
            </p>

            <div className="mt-8">
              <Link
                to="/select"
                className="bg-white text-orange-600 px-10 py-3 text-lg rounded-xl font-bold shadow-lg hover:scale-105 transition"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
