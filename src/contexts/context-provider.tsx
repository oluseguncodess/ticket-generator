import {
  useEffect,
  useState,
  type ChangeEvent,
  type PropsWithChildren,
} from "react";
import type {
  FileSizeStatus,
  FormType,
  UrlType,
  UserContextState,
} from "../types";
import { UserContext } from "./use-context";
import { normalizeFile } from "../utils/previewImage";

const initialFormState: FormType = {
  fullName: "",
  email: "",
  username: "",
};

const MAX_FILE_SIZE = 500 * 1024 + 10240;

export default function UserContextProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<FormType>(initialFormState);
  const [previewUrl, setPreviewUrl] = useState<UrlType>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState<FileSizeStatus>("unknown");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

 function storeUserData(data: FormType) {
  setUserData(data)
 }

  async function handleFileOnChange(e: ChangeEvent<HTMLInputElement>) {
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

  function handleRemoveFile() {
    setFile(null);
    setPreviewUrl(null);
  }

  const ctxValue: UserContextState = {
    userData,
    previewUrl,
    file,
    fileSize,
    handleFileByOnchange: handleFileOnChange,
    handleRemoveFile,
    storeUserData
  };

  return <UserContext value={ctxValue}>{children}</UserContext>;
}
