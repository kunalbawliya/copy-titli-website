import Head from "next/head";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import DonateHero from "@/components/DonateHero";
import DonationCards from "@/components/DonationCards"; // This will now render the updated version

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
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

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

  const handleScrollToDonate = () => {
    const element = donationRef.current;
    if (element) {
      const navbarOffset = 150;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
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

      <div className="relative w-full m-auto text-[#000000]">
        <Navbar donatePage={true} />

        <DonateHero handleScrollToDonate={handleScrollToDonate} />

        <DonationCards
          donationRef={donationRef}
          razorpayButtons={razorpayButtons}
          handlePayment={handlePayment}
        />

        {/* Join the Team Section - Visible only on lg and xl screens */}
        <section className="text-center px-4 md:px-8 mt-20 mb-20 hidden lg:block">
          <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-inter max-w-4xl mx-auto mb-6 text-black leading-snug">
            We’re always on the lookout for people that believe in menstrual
            dignity for all. Doesn’t matter who you are - we have a place for
            you.
          </h2>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noopener noreferrer"
            style={noTapHighlight}
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
