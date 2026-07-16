import { useState, useEffect, type ChangeEvent } from "react";
import UploadIcon from "../assets/images/icon-upload.svg?react";
import { Info } from "lucide-react";
import { normalizeFile } from "../utils/previewImage";

type FileSizeStatus = "error" | "success" | "unknown";

const MAX_FILE_SIZE = 500 * 1024 + 10240;

export default function UploadAvatar() {
  const [file, setFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState<FileSizeStatus>("unknown");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;

    e.target.value = "";

    if (!selected) return;

    try {
      const normalized = await normalizeFile(selected);

      if (normalized.size > MAX_FILE_SIZE) {
        setFile(null);
        setPreviewUrl(null);
        setFileSize("error");
        return;
      }

      const url = URL.createObjectURL(normalized);

      setFile(normalized);
      setPreviewUrl(url);
      setFileSize("success");
    } catch {
      setFile(null);
      setPreviewUrl(null);
      setFileSize("error");
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-10 md:mt-13 w-full md:max-w-125 relative">
      <input
        type="file"
        className="sr-only"
        id="avatar-upload"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleOnChange}
      />

      <h2 className="font-bold">Upload Avatar</h2>

      <label
        htmlFor="avatar-upload"
        className="border-dashed w-full h-40 border-2 border-neutral-0/25 rounded-2xl bg-neutral-700/30 flex flex-col items-center justify-center gap-5 p-2"
      >
        <div className="border border-neutral-700 rounded-xl size-12 flex justify-center items-center bg-neutral-700/60">
          {file && previewUrl ? (
            <img
              src={previewUrl}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <UploadIcon className="w-7 h-auto" />
          )}
        </div>
        <p className={`text-base text-center`}>
          Drag and drop or click to upload
        </p>
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
