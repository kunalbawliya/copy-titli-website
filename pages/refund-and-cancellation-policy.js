import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

import { Heading, Subheading, Paragraph } from "@/components/Text";

export default function Refund() {
  return (
    <div className="pt-[108px] font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Refund & Calcellation Policy</title>
      </Head>
      <div className="relative max-w-[1224px] m-auto mb-[292px] text-[#000000]">
        <Navbar donatePage={true} />
        <div className="py-[50px]">
          <p className="font-semibold text-[64px] mb-[30px]">Refund & Calcellation Policy</p>
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
