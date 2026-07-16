import HeroLogo from "../assets/images/logo-full.svg?react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center ">
      <HeroLogo className="w-43 h-auto mt-10 mb-8 md:w-48" />
      <div className="w-full max-w-100 text-center flex flex-col gap-5 md:gap-7 md:max-w-180 lg:max-w-220 p-3">
        <h1 className="capitalize text-3xl font-bold md:text-5xl lg:text-6xl">
          Your journey to coding conf 2026 starts here!
        </h1>
        <p>Secure your spot at next's year biggest coding conference.</p>
      </div>
    </section>
  );
}
