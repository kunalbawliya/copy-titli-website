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
            max-width : 1222px;
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
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .item-1 { grid-area: 1 / 1 / 2 / 3; }
        .item-2 { grid-area: 1 / 3 / 2 / 4; }
        .item-3 { grid-area: 2 / 1 / 3 / 2; }
        .item-4 { grid-area: 3 / 1 / 4 / 2; }
        .item-5 { grid-area: 2 / 2 / 4 / 4; }
        .item-6 { grid-area: 4 / 1 / 5 / 2; }
        .item-7 { grid-area: 4 / 2 / 5 / 3; }
        .item-8 { grid-area: 4 / 3 / 5 / 4; }
        .item-9 { grid-area: 5 / 1 / 6 / 3; }
        .item-10 { grid-area: 5 / 3 / 6 / 4; }

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

      <main className="pt-20">
        {/* --- Gallery Section Starts Here --- */}
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
              <h1 className="text-[64px] font-bold font-inter text-black dark:text-white">The Work, The Progress, The People.</h1>
              <p className="text-[24px] text-gray-600 dark:text-black mt-2 max-w-xl mx-auto">Explore the brief moments that reflect our mission, our community, and the progress we've made together.</p>
          </header>

          {/* Collage Grid Layout */}
          <div className="collage-grid">
              {/* Remember to replace placeholder images with your actual image paths, e.g., '/images/team-photo.jpg' */}
              <div className="grid-item item-1"><img src="https://placehold.co/600x300/3498db/ffffff?text=Officials" alt="Officials" /></div>
              <div className="grid-item item-2"><img src="https://placehold.co/300x300/3498db/ffffff?text=Team" alt="Team" /></div>
              <div className="grid-item item-3"><img src="https://placehold.co/300x300/2ecc71/ffffff?text=Workshop" alt="Workshop" /></div>
              <div className="grid-item item-4"><img src="https://placehold.co/300x300/f1c40f/ffffff?text=Learning" alt="Learning" /></div>
              <div className="grid-item item-5"><img src="https://placehold.co/600x600/9b59b6/ffffff?text=Community+Classroom" alt="Community Classroom" /></div>
              <div className="grid-item item-6"><img src="https://placehold.co/300x300/1abc9c/ffffff?text=Awareness" alt="Awareness" /></div>
              <div className="grid-item item-7"><img src="https://placehold.co/300x300/e67e22/ffffff?text=Group+Activity" alt="Group Activity" /></div>
              <div className="grid-item item-8"><img src="https://placehold.co/300x300/34495e/ffffff?text=Students" alt="Students" /></div>
              <div className="grid-item item-9"><img src="https://placehold.co/600x300/7f8c8d/ffffff?text=Empowerment" alt="Empowerment" /></div>
              <div className="grid-item item-10"><img src="https://placehold.co/300x300/7f8c8d/ffffff?text=Session" alt="Session" /></div>
          </div>
        </div>
        {/* --- Gallery Section Ends Here --- */}

        {/* The Instagram section follows the gallery */}
        <Insta />
      </main>

      <Footer />
    </>
  );
}
