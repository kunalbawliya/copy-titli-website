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

  return (
    <>
      {/* Main Nav */}
      <nav
        className={`
          fixed z-50 px-[64px]
          top-0
          flex items-center justify-between
          transition-[top,width,height,border-radius,backdrop-filter,background-color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          left-1/2 -translate-x-1/2 backdrop-blur-md
          ${
            scrolled
              ? "lg:w-[952px] lg:h-[82px] lg:rounded-[100px] lg:top-[30px] lg:bg-white/90 w-screen h-[120px] rounded-none bg-[#ffffff] shadow-lg"
              : "w-screen h-[120px] rounded-none" //debug- bg-[#FFFBF7]
          }
        `}
      >
        {/* Desktop Logo + Title */}
        <Link href="/" className="hidden lg:flex items-center gap-3">
          <img
            src="/titli.png"
            alt="Titli Logo"
            className={`$${
              scrolled ? "w-[200px] h-[40px]" : "w-[325px] h-[65px]"
            }`}
          />
        </Link>

        {/* Desktop Buttons
        <div className="hidden lg:flex items-center gap-x-8 ml-auto mr-6">
          <Link
            href="/donate"
            className="text-black font-semibold text-[20px] hover:text-pink"
          >
            Make a donation
          </Link>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noreferrer"
            className="text-black font-semibold text-[20px] hover:text-pink"
          >
            Join the Team
          </a>
        </div> */}

        {/* Desktop Hamburger & Dropdown */}
        <div className="hidden lg:relative lg:flex items-center ml-6 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {dropdownVisible && (
              <div
                className={`
                  absolute inset-0 p-4 bg-pink rounded-t-[10px] rounded-b-none z-[-1]
                  transition-opacity duration-300
                  ${fadeIn ? "opacity-100" : "opacity-0"}
                `}
              />
            )}
            <span
              className={`absolute block h-[3px] w-6 rounded-[30px] transition-all duration-300 ease-in-out
                ${menuOpen ? "rotate-45 top-1/2 bg-white" : "top-4 bg-black"}
              `}
              style={{ transformOrigin: "center" }}
            ></span>
            <span
              className={`absolute block h-[3px] w-4 items-end rounded-[30px] transition-all duration-300 ease-in-out
                ${menuOpen ? "opacity-0" : "top-[24px] bg-black"}
              `}
            ></span>
            <span
              className={`absolute block h-[3px] w-6 rounded-[30px] transition-all duration-300 ease-in-out
                ${menuOpen ? "-rotate-45 top-1/2 bg-white" : "bottom-3 bg-black"}
              `}
              style={{ transformOrigin: "center" }}
            ></span>
          </button>

          {dropdownVisible && (
            <div
              className={`
                absolute top-full right-0 w-[170px] bg-pink text-white shadow-lg py-6 px-4
                rounded-tl-[15px] rounded-br-[15px] rounded-bl-[15px]
                transition-opacity duration-300 ease-in-out
                ${fadeIn ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <div className="flex flex-col items-center space-y-4">
                <Link href="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-black">
                  About Us
                </Link>
                <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-black">
                  Careers
                </Link>
                <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-black">
                  Gallery
                </Link>
                <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-black">
                  Blogs
                </Link>
                <Link href="/donate" onClick={() => setMenuOpen(false)} className="hover:text-black">
                  Donate
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center justify-between w-full ">
          <Link href="/" className="flex items-center gap-2">
            <img src="/titli.png" alt="Titli Logo" className="w-[150px] h-auto " />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {dropdownVisible && (
              <div
                className={`absolute inset-0 p-4 bg-[#FFD3E5]/90 rounded-t-[10px] rounded-b-none z-[-1] transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
              />
            )}
            <span
              className={`absolute block h-[3px] w-6 rounded-full transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 top-1/2 bg-white" : "top-4 bg-black"}`}
              style={{ transformOrigin: "center" }}
            />
            <span
              className={`absolute block h-[3px] w-4 items-end rounded-full transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "top-[24px] bg-black"}`}
            />
            <span
              className={`absolute block h-[3px] w-6 rounded-full transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-1/2 bg-white" : "bottom-3 bg-black"}`}
              style={{ transformOrigin: "center" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center text-xl font-semibold space-y-6 transition-all duration-300 lg:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img src="/titli.png" className="w-[150px] pt-9" />
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noreferrer"
            className="text-pink"
            onClick={() => setMenuOpen(false)}
          >
            Join our team
          </a>
          <a
            href={donatePage ? "https://linktr.ee/Titli" : "/donate"}
            target={donatePage ? "_blank" : ""}
            className="bg-pink hover:bg-dark-pink text-white py-3 px-6 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Make a donation
          </a>
        </div>
      )}
    </>
  );
}
