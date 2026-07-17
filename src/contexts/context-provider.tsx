import { useEffect, useState, type ChangeEvent, type PropsWithChildren } from "react";
import type { FormType, UrlType, UserContextState } from "../types";
import { UserContext } from "./use-context";

const initialFormState: FormType = {
  fullName: "",
  email: "",
  username: "",
};

export default function UserContextProvider({children}: PropsWithChildren) {
  const [userData, setUserData] = useState<FormType>(initialFormState);
  const [previewUrl, setPreviewUrl] = useState<UrlType>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  function handlePreviewUrl(url: UrlType) {
    if (!url) return;
    setPreviewUrl(url);
  }

  const ctxValue: UserContextState = {
    userData,
    previewUrl,
    handleOnChangeUserData: handleOnChange,
    getPreviewUrl: handlePreviewUrl,
  };

  return <UserContext value={ctxValue}>{children}</UserContext>;
}
