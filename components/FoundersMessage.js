import React from 'react';

const FoundersMessage = () => {
  return (
    <section className="bg-[#ffffff] mt-16 px-4 mb-[107px] md:px-10 lg:px-20">
      {/* This container is a column on mobile (flex-col) and becomes a row on medium screens (md:flex-row).
        'items-center' centers the content for both mobile and desktop layouts.
      */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Founder Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/images/team/Alankrita-Pandey.png"
            alt="Alankrita Pandey - Founder Titli Foundation"
            // MOBILE: Specific width and height as requested.
            // DESKTOP (md:): Reverts to the original, larger sizing.
            className="w-[247px] h-[279px] rounded-[20px] object-cover shadow-lg md:w-[400px] md:h-[500px]"
          />
        </div>

        {/* Message Content */}
        {/*
          The order of elements below (Name -> Title -> Message) is set for the mobile layout.
          The alignment classes handle the switch from centered (mobile) to left-aligned (desktop).
        */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* Name */}
          <h3
            // MOBILE: Centered, 24px.
            // DESKTOP (md:): Reverts to the original 36px size and margin.
            className="text-[24px] font-semibold text-black md:text-[36px] md:mb-1"
          >
            Alankrita Pandey
          </h3>

          {/* Title */}
          <p
            // MOBILE: Centered, 15px.
            // DESKTOP (md:): Reverts to the original 24px size.
            className="text-[15px] text-black font-inter mt-1 md:text-[24px] md:mt-0"
          >
            Founder, Titli Foundation
          </p>

          {/* Message Paragraph */}
          <p
            // MOBILE: Left-aligned, 14px.
            // DESKTOP (md:): Reverts to the original text size and margins.
            className="text-left text-[14px] text-black font-inter leading-relaxed mt-4 md:text-lg md:mt-6"
          >
            What started out as a will to help a few in need, turned out to be
            the biggest responsibility of my life. Sometimes I look back and
            wonder, it really did take just one step to change the lives of
            many.
            <br />
            
            We often think about bringing the change, revolutionizing society,
            but then all of it just comes down to – "I can't change the
            world." The fact is, we don't need to change the world, we need to
            change ourselves.
            <br />
            
            Just initiating a conversation around menstruation speaks volumes
            of how willing you are to bring a change; and that’s what Titli is
            all about.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FoundersMessage;