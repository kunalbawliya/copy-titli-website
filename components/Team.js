import Image from 'next/image';

const teamMembers = [
  { name: 'Alice Doe', title: 'Founder', image: '/images/team/alice.jpg' },
  { name: 'John Smith', title: 'Operations Head', image: '/images/team/john.jpg' },
  { name: 'Sara Lee', title: 'Program Manager', image: '/images/team/sara.jpg' },
  // Add more members as needed
];

export default function Team() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-[64px] md:text-4xl font-inter font-semibold">Meet our beautiful team</h2>
        <p className="text-black text-[20px] font-inter mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sem nulla pellentesque scelerisque aliquam.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Blur overlays */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll whitespace-nowrap gap-20 px-4">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="w-[345px] flex-shrink-0 bg-white rounded-[10px] text-center pb-4"
            >
              <div className="w-[345px] h-[400px] bg-black rounded-[10px] overflow-hidden flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={345}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-left font-medium font-inter text-[32px] mt-4">{member.name}</h3>
              <p className="text-left text-[20px] font-normal font-inter  text-black">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
