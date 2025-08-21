import React from 'react';

const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

const DonationCards = ({ donationRef, razorpayButtons, handlePayment }) => {
  return (
    <div ref={donationRef} className="max-w-[1222px] mx-auto">
      <div className="text-center font-inter font-semibold text-[24px] lg:text-[48px] text-black mt-[50px] lg:mt-[100px] mb-[30px] lg:mb-[70px]">
        Select Your Donation
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] px-4">
        {razorpayButtons.map((btn, index) => (
          <div
            key={index}
            // CHANGE 1: Card is 307px on mobile, but resets for larger screens (sm:)
            className="p-[24px] rounded-[12px] bg-[#ffdbf7] border border-[#eee] text-center min-w-[307px] sm:min-w-0"
          >
            <div className="flex items-center justify-between px-8 lg:px-0 mb-[10px]">
              <div className="text-[24px] font-[700]">{btn.amountDisplay}</div>
              <button
                onClick={() => handlePayment(btn)}
                style={noTapHighlight}
                // CHANGE 2: Button is big on md, small on lg, and big again on xl
                className="bg-pink text-white px-4 md:px-8 lg:px-4 xl:px-8 py-2 rounded-[15px] text-base md:text-lg lg:text-base xl:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
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
        <div
          // CHANGE 1: Card is 307px on mobile, but resets for larger screens (sm:)
          className="p-[24px] rounded-[12px] bg-[#ffdbf7] border border-[#eee] text-center min-w-[307px] sm:min-w-0"
        >
          <div className="flex items-center justify-between px-8 lg:px-0 mb-[10px]">
            <div className="text-[24px] font-[700]">₹ _____</div>
            <button
              onClick={() =>
                handlePayment({
                  amount: 0,
                  impact: "Custom donation to support menstrual dignity.",
                })
              }
              style={noTapHighlight}
              // CHANGE 2: Button is big on md, small on lg, and big again on xl
              className="bg-pink text-white px-4 md:px-8 lg:px-4 xl:px-8 py-2 rounded-[15px] text-base md:text-lg lg:text-base xl:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
            >
              Donate
            </button>
          </div>
          <div className="text-[16px] text-black py-4 min-h-[48px] leading-[1.4em]">
            Or enter your custom amount
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;