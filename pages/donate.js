import Head from "next/head";
import Navbar from "@/components/Navbar";
import PrimaryButton, { SecondaryButton } from "@/components/Button";
import BrandList from "@/components/BrandList";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { ColourTicker } from "@/components/Ticker";
import { useEffect } from "react";

export default function Donate() {
  const razorpayButtons = [
    {
      id: "pl_Lhx38jvW9IlRnt",
      amount: "₹1011",
      impact: "Help 2 or more menstruators to adopt sustainable menstrual practices.",
    },
    {
      id: "pl_Lj7k5QOllMbRfn",
      amount: "₹4044",
      impact: "Help 8 or more menstruators to adopt sustainable menstrual practices.",
      label: "Most Donated",
    },
    {
      id: "pl_Lj7lnYrL3czAK7",
      amount: "₹6066",
      impact: "Help 13 or more menstruators to adopt sustainable menstrual practices.",
    },
  ];

  useEffect(() => {
    razorpayButtons.forEach((btn, index) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", btn.id);
      script.async = true;

      const form = document.getElementById(`donateForm${index + 1}`);
      if (form && !form.hasChildNodes()) {
        form.appendChild(script);
      }
    });

    const customScript = document.createElement("script");
    customScript.src = "https://checkout.razorpay.com/v1/payment-button.js";
    customScript.setAttribute("data-payment_button_id", "pl_LhwnkF5w1i2h9B");
    customScript.async = true;

    const customForm = document.getElementById("donateForm4");
    if (customForm && !customForm.hasChildNodes()) {
      customForm.appendChild(customScript);
    }
  }, []);

  return (
    <div className="font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Donate</title>
        <style>{`
          .razorpay-payment-button {
            background-color: #e34f8f !important;
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            padding: 12px 20px !important;
            border-radius: 12px !important;
            color: white !important;
            border: none !important;
            width: 100% !important;
            text-transform: none !important;
            transition: background 0.3s ease;
            box-shadow: 0 2px 10px rgba(227, 79, 143, 0.2);
          }
          .razorpay-payment-button:hover {
            background-color: #c7377b !important;
          }
        `}</style>
      </Head>

      <div className="relative max-w-[90vw] w-[1336px] m-auto text-[#2F2F2F]">
        <Navbar donatePage={true} />
        <div className="flex flex-col lg:flex-row justify-between items-center pt-[120px] lg:pt-[50px] pb-[50px] gap-x-[50px] gap-y-[50px]">
          <div className="items-center text-center lg:text-left w-[100%]">
            <div className="text-[32px] lg:text-[56px] font-shadows text-pink font-[400] mt-[-100px]">
              Small step towards
            </div>
            <div className="font-[500] text-[32px] mt-[0px] lg:mt-[-10px]">
              Breaking the Taboo
            </div>
            <div className="font-[300] text-[16px] lg:text-[18px] lg:w-[350px] mb-[30px] lg:mb-[70px] leading-[1.8em] mt-[20px]">
              Campaign to distribute menstrual health and hygiene kits to the underprivileged menstruators of society.
            </div>
            <PrimaryButton href="https://linktr.ee/Titli" target="_blank" text="Donate now" />
          </div>
          <img className="w-[100%] lg:w-[50%] items-center" src="/images/donate/hero.png" />
        </div>
      </div>

      <div className="bg-yellow py-[30px] lg:py-[70px]">
        <div className="relative max-w-[90vw] w-[1336px] m-auto text-[#2F2F2F] flex flex-col lg:flex-row justify-between gap-y-[30px]">
          <div className="grid grid-cols-2 lg:flex gap-x-[20px] items-center justify-center lg:justify-auto">
            <div className="font-unna font-[700] text-[32px] lg:text-[72px] text-right">200 +</div>
            <div className="text-[16px] lg:text-[32px]">cups <br /> donated</div>
          </div>
          <div className="grid grid-cols-2 lg:flex gap-x-[20px] items-center justify-center lg:justify-auto">
            <div className="font-unna font-[700] text-[32px] lg:text-[72px] text-right">2500 +</div>
            <div className="text-[16px] lg:text-[32px]">sustainable pads <br /> donated</div>
          </div>
          <div className="grid grid-cols-2 lg:flex gap-x-[20px] items-center justify-center lg:justify-auto">
            <div className="font-unna font-[700] text-[32px] lg:text-[72px] text-right">20 +</div>
            <div className="text-[16px] lg:text-[32px]">campaigns</div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[90vw] w-[1336px] m-auto text-[#2F2F2F]">
        <BrandList />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-pink py-[50px] lg:py-[130px] px-[2.5vw] lg:pl-[5vw] lg:pr-[100px] text-white grid justify-end">
          <div className="lg:max-w-[500px]">
            <div className="font-black text-[32px] lg:text-[56px] mb-[30px]">The Problem</div>
            <div className="font-light text-[16px] lg:text-[18px]">
              Did you know that almost 23 million girls drop out of school every year when they start menstruating? ...
            </div>
          </div>
        </div>
        <div className="bg-[#FAF5FE] py-[50px] lg:py-[130px] px-[2.5vw] lg:pr-[5vw] lg:pl-[100px] text-pink">
          <div className="lg:max-w-[500px]">
            <div className="font-black text-[32px] lg:text-[56px] mb-[30px]">The Solution</div>
            <div className="font-light text-[16px] lg:text-[18px]">
              At Titli Foundation, we empathize with the challenges faced by underprivileged menstruators ...
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90vw] lg:max-w-[95vw] w-[1700px] m-auto">
        <div className="lg:hidden grid grid-cols-2 gap-[20px] my-[30px]">
          <img src="/images/caro4.png" className="w-[100%]" />
          <img src="/images/caro1.png" className="w-[100%]" />
        </div>
        <Carousel />
      </div>

      <ColourTicker />

      <div id="donate" className="max-w-[90vw] lg:max-w-[90vw] w-[1700px] m-auto my-[70px] lg:my-[150px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-[50px] lg:mb-[70px] gap-y-[20px]">
          <div className="text-[32px] lg:text-[56px] font-[500]">
            <span className="font-shadows text-pink">Select your</span><br />Donation
          </div>
          <div className="lg:w-[700px] text-[16px] lg:text-[18px] leading-[1.8em] font-[400] lg:text-right">
            By donating to our cause, you are directly contributing ...
          </div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-x-[20px] gap-y-[20px]">
          {razorpayButtons.map((btn, index) => (
            <div key={btn.id} className="px-[24px] py-[32px] bg-[#FAF5FE] rounded-[16px] relative">
              {btn.label && (
                <div className="absolute top-[-8px] right-[10px] flex items-center gap-x-[5px] text-pink w-auto font-[600] text-[14px] border-2 border-pink rounded-[100px] px-[10px] py-[2px]">
                  <div>{btn.label}</div>
                  <svg fill="#E34F8F" viewBox="0 0 24 24" className="h-[15px]">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" />
                  </svg>
                </div>
              )}
              <div className="text-[32px] font-[700] mb-[20px]">{btn.amount}</div>
              <div className="font-[300] mb-[30px] h-[3em]">{btn.impact}</div>
              <div className="bg-[#ECCCDA] h-[2px] w-[50px] mb-[30px]"></div>
              <form id={`donateForm${index + 1}`} className="w-full"></form>
            </div>
          ))}

          <div className="px-[24px] py-[32px] bg-white border-2 border-pink rounded-[16px]">
            <div className="text-[32px] font-[700] mb-[20px]">Custom</div>
            <div className="font-[300] mb-[30px] h-[3em]">Choose your own amount</div>
            <div className="bg-[#ECCCDA] h-[2px] w-[50px] mb-[30px]"></div>
            <form id="donateForm4" className="w-full"></form>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-[15px] mt-[50px]">
          <img src="/svgs/info.svg" />
          <div className="text-[14px] lg:text-[18px]">
            Follow us on social media and see how our campaign is going!
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}