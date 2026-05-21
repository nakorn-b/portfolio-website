import React from "react";

export const FlipLinks = () => {
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <FlipLink href="#">Email</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/nakornb/">Linkedin</FlipLink>
      <FlipLink href="https://github.com/nakorn-b">Github</FlipLink>
      <FlipLink href="https://www.instagram.com/n.nxem/">Instagram</FlipLink>
    </div>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      href={href}
      className="group text-white relative block overflow-hidden whitespace-nowrap text-4xl font-bold uppercase sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter tactile-press"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-500 ease-[0.32,0.72,0,1] group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex text-primary">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-500 ease-[0.32,0.72,0,1] group-hover:translate-y-0 italic"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};
