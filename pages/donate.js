import Head from "next/head";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const razorpayButtons = [
  {
    amount: 101100,
    amountDisplay: "₹1011",
    impact:
      "Help 2 or more menstruators to adopt sustainable menstrual practices.",
  },
  {
    amount: 404400,
    amountDisplay: "₹4044",
    impact:
      "Help 8 or more menstruators to adopt sustainable menstrual practices.",
  },
  {
    amount: 606600,
    amountDisplay: "₹6066",
    impact:
      "Help 13 or more menstruators to adopt sustainable menstrual practices.",
  },
];

const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

export default function Donate() {
  const donationRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = ({ amount, impact }) => {
    const options = {
      key: razorpayKey,
      amount,
      currency: "INR",
      name: "Titli Foundation",
      description: impact,
      image: "/favicon.ico",
      handler(response) {
        alert("Donation successful! Thank you ❤️");
        console.log("Razorpay Response:", response);
      },
      prefill: { name: "", email: "", contact: "" },
      theme: { color: "#E34F8F" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  // MODIFIED: Implemented JavaScript-based scroll logic with manual offset
  const handleScrollToDonate = () => {
    const element = donationRef.current;
    if (element) {
      // Adjust this value to match your fixed navbar's height
      const navbarOffset = 170;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Donate</title>
      </Head>

      <div className="relative max-w-[90vw] w-full m-auto text-[#000000]">
        <Navbar donatePage={true} />

        {/* Hero Section */}
        <main className="w-full max-w-[1222px] mx-auto px-4 md:px-8 lg:pt-[170px] py-20">
          <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
            {/* Left: Heading, Text, Button */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 mt-8 lg:mt-0 font-inter">
              <div className="text-[60px] font-semibold leading-tight">
                Small steps towards Breaking the Taboo
              </div>
              <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-black max-w-[520px] leading-tight mx-auto lg:mx-0">
                By donating to our cause, you are directly contributing towards
                providing underprivileged menstruators across the country with
                essential and sustainable menstrual hygiene products. Rest
                assured that every penny of your donation will go towards this
                noble cause, ensuring that no one has to compromise on their
                health and dignity during their periods. Join us in our mission
                to create a more inclusive and equitable society for all.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleScrollToDonate}
                  className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                >
                  Make a donation
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="w-[532px] flex justify-center lg:justify-end">
              <div className="bg-gray-200 rounded-[20px] w-full h-[552px] flex items-center justify-center">
                <img
                  src="/images/career and donate-hero.png"
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-auto h-[552px] rounded-[20px]"
                />
              </div>
            </div>
          </section>
        </main>

        {/* Scroll Indicator */}
        <div className="text-center text-[24px] text-black mt-[10px] mb-[72px]">
          Scroll to see what Founder wants to tell you{" "}
          <span className="inline-block animate-bounce">▼</span>
        </div>

        <div className="text-center font-inter font-semibold text-[48px]   text-black mt-[100px] mb-[70px]">
          Select Your Donation
        </div>

        {/* Donation Cards */}
        {/* MODIFIED: Removed the scroll-margin-top class */}
        <div
          ref={donationRef}
          className="mt-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] px-4"
        >
          {razorpayButtons.map((btn, index) => (
            <div
              key={index}
              className="p-[24px] rounded-[12px] bg-[#ffdbf7] border border-[#eee] text-center"
            >
              <div className="flex items-center justify-between mb-[10px]">
                <div className="text-[24px] font-[700]">
                  {btn.amountDisplay}
                </div>
                <button
                  onClick={() => handlePayment(btn)}
                  className="bg-pink text-white px-4 md:px-8 py-2 rounded-[15px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                >
                  Donate
                </button>
              </div>
              <div className="text-[16px] text-black py-4 min-h-[48px] leading-[1.4em]">
                {btn.impact}
              </div>
            </div>
          ))}

          {/* Custom Amount Card */}
          <div className="p-[24px] rounded-[12px] bg-[#ffdbf7] border border-[#eee] text-center">
            <div className="flex items-center justify-between mb-[10px]">
              <div className="text-[24px] font-[700]">₹ _____</div>
              <button
                onClick={() =>
                  handlePayment({
                    amount: 0,
                    impact: "Custom donation to support menstrual dignity.",
                  })
                }
                className="bg-pink text-white px-4 md:px-8 py-2 rounded-[15px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
              >
                Donate
              </button>
            </div>
            <div className="text-[16px] text-black py-4 min-h-[48px] leading-[1.4em]">
              Or enter your custom amount
            </div>
          </div>
        </div>

        {/* 💌 Join the Team Section */}
        <section className="text-center px-4 md:px-8 mt-20 mb-20">
          <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-inter max-w-4xl mx-auto mb-6 text-black leading-snug">
            We’re always on the lookout for people that believe in menstrual
            dignity for all. Doesn’t matter who you are - we have a place for
            you.
          </h2>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
              Join the Team
            </button>
          </a>
        </section>

        <FAQ />
      </div>
      <Footer />
    </div>
  );
}