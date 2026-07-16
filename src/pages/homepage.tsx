import type { PropsWithChildren } from "react";

export default function Homepage({ children }: PropsWithChildren) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <picture>
        <source media="(max-width: 375px)" srcSet="/background-mobile.png" />
        <img
          src="background-desktop.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </picture>

      <div className="flex flex-col min-h-screen w-full">{children}</div>
    </section>
  );
}
