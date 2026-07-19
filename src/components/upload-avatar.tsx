import UploadIcon from "../assets/images/icon-upload.svg?react";
import { Info } from "lucide-react";
import { useUserContext } from "../contexts/use-context";

export default function UploadAvatar() {
  const { file, fileSize, previewUrl, handleFileByOnchange, handleRemoveFile } =
    useUserContext();

  const buttonCssStyles = `py-1 px-2 flex justify-center items-center bg-neutral-700/50 text-neutral-300 rounded-[5px] text-[0.8rem] z-10`;

  return (
    <div className="flex flex-col gap-4 mt-10 md:mt-13 w-full md:max-w-125 relative">
      <input
        type="file"
        className="sr-only"
        id="avatar-upload"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileByOnchange}
      />

      <h2 className="font-bold">Upload Avatar</h2>

      <label
        htmlFor="avatar-upload"
        className="border-dashed w-full h-40 border-2 border-neutral-0/25 rounded-2xl bg-neutral-700/30 flex flex-col items-center justify-center gap-5 p-2"
      >
        <div className="border border-neutral-500 rounded-xl size-12 md:size-15 flex justify-center items-center bg-neutral-700/60">
          {file && previewUrl ? (
            <img
              src={previewUrl}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <UploadIcon className="w-7 h-auto md:w-8" />
          )}
        </div>
        {!file && !previewUrl ? (
          <p className={`text-base text-center`}>
            Drag and drop or click to upload
          </p>
        ) : (
          <div className="flex items-center gap-4">
            <button
              className={`${buttonCssStyles} underline cursor-pointer`}
              onClick={handleRemoveFile}
            >
              Remove image
            </button>
            <div className={`${buttonCssStyles}`}>
              <label htmlFor="change-image" className="cursor-pointer">
                Change image
              </label>
              <input
                type="file"
                className="sr-only"
                onChange={handleFileByOnchange}
                id="change-image"
                accept="image/jpeg,image/png,image/webp"
              />
            </div>
          </div>
        )}
      </label>

      <div className="flex items-center gap-2">
        <Info
          className={`size-4 ${fileSize === "error" ? "text-red-500" : "text-neutral-500"}`}
        />
        <small
          className={`text-[0.75rem] ${fileSize === "error" ? "text-red-500" : "text-neutral-500"}`}
        >
          {fileSize === "error"
            ? "File too large. Please upload a photo under 500KB."
            : "Upload your photo (JPG or PNG, max size: 500kb)"}
        </small>
      </div>
    </div>
  );
}
