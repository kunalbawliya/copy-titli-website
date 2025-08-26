import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Insta from "@/components/Insta";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Titli Foundation</title>
        <meta
          name="description"
          content="Explore the work, progress, and people of Titli Foundation through our photo gallery."
        />
      </Head>

      {/* This style block contains the updated, mobile-first CSS for the collage grid. */}
      <style jsx>{`
        /* --- Mobile First Styles (Default) --- */
        .collage-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px; /* Spacing between stacked images */
          padding: 0 1rem; /* Ensures some padding on very small screens */
        }
        .grid-item {
          width: 307px;
          height: 228px;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* --- Tablet Styles (min-width: 768px) --- */
        @media (min-width: 768px) {
          .collage-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 30px;
            /* Reduced size for tablets */
            max-width: 700px;
            height: 1250px; /* Proportional height */
            margin: auto;
            padding: 0;
          }
          .grid-item {
            /* Reset mobile dimensions */
            width: auto;
            height: auto;
          }
          /* Re-apply grid area definitions for tablet and up */
          .item-1 {
            grid-area: 1 / 1 / 2 / 3;
          }
          .item-2 {
            grid-area: 1 / 3 / 2 / 4;
          }
          .item-3 {
            grid-area: 2 / 1 / 3 / 2;
          }
          .item-4 {
            grid-area: 3 / 1 / 4 / 2;
          }
          .item-5 {
            grid-area: 2 / 2 / 4 / 4;
          }
          .item-6 {
            grid-area: 4 / 1 / 5 / 2;
          }
          .item-7 {
            grid-area: 4 / 2 / 5 / 3;
          }
          .item-8 {
            grid-area: 4 / 3 / 5 / 4;
          }
          .item-9 {
            grid-area: 5 / 1 / 6 / 3;
          }
          .item-10 {
            grid-area: 5 / 3 / 6 / 4;
          }
        }

/* --- Tablet Styles (min-width: 1024px) --- */
        @media (min-width: 1024px) {
          .collage-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 20px;
            /* Reduced size for tablets */
            max-width: 1180px;
            height: 1780px; /* Proportional height */
            margin: auto;
            padding: 0;
          }

        /* --- Desktop Styles (min-width: 1280px) --- */
        @media (min-width: 1280px) {
          .collage-grid {
            /* Full size for desktop */
            max-width: 1180px;
            height: 2140px;
            gap: 50px;
          }
        }
      `}</style>

      {/* CHANGE: Added a wrapper div with background classes */}
      <div className="bg-[url('/homepage-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <Navbar />

        <main className="pt-[150px]  md:pt-[200px]">
          {/* --- Gallery Section Starts Here --- */}
          <div className="container mx-auto px-4">
            {/* Header */}
            <header className="text-center mb-16 md:mb-[105px]">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] xl:text-[64px] max-w-[230px] md:max-w-[310px] lg:max-w-[890px] xl:max-w-[1070px] mx-auto font-bold font-inter text-black">
                The Work. The Progress. The People.
              </h1>
              <p className="text-lg md:text-xl lg:text-[24px] mt-6 md:mt-[35px] max-w-xl mx-auto">
                Explore the brief moments that reflect our mission, our community,
                and the progress we've made together.
              </p>
            </header>

            {/* Collage Grid Layout */}
            <div className="collage-grid">
              <div className="grid-item item-1">
                <img src="images/gallery/gal1.png" alt="Officials" />
              </div>
              <div className="grid-item item-2">
                <img src="images/gallery/gal2.png" alt="Team" />
              </div>
              <div className="grid-item item-3">
                <img src="images/gallery/gal3.png" alt="Workshop" />
              </div>
              <div className="grid-item item-4">
                <img src="images/gallery/gal5.png" alt="Learning" />
              </div>
              <div className="grid-item item-5">
                <img src="images/gallery/gal4.png" alt="Community Classroom" />
              </div>
              <div className="grid-item item-6">
                <img src="images/gallery/gal6.png" alt="Awareness" />
              </div>
              <div className="grid-item item-7">
                <img src="images/gallery/gal7.png" alt="Group Activity" />
              </div>
              <div className="grid-item item-8">
                <img src="images/gallery/gal8.png" alt="Students" />
              </div>
              <div className="grid-item item-9">
                <img src="images/gallery/gal9.png" alt="Empowerment" />
              </div>
              <div className="grid-item item-10">
                <img src="images/gallery/gal10.png" alt="Session" />
              </div>
            </div>
          </div>
          {/* --- Gallery Section Ends Here --- */}

          <section className="text-center px-4 mb-[50px] md:px-8 flex flex-col items-center">
            <h2 className="text-[15px] md:text-2xl max-w-[236px] md:max-w-[450px] lg:max-w-4xl mx-auto text-black mt-16 md:mt-[75px]">
              Join us in our efforts to{" "}
              <span className="text-pink font-bold">#BreakTheTaboo</span> and
              positively impact lives everywhere.
            </h2>
          </section>

          <Insta />
        </main>

        <Footer />
      </div>
    </>
  );
}