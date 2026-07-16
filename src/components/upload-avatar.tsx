import UploadIcon from "../assets/images/icon-upload.svg?react";
import { Info } from "lucide-react";

export default function UploadAvatar() {
  return (
    <div className="flex flex-col gap-4 mt-10 md:mt-13 w-full md:max-w-125 relative">
      <input
        type="file"
        className="sr-only"
        id="avatar-upload"
        accept="image/jpeg,image/png"
      />

      <h2 className="font-bold">Upload Avatar</h2>

      <label
        htmlFor="avatar-upload"
        className="border-dashed w-full h-40 border-2 border-neutral-0/25 rounded-2xl bg-neutral-700/30 flex flex-col items-center justify-center gap-5 p-2"
      >
        <div className="border border-neutral-700 rounded-xl size-12 flex justify-center items-center bg-neutral-700/60">
          <UploadIcon className="w-7 h-auto" />
        </div>
        <p className="text-base text-center">
          Drag and drop or click to upload
        </p>
      </label>

      <div className="flex items-center text-neutral-500 gap-2">
        <Info className="size-4" />
        <small className="text-[0.75rem] text-neutral-500">
          Upload your photo (JPG or PNG, max size: 500kb)
        </small>
      </div>
    </div>
  );
}
