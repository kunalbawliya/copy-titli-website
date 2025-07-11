export default function Footer() {
  return (
    <footer className="w-full bg-pink text-[#ffffff] font-inter text-[16px]">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] px-[6vw] py-[60px]">
        {/* Left Column - Logo & Text */}
        <div className="flex flex-col items-start">
          <img src="/Titli Logo White.png" alt="Titli Logo" className="w-[299px] h-[60px] mb-6" />
          <p className="max-w-[300px] text-[15px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="mt-10 text-[14px] opacity-70">
            © Titli Foundation. All Rights Reserved 2023.
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold mb-3 uppercase">Quick Links</h3>
          <a href="https://linktr.ee/Titli" target="_blank" rel="noreferrer">LINKTREE</a>
          <a href="/privacy-policy">PRIVACY POLICY</a>
          <a href="/terms-and-conditions">TERMS & CONDITIONS</a>
          <a href="/refund-and-cancellation-policy">REFUND & CANCELLATION POLICY</a>
        </div>

        {/* Right Column - Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold mb-3 uppercase">Get in Touch</h3>
          <a href="mailto:contact@titlifoundation.in" className="underline">
            contact@titlifoundation.in
          </a>
          <div>+91 86049 42501</div>

          <h3 className="text-[16px] font-semibold mt-6 mb-2 uppercase">Find Us</h3>
          <p>
            Pandey Krishi Kendra, Nirala Nagar, Khojanpur,<br />
            Faizabad, Uttar Pradesh - 224001
          </p>
        </div>
      </div>
    </footer>
  );
}
