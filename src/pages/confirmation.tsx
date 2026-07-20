import Hero from "../components/confirmation-hero";
import Ticket from "../components/confirmation-ticket";

export default function Confirmation() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Ticket/>
    </div>
  );
}
