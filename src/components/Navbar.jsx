export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-12 md:px-24 py-8 md:py-12 text-white">
      <nav className="flex items-center justify-between">
        <div>Nfinite</div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-30">
          <div className="hidden md:flex items-center gap-11 text-[13px] font-normal tracking-wide">
            <a href="#specifications" className="relative pb-1 group">
              Specifications
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#technology" className="relative pb-1 group">
              Technology
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#impact" className="relative pb-1 group">
              Impact
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#news" className="relative pb-1 group">
              News
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#about" className="relative pb-1 group">
              About
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </div>

          {/* Contact Button */}
          <button className="h-11 px-6 text-[13px] bg-[#c7e6f5] text-black hover:bg-black hover:text-white transition-all duration-300 rounded">
            Contact us
          </button>
        </div>
      </nav>
    </header>
  );
}
