import AvaterIcon from "../assets/images/image-avatar.jpg";
import GithubLogo from "../assets/images/icon-github.svg?react";

export default function UserDetails() {
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-[5px] size-11 md:size-17 flex justify-center items-center">
        <img
          src={AvaterIcon}
          alt=""
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="flex flex-col md:gap-1">
        <h2 className="text-[19px] md:text-3xl md:tracking-tight">Jonatan Kristof</h2>
        <div className="flex items-center md:gap-2">
          <GithubLogo className="w-6" />
          <small className="lowercase text-sm md:text-xl">@jonatankristof0101</small>
        </div>
      </div>
    </div>
  );
}
