import Logo from "../assets/images/logo-full.svg?react";

export default function ConferenceDetails() {
  return (
    <div className="flex flex-col gap-2">
      <Logo className="w-40 h-auto md:w-75" />
      <small className="ml-10 text-sm md:text-base">Jan 31, 2026 / Austin, TX</small>
    </div>
  );
}
 