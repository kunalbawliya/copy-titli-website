import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Paragraph } from "@/components/Text";

export default function Refund() {
  return (
    <div className="pt-[108px] font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Refund & Cancellation Policy</title>
      </Head>
      {/* CHANGE: Adjusted bottom margin to match the template */}
      <div className="relative max-w-[1224px] m-auto mb-[92px] text-[#000000]">
        <Navbar donatePage={true} />
        {/* CHANGE: Added responsive max-width and mx-auto for centering */}
        <div className="py-[50px] mx-auto max-w-[307px] md:max-w-[520px] lg:max-w-[916px] xl:max-w-[1223px]">
          <p 
            // CHANGE: Added responsive font sizes
            className="font-semibold text-[30px] md:text-[48px] lg:text-[64px] mb-[30px]"
          >
            Refund & Cancellation Policy
          </p>
          <Paragraph>
            Donations made to Titli Foundation are final and non-refundable.
            Once a donation has been processed, it cannot be cancelled or
            refunded.
            <br />
            <br />
            If you have any questions or concerns about our refund and
            cancellation policies, please contact us at
            contact@titlifoundation.in
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  );
}