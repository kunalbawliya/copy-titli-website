// 1. Removed the 'next/image' import since it's no longer needed.

const teamMembers = [
  { name: 'Aditi Yadav', title: 'Supervisor - Human Resource', image: '/images/team/Aditi.png' },
  { name: 'Akrisht', title: 'Supervisor - Human Resource', image: '/images/team/Akrisht.png' },
  { name: 'Krusha Shah', title: 'Supervisor - Groundwork', image: '/images/team/Krusha-Shah.png' },
  { name: 'Shiksha Verma', title: 'Supervisor - Social Media', image: '/images/team/Shiksha-Verma.jpg' },
  { name: 'Ayuushi Barsaley', title: 'Head - Content Writer', image: '/images/team/head-content-writer.jpg' },
  { name: 'Meenakshi Jain', title: 'Head - Human Resource', image: '/images/team/Meenakshi-Jain.jpg' },
  { name: 'Yasho', title: 'Head - Human Resource', image: '/images/team/Meenakshi-Jain.jpg' },
  { name: 'Samiksha Jayashankar', title: 'Head - Groundwork', image: '/images/team/Samiksha-Jayashankar.jpg' },
  { name: 'Vaani Garg', title: 'Head - Public Relation', image: '/images/team/Vaani-Garg.png' },
  { name: 'Aliza Khan', title: 'Head - Social Media', image: '/images/team/Aliza-Khan.png' },
  { name: 'Akanksha Pathak', title: 'Trustee.', image: '/images/team/Akanksha.png' },
  // Add more members as needed
];

export default function Team() {
  const animationDuration = `${teamMembers.length * 2}s`;

  return (
    <section className="mt-[90px] mb-[107px] bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-[64px] md:text-4xl font-inter font-semibold">Meet our beautiful team</h2>
        <p className="text-black text-[20px] font-inter mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sem nulla pellentesque scelerisque aliquam.
        </p>
      </div>

      <div
        className="group w-full overflow-hidden relative"
        style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
      >
        <div 
          className="flex gap-20 px-4 whitespace-nowrap group-hover:[animation-play-state:paused]"
          style={{
            width: "max-content",
            animation: `scroll-left ${animationDuration} linear infinite`,
          }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="w-[345px] flex-shrink-0 bg-white rounded-[10px] text-center pb-4"
            >
              <div className="w-[345px] h-[400px] bg-black rounded-[10px] overflow-hidden flex items-center justify-center">
                {/* 2. Replaced the <Image> component with a standard <img> tag, just like in your BrandList. */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-left font-medium font-inter text-[32px] mt-4">{member.name}</h3>
              <p className="text-left text-[20px] font-normal font-inter text-black">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}