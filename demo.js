import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Carousel from "@/components/Carousel";
import { useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BrandList from "@/components/BrandList";

export default function Home() {
  const [ref1, inView1] = useInView({ threshold: 0.8, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 1, triggerOnce: false });
  const [ref3, inView3] = useInView({ threshold: 0.8, triggerOnce: false });

  const [viewed1, setViewed1] = useState(false);
  const [viewed2, setViewed2] = useState(false);
  const [viewed3, setViewed3] = useState(false);

  useEffect(() => {
    if (inView1) {
      setViewed1(true);
    }
  }, [inView1]);
  useEffect(() => {
    if (inView2) {
      setViewed2(true);
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      setViewed3(true);
    }
  }, [inView3]);
  return (
    <div className="font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation</title>
      </Head>
      <div className="relative max-w-[90vw] w-[1336px] m-auto text-[#2F2F2F]">
        <div className="absolute left-[-50px] lg:left-[-200px] top-[-50px] lg:top-[-200px] h-[350px] lg:h-[800px] w-[350px] lg:w-[800px] rounded-[50%] bg-gradient-to-r from-[#FDEDD8] from-0% to-[#FDEDE0] to-100% opacity-30 blur-3xl"></div>
        <div className="absolute right-[-50px] lg:right-[-100px] top-[400px] lg:top-[300px] h-[300px] lg:h-[600px] w-[300px] lg:w-[600px] rounded-[50%] bg-gradient-to-r from-[#efddfe] from-0% to-[#F7ECFE] to-100% opacity-50 blur-3xl"></div>
        <Navbar />
        <div className="relative">
          <div className="text-center text-[36px] lg:text-[64px] font-medium leading-[1.4em] mt-[30px] lg:mt-[70px]">
            Make the switch,
            <br />
            one{" "}
            <span className="font-shadows text-pink relative px-[10px]">
              <img
                className="absolute left-0 top-[5px] lg:top-[15px] scale-145"
                src="/svgs/cupCircle.svg"
              />
              cup
            </span>{" "}
            at a time.
          </div>
          <div className="text-[#2F2F2F] text-center text-[16px] lg:text-[18px] font-light w-auto lg:w-[500px] mt-[30px] lg:mt-[50px] my-[50px] m-auto leading-[1.6em]">
            At Titli, we aim to tackle period poverty by providing sustainable
            menstrual care to underprivileged individuals
          </div>
          <a
            // href="https://tr.ee/2SZEApXBIC"
            // target="_blank"
            href="/blog"
            className="mt-[50px] lg:mt-[70px] cursor-pointer pointer-events-none lg:pointer-events-auto"
          >
            <div className="m-auto relative w-[150px] lg:w-[200px] group">
              <img
                src="/images/cup.png"
                className="w-[100%] m-auto transition-all ease-out duration-200 group-hover:rotate-0 lg:group-hover:rotate-12 "
              />
              <div className="hidden lg:block absolute pointer-events-none left-[20px] top-[80px] font-shadows text-6xl">
                Blog
              </div>
            </div>
          </a>
          <div className="flex flex-col text-center gap-y-[20px] mt-[50px] lg:hidden text-[16px] lg:text-[20px] font-medium gap-[30px]">
            <a
              href="https://tr.ee/vx87XEdgfh"
              target="_blank"
              className="px-[32px] py-[16px] rounded-[16px] text-white transition-all duration-200 ease-in bg-pink hover:bg-dark-pink whitespace-nowrap"
            >
              Join our team
            </a>
            <a
              // href="https://tr.ee/2SZEApXBIC"
              // target="_blank"
              href="/donate"
              className="px-[32px] py-[14px] rounded-[16px] text-pink border-2 border-pink"
            >
              Make a donation
            </a>
          </div>
        </div>
      </div>
      <BrandList />
      <Ticker />
      <div className="max-w-[90vw] w-[1336px] m-auto flex flex-col lg:flex-row gap-x-[150px] gap-y-[30px] my-[50px] lg:my-[100px]">
        <img
          src="/images/cupHug.png"
          className="h-auto lg:h-[20vw] lg:max-h-[400px] object-cover"
        />
        <div className="grid align-middle content-center gap-y-[50px]">
          <div className="font-light text-[16px] lg:text-[18px] leading-[2em] lg:leading-[2em]">
            We believe that{" "}
            <span className="text-pink font-bold">
              menstrual care is a fundamental right for all
            </span>
            , regardless of their{" "}
            <span className="text-pink font-bold">socio-economic status</span>.
            Menstrual care should no longer be a source of shame or discomfort
            but be approached with{" "}
            <span className="text-pink font-bold">
              knowledge, confidence, and sustainability
            </span>
            . Join us in our efforts to{" "}
            <span className="text-pink font-bold">#BreakTheTaboo</span> and
            positively impact the lives everywhere.
          </div>
          <div className="hidden lg:flex text-[16px] lg:text-[20px] font-medium gap-[30px] leading-[1.6em]">
            <a
              href="https://tr.ee/vx87XEdgfh"
              target="_blank"
              className="px-[32px] py-[16px] rounded-[16px] text-white bg-pink cursor-pointer font-semibold transition-all duration-200 ease-out hover:bg-dark-pink whitespace-nowrap"
            >
              Join our team
            </a>
            <a
              // href="https://tr.ee/2SZEApXBIC"
              // target="_blank"
              href="/donate"
              className="px-[32px] py-[14px] rounded-[16px] text-pink border-2 border-pink cursor-pointer font-semibold ease-out duration-200 hover:bg-[#E5D7DD] whitespace-nowrap"
            >
              Make a donation
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-pink  py-[50px] lg:py-[130px] px-[2.5vw] lg:pl-[5vw] lg:pr-[100px] text-white grid justify-end">
          <div className="lg:max-w-[500px] ">
            <div className="font-black text-[32px] lg:text-[56px]">
              Our Vision
            </div>
            <div className="lg:h-[60px] font-semibold text-[20px] lg:text-[24px] mt-[15px] lg:mt-[24px] mb-[30px] lg:mb-[48px]">
              “Make sustainable menstruation products accessible to all”
            </div>
            <div className="font-light text-[16px] lg:text-[18px]">
              At Titli, we envisage a world where menstruation is no longer a
              taboo and sustainable menstrual products are easily accessible to
              all and Titli works tirelessly for the same.
            </div>
          </div>
        </div>
        <div className="bg-[#FAF5FE]  py-[50px] lg:py-[130px] px-[2.5vw] lg:pr-[5vw] lg:pl-[100px] text-pink">
          <div className="lg:max-w-[500px]">
            <div className="font-black text-[32px] lg:text-[56px]">
              Our Mission
            </div>
            <div className="lg:h-[60px] font-semibold text-[20px] lg:text-[24px] mt-[15px] lg:mt-[24px] mb-[30px] lg:mb-[48px]">
              “Break the taboo”
            </div>
            <div className="font-light text-[16px] lg:text-[18px]">
              Create awareness around menstrual hygiene, break generational
              taboos around it and promote sustainable practices through a
              change in menstrual habits.
            </div>
          </div>
        </div>
      </div>
      <div className=" relative max-w-[90vw] w-[1336px] my-[50px] lg:my-[150px] m-auto flex flex-col lg:flex-row gap-[10px] lg:gap-[150px] lg:items-center justify-between">
        <div className="hidden lg:block -z-50 absolute left-[-200px] top-[-400px] h-[1000px] w-[1000px] rounded-[50%] bg-gradient-to-r from-[#efddfe] from-0% to-[#F7ECFE] to-100% opacity-50 blur-3xl"></div>
        <div>
          <div className="font-medium text-[32px] md:text-[42px] lg:text-[56px]">
            What we do <br />
            <span className="text-pink font-normal font-shadows">@ Titli</span>
          </div>
          <ul className="lg:list-disc lg:pl-[30px] font-extralight lg:font-light text-[16px] lg:text-[18px] leading-[2.5em] my-[15px] lg:my-[50px]">
            <li>Education on reproductive health 📚</li>
            <li>Breaking social stigmas 👊</li>
            <li>Provide a hygienic and economic period solution 🩸</li>
            <li>Awareness on sustainable menstruation 🍃</li>
          </ul>
        </div>
        <div className="order-1 lg:order-2 lg:border-2 border-pink rounded-[20px] w-[100%] lg:w-auto">
          <img
            src="/images/groupCups.png"
            className="lg:rounded-[16px] lg:scale-105 w-[100%] lg:w-[30vw] lg:max-w-[500px] object-cover ease-out duration-200 lg:translate-x-[30px] lg:translate-y-[-30px] lg:hover:translate-x-[0px] lg:hover:translate-y-[0px] lg:hover:scale-995"
          />
        </div>
      </div>

      <Stats ref3={ref3} ref1={ref1} viewed1={viewed1} viewed3={viewed3} />
      <div className="max-w-[90vw] w-[1336px] m-auto">
        <div className="font-medium text-[32px] md:text-[42px] lg:text-[56px]">
          Some of our <br />
          <span className="text-pink font-normal font-shadows">
            Recent Work
          </span>
        </div>
      </div>
      <div className="max-w-[90vw] lg:max-w-[95vw] w-[1700px] m-auto">
        <div className="lg:hidden grid grid-cols-2 gap-[20px] my-[30px]">
          <img src="/images/caro4.png" className="w-[100%]" />
          <img src="/images/caro1.png" className="w-[100%]" />
        </div>
        <Carousel />
      </div>
      <a
        href="https://instagram.com/titlifoundation"
        target="_blank"
        className="bg-pink text-[16px] lg:text-[20px] rounded-[16px] text-center font-semibold text-white flex gap-[10px] justify-center items-center py-[16px] w-[90vw] lg:w-[400px] my-[30px] lg:my-[100px] mb-[70px] lg:mb-100px  m-auto cursor-pointer leading-[1.6em]"
      >
        <div>Follow our journey</div>
        <img src="/svgs/instagram-logo.svg" className="" />
      </a>
      <div className="max-w-[90vw] w-[1336px] m-auto lg:my-[150px]">
        <div className="font-medium text-[32px] md:text-[42px] lg:text-[56px]">
          Join the{" "}
          <span className="text-pink font-normal font-shadows">fam</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[150px] lg:items-center lg:justify-between my-[30px] lg:my-[50px]">
          <div className="order-2 lg:order-1 relative w-auto font-light text-[16px] lg:text-[18px] leading-[2em]">
            <div className="hidden lg:block leading-[2.5em] mb-[50px]">
              We’ve got some cool roles open across departments such as{" "}
              <span className="text-pink font-bold">
                Social Media, Content, Groundwork, Public Relations, Marketing,
                Finance
              </span>{" "}
              and more!
            </div>
            <div className="font-semibold mb-[20px]">Help us</div>
            <ul className="list-disc pl-[30px]">
              <li>Raise awareness on reproductive health ⛑️</li>
              <li>Provide a hygienic and economic period solution ✅</li>
              <li>Break social stigmas 💪🏻</li>
            </ul>
            <div className="flex flex-col lg:flex-row text-center text-[16px] lg:text-[20px] font-medium gap-[30px] gap-y-[20px] mt-[30px] lg:mt-[70px] leading-[1.6em]">
              <a
                href="https://tr.ee/vx87XEdgfh"
                target="_blank"
                className="px-[32px] py-[16px] rounded-[16px] text-white bg-pink cursor-pointer transition-all duration-200 ease-out hover:bg-dark-pink whitespace-nowrap"
              >
                Join our team
              </a>
              <a
                // href="https://tr.ee/2SZEApXBIC"
                // target="_blank"
                href="/donate"
                className="px-[32px] py-[14px] rounded-[16px] text-pink border-2 border-pink cursor-pointer ease-out duration-200 hover:bg-[#E5D7DD] whitespace-nowrap"
              >
                Make a donation
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-[100%] lg:w-auto">
            <img
              src="/images/fam.png"
              className="w-[100%] lg:w-[40vw] lg:max-w-[600px] object-cover "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}




// Carousel
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { name: "JP Nagar", src: "/images/caro1.png" },
  { name: "Connaught Place, Delhi", src: "/images/caro2.png" },
  { name: "Indiranagar", src: "/images/caro3.png" },
  { name: "MG Road", src: "/images/caro4.png" },
  { name: "Sector 62", src: "/images/caro5.png" },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeLeft = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const swipeRight = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getIndex = (offset) =>
    (activeIndex + offset + images.length) % images.length;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section className="relative flex flex-col items-center my-[80px] overflow-hidden px-2 sm:px-6 md:px-12">
      <div className="relative w-full max-w-[1200px] h-[420px] flex items-center justify-center">
        {/* Arrows */}
        <button
          onClick={swipeRight}
          className="absolute left-[10px] top-1/2 -translate-y-1/2 z-30 text-xl sm:text-3xl bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          &#8249;
        </button>

        <button
          onClick={swipeLeft}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 z-30 text-xl sm:text-3xl bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          &#8250;
        </button>

        {/* Left Card */}
        <div className="hidden lg:block absolute top-15 left-[calc(50%-400px)] z-5 scale-[1.2] opacity-70">
          <Card data={images[getIndex(-1)]} small />
        </div>

        {/* Center Card with Animation */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="z-20 absolute"
          >
            <Card data={images[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Right Card */}
        <div className="hidden lg:block absolute top-15 left-[calc(50%+130px)] z-5 scale-[1.2] opacity-70">
          <Card data={images[getIndex(1)]} small />
        </div>
      </div>

      <div className="text-center mt-[30px] text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </section>
  );
}

function Card({ data, small = false }) {
  const size = small
    ? "w-[220px] sm:w-[260px] md:w-[320px] h-[160px] sm:h-[200px] md:h-[260px]"
    : "w-[280px] sm:w-[360px] md:w-[420px] h-[200px] sm:h-[270px] md:h-[320px] scale-105 shadow-2xl";

  return (
    <div className={`rounded-[8px] overflow-hidden bg-[#fdc0d8] ${size} transition-all duration-300`}>
      <img src={data.src} alt={data.name} className="w-full h-[90%] object-cover" />
      <div className="text-left font-serif text-black text-sm py-1 px-4">{data.name}</div>
    </div>
  );
}
