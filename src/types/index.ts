import type { ChangeEvent } from "react";

export type FormType = {
  fullName: string;
  email: string;
  username: string;
};

export type UrlType = string | null

export type UserContextState = {
    userData: FormType;
    previewUrl: UrlType;
    handleOnChangeUserData: (e: ChangeEvent<HTMLInputElement>) => void;
    getPreviewUrl: (url: UrlType) => void
}

