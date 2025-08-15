import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Heading, Subheading, Paragraph } from "@/components/Text";

export default function Privacy() {
  return (
    <div className="pt-[108px] font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation | Privacy Policy</title>
      </Head>
      <div className="relative max-w-[1224px] m-auto mb-[92px] text-black">
        <Navbar donatePage={true} />
        <div className="py-[50px]">
          <p className="font-semibold text-[64px] mb-[30px]">Privacy Policy</p>
          <Subheading>Introduction</Subheading>
          <Paragraph>
            We at Titli Foundation are committed to protecting the privacy and
            security of our website users. This privacy policy explains how we
            collect, use, and protect the personal information you provide to us
            on our website. By using our website, you consent to our privacy
            policy.
          </Paragraph>
          <Subheading>Information We Collect</Subheading>
          <Paragraph>
            We collect personal information from you when you donate through our
            website or contact us using our contact form. The personal
            information we collect may include your name, email address, phone
            number, and mailing address.
            <br />
            <br />
            We also use cookies to collect information about how you use our
            website, such as the pages you visit, the time and date of your
            visit, and your IP address. This information helps us improve our
            website and understand our users' preferences.
          </Paragraph>
          <Subheading>How We Use Your Information</Subheading>
          <Paragraph>
            We use your personal information to:
            <br />
            <br />
            Process and acknowledge your donations
            <br />
            Communicate with you about your donation
            <br />
            Respond to your inquiries and feedback
            <br />
            Provide you with information about our programs and services
            <br />
            Comply with legal obligations
            <br />
            We may also use your information to analyze website usage and
            improve our website's content and functionality.
          </Paragraph>

          <Subheading>Disclosure of Your Information</Subheading>
          <Paragraph>
            We do not sell or rent your personal information to third parties.
            However, we may share your information with our trusted service
            providers who assist us in operating our website, processing
            donations, or providing you with information about our programs and
            services. These service providers are required to keep your personal
            information confidential and use it only for the purposes for which
            we have hired them.
            <br />
            <br />
            We may also disclose your personal information if required by law or
            in connection with a legal proceeding.
          </Paragraph>

          <Subheading>Security of Your Information</Subheading>
          <Paragraph>
            We take reasonable precautions to protect your personal information
            from unauthorized access, disclosure, or misuse. We use
            industry-standard encryption technologies to secure your data during
            transmission.
            <br />
            <br />
            However, no method of transmission over the internet or electronic
            storage is 100% secure. We cannot guarantee the security of your
            information and are not responsible for unauthorized access to your
            information that is beyond our control.
          </Paragraph>

          <Subheading>Children's Privacy</Subheading>
          <Paragraph>
            Our website is not intended for use by children under the age of 13.
            We do not knowingly collect personal information from children under
            13 years old. If you are a parent or guardian and become aware that
            your child has provided us with personal information, please contact
            us immediately.
          </Paragraph>

          <Subheading>Changes to Our Privacy Policy</Subheading>
          <Paragraph>
            We may update our privacy policy from time to time. We will post any
            changes on this page and update the "last updated" date at the top
            of the page.
          </Paragraph>
          <Subheading>Contact Us</Subheading>
          <Paragraph>
            If you have any questions or concerns about our privacy policy or
            the handling of your personal information, please contact us at
            contact@titlifoundation.in.
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  );
}
