import React from "react";

const FoundersMessage = () => {
  return (
    <section className=" mt-16 px-4 mb-[107px] md:px-10 lg:px-20">
      <div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Founder Image */}
        <div className="flex justify-center md:w-1/2 flex-shrink-0">
          <img
            src="/images/team/Alankrita-Pandey.png"
            alt="Alankrita Pandey - Founder Titli Foundation"
            // The md:h-[480px] class makes the image taller on tablets
            className="w-[247px] h-[279px] rounded-[20px] object-cover shadow-lg md:w-[320px] md:h-[480px] lg:w-[400px] lg:h-[500px]"
          />
        </div>

        {/* Message Content */}
        <div className="w-full flex flex-col items-center md:items-start p-4">
          {/* Name */}
          <h3 
            className="text-center md:text-left text-[24px] lg:text-[36px] font-semibold text-black mb-1"
          >
            Alankrita Pandey
          </h3>

          {/* Title */}
          <p 
            className="text-center md:text-left text-[15px] lg:text-[24px] text-black font-inter mt-1"
          >
            Founder, Titli Foundation
          </p>

          {/* Message Paragraph */}
          <p
            className="text-[13px] md:text-[16px] lg:text-lg max-w-[320px] md:max-w-full text-center md:text-left mx-auto md:mx-0 text-black font-inter leading-relaxed mt-4 md:mt-6"
          >
            What started out as a will to help a few in need, turned out to be
            the biggest responsibility of my life. Sometimes I look back and
            wonder, it really did take just one step to change the lives of
            many. We often think about bringing the change, revolutionizing society,
            but then all of it just comes down to – "I can't change the world."
            The fact is, we don't need to change the world, we need to change
            ourselves.
            <br />
            Just initiating a conversation around menstruation speaks volumes of
            how willing you are to bring a change; and that’s what Titli is all
            about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;