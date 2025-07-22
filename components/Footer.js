export default function Footer() {
  return (
    <footer className="w-full bg-pink text-white font-inter text-[13px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[6vw] py-[60px]">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-[60px]">
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

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-3 ">
            <div className="grid text-[16px] gap-y-[38px] leading-[22px]">
              <p className="font-light text-[#FFC5DE]">QUICK LINKS</p>
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

          <div className="flex flex-col gap-3 pl-[80px]">
            <div className="grid text-[16px] gap-y-[38px] leading-[22px]">
              <a href="/donate">DONATE</a>
              <a href="/about-us">ABOUT US</a>
              <a href="/careers">CAREERS</a>
              <a href="/gallery">GALLERY</a>
              <a href="/blog">BLOGS</a>
            </div>
          </div>

          {/* Right: Contact Info + Address + Socials */}
          <div className="flex flex-col gap-3 text-[16px]">
            <h3 className="uppercase mb-2 font-light text-[#FFC5DE]">
              Get in Touch
            </h3>
            <a
              href="mailto:contact@titlifoundation.in"
              className="underline text-[12px]"
            >
              contact@titlifoundation.in
            </a>
            <p className="text-[12px]">+91 86049 42501</p>

            <h3 className="font-light text-[#FFC5DE] uppercase mt-6">
              Find Us
            </h3>
            <p className="text-[12px] leading-[20px]">
              Pandey Krishi Kendra, Nirala Nagar, Khojanpur,
              <br />
              Faizabad, Uttar Pradesh - 224001
            </p>

            <div className="flex gap-16 mt-12">
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

            {/* Get in Touch + Address + Socials */}
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
      </div>
    </footer>
  );
}
