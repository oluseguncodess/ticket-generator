import { Outlet } from "react-router-dom";
import Linetop from "../assets/images/pattern-squiggly-line-top.svg?react";
import PatternLines from "../assets/images/pattern-lines.svg";
import HeroLogo from "../assets/images/logo-full.svg?react";

export default function RootLayout() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HeroLogo className="w-43 h-auto md:w-48 mx-auto mt-9 mb-5" />
      <Linetop className="absolute w-30 h-auto right-0 top-6 md:w-40 lg:w-100 lg:top-13 z-0 " />

      <img src={PatternLines} alt="" className="absolute z-0 top-0 max-md:h-125" />

      <picture>
        <source media="(max-width: 375px)" srcSet="/background-mobile.png" />
        <img
          src="background-desktop.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </picture>

      <picture>
        <source
          media="(max-width: 375px)"
          srcSet="/pattern-squiggly-line-bottom-mobile.svg"
        />
        <source
          media="(min-width: 376px)"
          srcSet="/pattern-squiggly-line-bottom-desktop.svg"
        />
        <img
          src="/pattern-squiggly-line-bottom-desktop.svg"
          alt=""
          className="absolute bottom-0 z-0 -left-30"
        />
      </picture>

      <div className="flex flex-col min-h-screen w-full px-4 pt-5 items-center z-10">
        <Outlet />
      </div>
    </section>
  );
}
