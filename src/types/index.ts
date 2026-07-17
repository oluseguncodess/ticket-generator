import type { ChangeEvent } from "react";

export type FormType = {
  fullName: string;
  email: string;
  username: string;
};

export type UrlType = string | null;

export type FileSizeStatus = "error" | "success" | "unknown";

export type FileType = File | null;

export type UserContextState = {
  userData: FormType;
  previewUrl: UrlType;
  file: FileType;
  fileSize: FileSizeStatus;
  handleFileByOnchange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: () => void;
  handleOnChangeUserData: (e: ChangeEvent<HTMLInputElement>) => void;
};
