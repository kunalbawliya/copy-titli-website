export default function Footer() {
  return (
    <footer className="w-full bg-pink text-white font-inter text-[13px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[6vw] py-[60px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        
        {/* Desktop Left: Logo & Description */}
        <div className="hidden md:flex flex-col items-start">
          <img
            src="/Titli Logo White.png"
            alt="Titli Logo"
            className="w-[299px] max-w-full h-auto mb-6"
          />
          <p className="max-w-[300px] text-[13px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="mt-10 text-[12px] opacity-70">
            © Titli Foundation. All Rights Reserved 2023.
          </p>
        </div>

        {/* Mobile only: FIND US + GET IN TOUCH (side-by-side) */}
        <div className="block md:hidden w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* FIND US */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold uppercase mb-2">Find Us</h3>
              <p className="text-[12px] leading-[18px] break-words">
                Pandey Krishi Kendra,<br />
                Nirala Nagar, Khojanpur,<br />
                Faizabad, Uttar Pradesh<br />
                224001
              </p>
            </div>

            {/* GET IN TOUCH */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold uppercase mb-2">Get in Touch</h3>
              <a
                href="mailto:contact@titlifoundation.com"
                className="underline text-[12px] break-words"
              >
                contact@titlifoundation.com
              </a>
              <p className="text-[12px] mt-1">+91 86049 42501</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <img src="/svgs/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <img src="/svgs/instagram-logo.svg" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/svgs/twitter.svg" alt="Twitter/X" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links - visible on all sizes */}
        <div className="flex flex-col gap-2 mt-6 md:mt-0">
          <h3 className="text-[13px] font-semibold uppercase mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
            <a href="/donate">DONATE</a>
            <a href="https://linktr.ee/Titli" target="_blank" rel="noreferrer">LINKTREE</a>
            <a href="/careers">CAREERS</a>
            <a href="/terms-and-conditions">TERMS & CONDITIONS</a>
            <a href="/gallery">GALLERY</a>
            <a href="/privacy-policy">PRIVACY POLICY</a>
            <a href="/blogs">BLOGS</a>
            <a href="/refund-and-cancellation-policy">REFUND & CANCELLATION POLICY</a>
          </div>
        </div>

        {/* Desktop Right Column: Contact + Find Us */}
        <div className="hidden md:flex flex-col gap-3 text-[13px]">
          <h3 className="text-[13px] font-semibold uppercase mb-2">Get In Touch</h3>
          <a href="mailto:contact@titlifoundation.com" className="underline">
            contact@titlifoundation.com
          </a>
          <div>+91 86049 42501</div>

          <h3 className="text-[13px] font-semibold uppercase mt-6 mb-2">Find Us</h3>
          <p>
            Pandey Krishi Kendra, Nirala Nagar, Khojanpur,<br />
            Faizabad, Uttar Pradesh - 224001
          </p>
        </div>
      </div>

      {/* Bottom Note - Mobile only */}
      <div className="text-center text-[11px] opacity-70 pb-6 px-4 md:hidden">
        © Titli Foundation. All Rights Reserved 2023.
      </div>
    </footer>
  );
}
