export default function PrimaryButton({ href, text, target }) {
  return (
    <a
      href={href}
      target={target}
      className="block lg:inline w-[100%] lg:w-auto transition-all duration-200 ease-out bg-pink group-hover:bg-dark-pink text-white text-[16px] lg:text-lg font-semibold py-[16px] lg:py-4 px-8 rounded-sm cursor-pointer leading-[1.6em]"
    >
      {text}
    </a>
  );
}

export function SecondaryButton({ href, text, target }) {
  return (
    <a
      href={href}
      target={target}
      className="block lg:inline w-[100%] lg:w-auto text-center transition-all duration-200 ease-out border-2 border-pink bg-white group-hover:bg-pink text-pink group-hover:text-white text-[16px] lg:text-lg font-semibold py-[16px] lg:py-4 px-8 rounded-sm cursor-pointer leading-[1.6em]"
    >
      {text}
    </a>
  );
}
