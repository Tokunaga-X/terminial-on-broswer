import React, { useEffect, useState } from "react";
import { SiReact, SiTailwindcss } from "react-icons/si";

import { RiNextjsLine } from "react-icons/ri";

const techs = [
  { Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
  { Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
  { Icon: RiNextjsLine, duration: "duration-1000" },
];

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Why?</h1>
      <p className="text-lg mb-3 animate-reveal-0.5">This is fun.</p>
      <h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
        Tech stack
      </h1>
      <p className="text-lg animate-reveal-0.7">
        This site is pure written with React(NEXT) and Tailwindcss only.
      </p>
      <div className="flex gap-5 text-4xl">
        {techs.map(({ Icon, color, duration }, index) => {
          return (
            <Icon
              key={index}
              className={`${color} ${
                animate ? "scale-100" : "scale-0"
              } transform transition-all ${duration}`}
            />
          );
        })}
      </div>
    </div>
  );
}
