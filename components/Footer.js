import { useState, useRef, useEffect } from "react";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [showMap]);

  return (
    <footer className="w-full bg-pink text-white font-inter text-[13px] overflow-hidden">
      <div
        ref={footerRef}
        className="relative w-full max-w-[1440px] mx-auto px-6 md:px-[6vw] py-[60px]"
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-[50px]">
          {/* Left: Logo + © */}
          <div className="flex flex-col justify-between">
            <img
              src="/Titli Logo White.png"
              alt="Titli Logo"
              className="w-[300px] max-w-full h-auto mb-6"
            />
            <p className="text-[12px] opacity-70 mt-auto">
              © Titli Foundation. All Rights Reserved 2025.
            </p>
          </div>

          {/* Quick Links Group 1 */}
          <div className="flex flex-col gap-3">
            <div className="grid text-[16px] font-inter font-medium gap-y-[49px] leading-[22px]">
              <p className="font-normal text-[#FFC5DE]">QUICK LINKS</p>
              <a
                href="https://linktr.ee/Titli"
                target="_blank"
                rel="noreferrer"
              >
                LINKTREE
              </a>
              <a href="/privacy-policy">PRIVACY POLICY</a>
              <a href="/terms-and-conditions">TERMS & CONDITIONS</a>
              <a href="/refund-and-cancellation-policy">
                REFUND & CANCELLATION POLICY
              </a>
            </div>
          </div>

          {/* Quick Links Group 2 */}
          <div className="flex flex-col gap-3 pl-[80px]">
            <div className="grid text-[16px] font-inter font-medium gap-y-[49px] leading-[22px]">
              <a href="/donate">DONATE</a>
              <a href="/aboutus">ABOUT US</a>
              <a href="/careers">CAREERS</a>
              <a href="/gallery">GALLERY</a>
              <a href="/blog">BLOGS</a>
            </div>
          </div>

          {/* Contact Info + Address + Socials */}
          <div className="flex flex-col gap-3 text-[16px] font-inter font-medium">
            <h3 className="uppercase mb-2 font-normal text-[#FFC5DE]">
              Get in Touch
            </h3>
            <a
              href="mailto:contact@titlifoundation.in"
              className=" text-[12px]"
            >
              contact@titlifoundation.in
            </a>
            <p className="text-[12px]">+91 86049 42501</p>

            <h3 className="font-light text-[#FFC5DE] uppercase mt-6">
              Find Us
            </h3>
            <button
              onClick={() => setShowMap(true)}
              className="text-left text-[12px] leading-[20px] hover:text-[#ffc5de] transition-all duration-200"
            >
              Pandey Krishi Kendra, Nirala Nagar, Khojanpur,
              <br />
              Faizabad, Uttar Pradesh - 224001
            </button>

            <div className="flex gap-8 mt-[50px] justify-start">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/svgs/Linkedin Logo.png"
                  alt="LinkedIn"
                  className="w-[48px] h-[48px]"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/svgs/Instagram Logo.png"
                  alt="Instagram"
                  className="w-[48px] h-[48px]"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src="/svgs/X Logo.png"
                  alt="Twitter/X"
                  className="w-[48px] h-[48px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden w-full">
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Quick Links */}
            <div className="flex flex-col gap-y-2 ">
              <h3 className="text-[13px] font-semibold uppercase mb-2">
                Quick Links
              </h3>
              <a href="/donate" className="text-[12px] mb-1">
                DONATE
              </a>
              <a href="/careers" className="text-[12px] mb-1">
                CAREERS
              </a>
              <a href="/gallery" className="text-[12px] mb-1">
                GALLERY
              </a>
              <a href="/blog" className="text-[12px] mb-1">
                BLOGS
              </a>
              <a href="https://linktr.ee/Titli" className="text-[12px] mb-1">
                LINKTREE
              </a>
              <a href="/terms-and-conditions" className="text-[12px] mb-1">
                TERMS & CONDITIONS
              </a>
              <a href="/privacy-policy" className="text-[12px] mb-1">
                PRIVACY POLICY
              </a>
              <a href="/refund-and-cancellation-policy" className="text-[12px]">
                REFUND & CANCELLATION POLICY
              </a>
            </div>

            {/* Contact & Address */}
            <div className="flex flex-col gap-y-2">
              <h3 className="text-[13px] font-semibold uppercase mb-2">
                Get in Touch
              </h3>
              <a
                href="mailto:contact@titlifoundation.com"
                className="underline text-[12px] break-words"
              >
                contact@titlifoundation.com
              </a>
              <p className="text-[12px] mt-1">+91 86049 42501</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8 mb-8">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/svgs/linkedin.png"
                    alt="LinkedIn"
                    className="w-auto h-auto"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/svgs/ig-white.png"
                    alt="Instagram"
                    className="w-auto h-auto"
                  />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img
                    src="/svgs/x.png"
                    alt="Twitter/X"
                    className="w-auto h-auto"
                  />
                </a>
              </div>

              <h3 className="text-[13px] font-semibold uppercase">Find Us</h3>
              <p className="text-[12px] leading-[18px] break-words">
                Pandey Krishi Kendra,
                <br />
                Nirala Nagar, Khojanpur,
                <br />
                Faizabad, Uttar Pradesh
                <br />
                224001
              </p>
            </div>
          </div>

          {/* Bottom Logo Centered */}
          <div className="flex justify-center mt-8 mb-8">
            <img
              src="/Titli Logo White.png"
              alt="Titli Foundation Logo"
              width={300}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Bottom Note - Mobile only */}
          <div className="text-center text-[11px] opacity-70 pb-6 px-4 md:hidden">
            © Titli Foundation. All Rights Reserved 2025.
          </div>
        </div>

        {/* Embedded Map Popup */}
        {showMap && (
          <div
            className="absolute bottom-0 right-0 z-50 border border-white bg-white shadow-lg animate-slideInFade rounded-[20px] "
            style={{
              width: `${footerHeight}px`,
              height: `${footerHeight }px`,
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-2 text-black text-lg font-bold z-10"
            >
              ✖
            </button>

            {/* Google Map Iframe */}
            <iframe
              title="Titli Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.4638840717394!2d82.13223717449924!3d26.76147926657518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a08a92d8ac1f5%3A0xb7dc749c5bb70578!2sPandey%20krishi%20kendra!5e0!3m2!1sen!2sin!4v1753286557978!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[20px]"
            />
          </div>
        )}
      </div>
    </footer>
  );
}
