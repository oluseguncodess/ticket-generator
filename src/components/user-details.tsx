import AvaterIcon from "../assets/images/image-avatar.jpg";
import GithubLogo from "../assets/images/icon-github.svg?react";
import { useUserContext } from "../contexts/use-context";

export default function UserDetails() {
  const { userData, previewUrl } = useUserContext();
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-[5px] size-11 md:size-17 flex justify-center items-center">
        <img
          src={previewUrl ?? AvaterIcon}
          alt=""
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="flex flex-col md:gap-1">
        <h2 className="text-[19px] md:text-3xl md:tracking-tight capitalize">
          {userData.fullName ||  'Jonatan Kristoff'}
        </h2>
        <div className="flex items-center md:gap-2">
          <GithubLogo className="w-6" />
          <small className="lowercase text-sm md:text-xl">
            @{userData.username || 'jonatankristoff'}
          </small>
        </div>
      </div>
    </div>
  );
}
