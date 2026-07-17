import { Outlet } from "react-router-dom";

export default function RootLayout() {
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

      <div className="flex flex-col min-h-screen w-full px-4 pt-5 items-center">
        <Outlet />
      </div>
    </section>
  );
}
