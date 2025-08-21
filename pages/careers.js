import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/CareerHero";
import Counting from "@/components/Counting";
// 1. IMPORT THE NEW DEPARTMENTSGRID COMPONENT
import DepartmentsGrid from "@/components/DepartmentsGrid";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="pb-20 min-h-screen text-black font-inter">
        <CareerHero />

        <Counting />

        {/* --- JOIN THE TEAM SECTION --- */}
        <section className="max-w-4xl mx-auto text-center my-20 px-4">
          <h2 className="text-[40px] md:text-[64px] font-semibold mb-[30px] md:mb-8 xl:mb-12">
            Join the Team
          </h2>
          <p className="text-[14px] xl:text-[20px] max-w-[300px] md:max-w-[600px] xl:max-w-[827px] mx-auto">
            Titli operates across several cities, strategically selected to
            ensure a broad impact. Each department plays a unique and vital
            role, working collaboratively to drive our mission forward.
          </p>
        </section>

        {/* 2. USE THE NEW COMPONENT HERE */}
        <DepartmentsGrid />

        {/* --- CTA SECTION --- */}
        <section className="text-center px-4 mb-0 lg:mb-10">
          <section className="text-center px-4 mb-[50px] md:px-8 flex flex-col items-center">
            <h2 className="text-[15px] md:text-2xl max-w-[236px] md:max-w-[450px] lg:max-w-4xl mx-auto text-black">
              Join us in our efforts to{" "}
              <span className="text-pink font-bold">#BreakTheTaboo</span> and
              positively impact lives everywhere.
            </h2>
          </section>
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
      </main>
      <Footer />
    </>
  );
}
