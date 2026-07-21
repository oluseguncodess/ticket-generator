import ticketAsset from "../assets/images/pattern-ticket.svg"; // Import as a standard file path
import ConferenceDetails from "./conference-details";
import UserDetails from "./user-details";

export default function Ticket() {
  return (
    <div className="relative w-full max-w-150 aspect-600/280 rounded-xl mt-12 md:mt-20 md:mb-60">
      <img
        src={ticketAsset}
        alt="Ticket Background"
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
      />

      <div className="relative z-10 h-full p-4 flex md:px-6 md:py-8 justify-between">
        <div className="flex flex-col justify-between">
          <ConferenceDetails />
          <UserDetails />
        </div>
        <span className="self-center rotate-90 text-neutral-500 pb-6 md:text-3xl">
          #01609
        </span>
      </div>
    </div>
  );
}
