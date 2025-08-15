/*
================================================================================
| pages/gallery.js (or whatever you want to name this page)                    |
|                                                                              |
| The gallery code has been merged directly into this file. There is no longer |
| a separate Gallery.js component.                                             |
================================================================================
*/

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Insta from "@/components/Insta"; // Imported Insta component

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

      {/* This style block contains the CSS for the collage grid. */}
      <style jsx>{`
        .collage-grid {
          max-width: 1222px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          /* The rows will now divide the total height equally */
          grid-template-rows: repeat(5, 1fr);
          gap: 50px;
          /* Updated dimensions as per your request */
          max-width: 1222px;
          height: 2182px;
          margin: auto;
        }
        .grid-item {
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

        @media (max-width: 768px) {
          .collage-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            /* Reset height for mobile to be automatic */
            height: auto;
          }
          .grid-item {
            grid-area: auto !important;
          }
        }
      `}</style>

      <Navbar />

      <main className="pt-[226px]">
        {/* --- Gallery Section Starts Here --- */}
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-[105px]">
            <h1 className="text-[64px] font-bold font-inter text-black">
              The Work. The Progress. The People.
            </h1>
            <p className="text-[24px] text-gray-600 dark:text-black mt-[35px] max-w-xl mx-auto">
              Explore the brief moments that reflect our mission, our community,
              and the progress we've made together.
            </p>
          </header>

          {/* Collage Grid Layout */}
          <div className="collage-grid">
            {/* Remember to replace placeholder images with your actual image paths, e.g., '/images/team-photo.jpg' */}
            <div className="grid-item item-1">
              <img
                src="images/gallery/gal1.png"
                alt="Officials"
              />
            </div>
            <div className="grid-item item-2">
              <img
                src="images/gallery/gal2.png"
                alt="Team"
              />
            </div>
            <div className="grid-item item-3">
              <img
                src="images/gallery/gal3.png"
                alt="Workshop"
              />
            </div>
            <div className="grid-item item-4">
              <img
                src="images/gallery/gal5.png"
                alt="Learning"
              />
            </div>
            <div className="grid-item item-5">
              <img
                src="images/gallery/gal4.png"
                alt="Community Classroom"
              />
            </div>
            <div className="grid-item item-6">
              <img
                src="images/gallery/gal6.png"
                alt="Awareness"
              />
            </div>
            <div className="grid-item item-7">
              <img
                src="images/gallery/gal7.png"
                alt="Group Activity"
              />
            </div>
            <div className="grid-item item-8">
              <img
                src="images/gallery/gal8.png"
                alt="Students"
              />
            </div>
            <div className="grid-item item-9">
              <img
                src="images/gallery/gal9.png"
                alt="Empowerment"
              />
            </div>
            <div className="grid-item item-10">
              <img
                src="images/gallery/gal10.png"
                alt="Session"
              />
            </div>
          </div>
        </div>
        {/* --- Gallery Section Ends Here --- */}
        <div>
          <p className="text-[24px] text-black mt-[75px] mb-[22px] max-w-[840px] mx-auto">
            Join us in our efforts to{" "}
          <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
          positively impact the lives everywhere.
          </p>
        </div>
        {/* The Instagram section follows the gallery */}
        <Insta />
      </main>

      <Footer />
    </>
  );
}
