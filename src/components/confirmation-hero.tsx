export default function Hero() {
  return (
    <div className="flex flex-col gap-6 items-center md:gap-12">
      <h1 className="text-3xl font-bold text-center w-full max-w-90 md:text-6xl md:max-w-210">
        Congrats,{" "}
        <span className="bg-linear-to-r from-gradient-start via-[hsl(15,90%,82%)] to-white bg-clip-text text-transparent">
          Jonatan Kristoff!
        </span>{" "}
        Your ticket is ready.
      </h1>

      <p className="text-center leading-7 w-full max-w-96.5 md:max-w-120 md:text-2xl">
        We've emailed your ticket to <span className="text-orange-500">jonatan@email.com</span> and will
        send updates in the run up to the event.
      </p>
    </div>
  );
}
