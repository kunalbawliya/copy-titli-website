import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ donatePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
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

  const noTapHighlight = { WebkitTapHighlightColor: 'transparent' };

  return (
    <>
      <nav
        className={`
          fixed z-40 top-0 left-1/2 -translate-x-1/2
          flex items-center justify-between
          w-screen h-[90px] bg-[#FFE8F1] shadow-md
          lg:bg-transparent lg:shadow-none
          px-4 md:px-8 lg:px-[64px]
          transition-[top,width,height,border-radius,backdrop-filter,background-color]
          duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled ? `
            lg:w-[952px] lg:h-[82px] lg:rounded-[100px] lg:top-[30px] lg:bg-white/90 backdrop-blur-md shadow-2xl
          ` : `
            lg:w-screen lg:h-[120px] lg:rounded-none
          `}
        `}
      >
        <Link href="/" className="hidden md:flex items-center gap-3 focus:outline-none" style={noTapHighlight}>
          <img
            src="/titli.png"
            alt="Titli Logo"
            className={`transition-all duration-300 md:w-[200px] ${ scrolled ? "lg:w-[200px]" : "lg:w-[292.5px]" }`}
          />
        </Link>
        
        <Link href="/" className="flex md:hidden items-center focus:outline-none" style={noTapHighlight}>
            <img src="/titli.png" alt="Titli Logo" className="w-[215px]" />
        </Link>

        {/* Desktop/Tablet Hamburger & Dropdown */}
        <div className="hidden md:relative md:flex items-center lg:ml-6" style={noTapHighlight}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle Menu"
            style={noTapHighlight}
          >
            {dropdownVisible && (
              <div
                className={`
                  absolute inset-0 p-4 bg-pink rounded-t-[10px] rounded-b-none z-[-1]
                  transition-opacity duration-300 md:block hidden
                  ${fadeIn ? "opacity-100" : "opacity-0"}
                `}
              />
            )}
              <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "md:rotate-45 md:top-1/2 md:bg-white" : "top-4"}`} style={{ transformOrigin: "center" }}></span>
              <span className={`absolute block h-[3px] w-4 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "md:opacity-0" : "top-[24px]"}`}></span>
              <span className={`absolute block h-[3px] w-6 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen && dropdownVisible ? "md:-rotate-45 md:top-1/2 md:bg-white" : "bottom-3"}`} style={{ transformOrigin: "center" }}></span>
          </button>

          {dropdownVisible && (
            <div
              className={`
                absolute top-full right-0 w-[170px] bg-pink text-white shadow-lg py-6 px-4
                rounded-tl-[20px] rounded-b-[20px] z-40
                transition-opacity duration-300 ease-in-out
                ${fadeIn ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <div className="flex flex-col items-center space-y-4">
                <Link href="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-black focus:outline-none" style={noTapHighlight}>About Us</Link>
                <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-black focus:outline-none" style={noTapHighlight}>Careers</Link>
                <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-black focus:outline-none" style={noTapHighlight}>Gallery</Link>
                <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-black focus:outline-none" style={noTapHighlight}>Blogs</Link>
                <Link href="/donate" onClick={() => setMenuOpen(false)} className="hover:text-black focus:outline-none" style={noTapHighlight}>Donate</Link>
              </div>
            </div>
          )}
        </div>
        
        {/* The mobile hamburger button was previously here. It has been moved out. */}
      </nav>

      {/* --- MOBILE HAMBURGER BUTTON (MOVED OUTSIDE NAV) --- */}
      {/* CHANGE: This button is now outside the <nav> to control its layering properly. */}
      <div className="fixed top-0 right-0 h-[90px] flex items-center pr-4 z-[60] md:hidden" style={noTapHighlight}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-12 h-12 flex items-center justify-center focus:outline-none"
          aria-label="Toggle Menu"
          style={noTapHighlight}
        >
          <span className={`absolute block h-[3px] w-6 rounded-[50px] transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 top-1/2 bg-white" : "top-4 bg-black"}`} style={{ transformOrigin: "center" }}></span>
          <span className={`absolute block h-[3px] w-4 rounded-[50px] bg-black transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "top-[24px]"}`}></span>
          <span className={`absolute block h-[3px] w-6 rounded-[50px] transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-1/2 bg-white" : "bottom-3 bg-black"}`} style={{ transformOrigin: "center" }}></span>
        </button>
      </div>

      {/* --- MOBILE SLIDE-IN MENU --- */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-[308px] 
          z-50 bg-pink text-white
          flex flex-col items-center justify-center text-3xl font-semibold space-y-10
          transition-transform duration-300 ease-in-out md:hidden
          rounded-l-[16px] shadow-xl
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <Link href="/aboutus" onClick={() => setMenuOpen(false)} className="focus:outline-none" style={noTapHighlight}>About Us</Link>
        <Link href="/careers" onClick={() => setMenuOpen(false)} className="focus:outline-none" style={noTapHighlight}>Careers</Link>
        <Link href="/gallery" onClick={() => setMenuOpen(false)} className="focus:outline-none" style={noTapHighlight}>Gallery</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)} className="focus:outline-none" style={noTapHighlight}>Blogs</Link>
        <Link href="/donate" onClick={() => setMenuOpen(false)} className="focus:outline-none" style={noTapHighlight}>Donate</Link>
      </div>
    </>
  );
}