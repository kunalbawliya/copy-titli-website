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

  return (
    <div className="font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Donate</title>
      </Head>

      <div className="relative max-w-[90vw] w-full m-auto text-[#2F2F2F]">
        <Navbar donatePage={true} />

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px] pt-[100px] lg:pt-[160px] px-4">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-[28px] lg:text-[48px] font-[700] leading-tight text-black">
              Small steps towards <br />
              <span className="text-black">Breaking the Taboo</span>
            </h2>
            <p className="mt-[20px] text-[16px] lg:text-[18px] text-[#2F2F2F] leading-[1.7em]">
              By donating to our cause, you are directly contributing towards
              providing underprivileged menstruators across the country with
              essential and sustainable menstrual hygiene products. Rest assured
              that every penny of your donation will go towards this noble
              cause, ensuring that no one has to compromise on their health and
              dignity during their periods. Join us in our mission to create a
              more inclusive and equitable society for all.
            </p>
            <button
              onClick={() => {
                const offset = -170; // adjust based on your navbar height
                const element = donationRef.current;
                const top =
                  element?.getBoundingClientRect().top +
                  window.scrollY +
                  offset;
                if (top) window.scrollTo({ top, behavior: "smooth" });
              }}
              className="mt-[30px] bg-[#E34F8F] hover:bg-[#c7377b] text-white font-semibold text-[16px] px-[36px] py-[14px] rounded-[16px] transition-all duration-300"
            >
              Make a donation
            </button>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="aspect-square rounded-[16px] flex items-center justify-center">
              <img
                src="/images/donate/hero.png"
                className="object-cover rounded-[16px] w-full h-full"
                alt="Donate visual"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-[60px] text-center text-[14px] text-[#333] font-medium">
          Scroll to get one step closer to the solution ▼
        </div>

        {/* Donation Cards */}
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
        <section className="text-center px-4 md:px-8 mt-20 mb-20 bg-black">
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
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[30px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
              Join the Team
            </button>
          </a>
        </section>

        {/* 📸 Instagram Hover Section */}
        <section className="flex justify-center mb-[95px] bg-black">
          <a
            href="https://www.instagram.com/titlifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-fit flex items-center justify-center"
          >
            <div className="relative inline-flex items-center font-[Inter] font-semibold text-[18px] md:text-[20px] tracking-[-0.06em]">
              <img
                src="/svgs/instagram-logo.svg"
                alt="Instagram"
                className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[6rem]"
              />
              <span className="absolute left-full ml-0 -translate-x-[6rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
                Follow our journey
              </span>
            </div>
          </a>
        </section>

        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
