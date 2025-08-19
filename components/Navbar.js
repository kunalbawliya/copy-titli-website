import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ donatePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // This effect now only matters for screens > 1024px, but the listener is harmless
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout;
    if (menuOpen) {
      setDropdownVisible(true);
      setTimeout(() => setFadeIn(true), 30);
    } else {
      setFadeIn(false);
      timeout = setTimeout(() => setDropdownVisible(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`
          fixed z-50 top-0 left-1/2 -translate-x-1/2
          flex items-center justify-between
          
          // --- BASE STYLES (Mobile & Tablet) ---
          w-screen h-[90px] bg-[#FFE8F1] shadow-md // Changed: Reduced height to (80px)
          lg:bg-transparent lg:shadow-none // Reset for desktop initial state
          
          // --- RESPONSIVE PADDING ---
          px-4 md:px-8 lg:px-[64px]

          // --- TRANSITIONS (Mainly for Desktop) ---
          transition-[top,width,height,border-radius,backdrop-filter,background-color]
          duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]

          ${scrolled ? `
            // --- SCROLLED STATE (Applied on Desktop LG+ ONLY) ---
            lg:w-[952px] lg:h-[82px] lg:rounded-[100px] lg:top-[30px] lg:bg-white/90 lg:shadow-2xl backdrop-blur-md
          ` : `
            // --- UNSCROLLED STATE (Applied on Desktop LG+ ONLY) ---
            lg:w-screen lg:h-[120px] lg:rounded-none
          `}
        `}
      >
        {/* Desktop/Tablet Logo */}
        <Link href="/" className="hidden md:flex items-center gap-3">
          <img
            src="/titli.png"
            alt="Titli Logo"
            className={`transition-all duration-300 
              md:w-[200px] // Static width for tablet
              ${ scrolled ? "lg:w-[200px]" : "lg:w-[325px]" } // Animate only on desktop
            `}
          />
        </Link>
        
        {/* Mobile-only Logo */}
        <Link href="/" className="flex md:hidden items-center">
            <img src="/titli.png" alt="Titli Logo" className="w-[215px]" />
        </Link>

        {/* Desktop/Tablet Hamburger & Dropdown */}
        <div className="hidden md:relative md:flex items-center lg:ml-6 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {dropdownVisible && (
              <div
                className={`
                  absolute inset-0 p-4 bg-pink rounded-t-[20px] rounded-b-none z-[-1]
                  transition-opacity duration-300 lg:block hidden // Only show tab on desktop
                  ${fadeIn ? "opacity-100" : "opacity-0"}
                `}
              />
            )}
             <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "lg:rotate-45 lg:top-1/2 lg:bg-white" : "top-4"}`} style={{ transformOrigin: "center" }}></span>
             <span className={`absolute block h-[3px] w-4 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "lg:opacity-0" : "top-[24px]"}`}></span>
             <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "lg:-rotate-45 lg:top-1/2 lg:bg-white" : "bottom-3"}`} style={{ transformOrigin: "center" }}></span>
          </button>

          {dropdownVisible && (
            <div
              className={`
                absolute top-full right-0 w-[170px] bg-pink text-white shadow-lg py-6 px-4
                rounded-tl-[20px] rounded-b-[20px]
                transition-opacity duration-300 ease-in-out
                ${fadeIn ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <div className="flex flex-col items-center space-y-4">
                <Link href="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-black">About Us</Link>
                <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-black">Careers</Link>
                <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-black">Gallery</Link>
                <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-black">Blogs</Link>
                <Link href="/donate" onClick={() => setMenuOpen(false)} className="hover:text-black">Donate</Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {/* Unified Hamburger/Close Icon for Mobile */}
            <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 top-1/2" : "top-4"}`} style={{ transformOrigin: "center" }}></span>
            <span className={`absolute block h-[3px] w-4 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "top-[24px]"}`}></span>
            <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-1/2" : "bottom-3"}`} style={{ transformOrigin: "center" }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center text-xl font-semibold space-y-6 transition-all duration-300 md:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)} className="absolute top-5 left-4">
              <img src="/titli.png" className="w-[120px]" />
            </Link>
            <Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <a href="https://tr.ee/vx87XEdgfh" target="_blank" rel="noreferrer" className="text-pink" onClick={() => setMenuOpen(false)}>Join our team</a>
            <a href={donatePage ? "https://linktr.ee/Titli" : "/donate"} target={donatePage ? "_blank" : ""} className="bg-pink hover:bg-dark-pink text-white py-3 px-6 rounded-md" onClick={() => setMenuOpen(false)}>Make a donation</a>
        </div>
      )}
    </>
  );
}