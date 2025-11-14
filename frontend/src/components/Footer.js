export default function Footer(){
  return (
    <footer className="bg-white/95 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-700">
        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} DeliciousBites</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
