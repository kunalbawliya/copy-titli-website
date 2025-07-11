import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ donatePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Nav */}
      <nav
        className={`
          fixed z-50 px-[64px]
          ${scrolled ? "top-[30px]" : "top-0"}
          flex items-center justify-between shadow-md
          transition-[top,width,height,border-radius,backdrop-filter,background-color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          left-1/2 -translate-x-1/2 border backdrop-blur-md
          ${
            scrolled
              ? "w-[952px] h-[82px] rounded-[100px] bg-[#FDF3F7]/90"
              : "w-screen h-[120px] rounded-none bg-[#FDF3F7]"
          }
        `}
      >
  
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/titli.png"
            alt="Titli Logo"
            className={`${
              scrolled ? "w-[200px] h-[40px]" : "w-[325px] h-[65px]"
            }`}
          />
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={donatePage ? "https://linktr.ee/Titli" : "/donate"}
            target={donatePage ? "_blank" : ""}
            className="text-black font-semibold text-sm lg:text-base hover:text-pink"
          >
            Make a donation
          </a>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noreferrer"
            className="text-black font-semibold text-sm lg:text-base hover:text-pink"
          >
            Join the Team
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {!menuOpen ? (
              <div className="flex flex-col gap-[4px]">
                <span className="w-5 h-[2px] bg-black"></span>
                <span className="w-5 h-[2px] bg-black"></span>
                <span className="w-5 h-[2px] bg-black"></span>
              </div>
            ) : (
              <div className="text-2xl font-bold">×</div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center text-xl font-semibold space-y-6 transition-all duration-300 lg:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img src="/titli.png" className="w-[200px]" />
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
