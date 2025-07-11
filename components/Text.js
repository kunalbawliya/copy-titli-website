export function Heading({ children }) {
  return (
    <div className="text-[32px] lg:text-[56px] font-[900] mb-[30px]">
      {children}
    </div>
  );
}

export function Subheading({ children }) {
  return (
    <div className="text-[20px] lg:text-[24px] font-[600] mb-[30px]">
      {children}
    </div>
  );
}

export function Paragraph({ children }) {
  return (
    <div className="text-[16px] lg:text-[18px] font-[300] mb-[30px]">
      {children}
    </div>
  );
}
