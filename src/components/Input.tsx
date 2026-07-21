import { Info } from "lucide-react";
import type { ChangeEvent } from "react";

interface InputProps<T> {
  label: T;
  type: T;
  id: T;
  name: T;
  value: T;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: T;
  prefix?: T;
  error?: "error" | null;
}

export default function Input({
  label,
  type,
  id,
  name,
  value,
  handleOnChange,
  prefix,
  placeholder,
  error = null,
}: InputProps<string>) {
  const errorId = `${id}-error`;

  function getErrorMessages(name: string) {
    if (name === "email") return `Please enter a valid email address.`;
    if (name === "username") return "Username must be at least 5 characters";
    return null;
  }

  const message = error ? getErrorMessages(name) : null;

  const inputClassName = [
  "p-3 rounded-2xl placeholder:text-base md:placeholder:text-xl text-base md:text-xl text-neutral-300 bg-neutral-700/30 autofill:shadow-[0_0_0_1000px_white_inset] border-2",
  prefix ? "pl-5 lowercase" : "",
  error
    ? "border-red-500 focus:border-red-600"
    : "border-neutral-0/25 focus:outline-neutral-700 focus:outline-offset-4",
]
  .filter(Boolean)
  .join(" ");

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={id} className="text-neutral-0 capitalize">
        {label}
      </label>

      {prefix ? (
        <span
          className="pl-3 select-none absolute top-13.5 text-neutral-500 text-base md:text-xl md:top-13.5"
          aria-hidden="true"
        >
          {prefix}
        </span>
      ) : null}

      <div className="flex flex-col gap-2">
        <input
          type={type}
          id={id}
          className={inputClassName}
          name={name}
          onChange={handleOnChange}
          value={value}
          aria-label={label}
          placeholder={placeholder}
          autoComplete="off"
        />

        {message && (
          <p
            id={errorId}
            className="mt-1 text-sm text-red-600 flex items-center gap-2"
          >
            <Info className="w-4" />
            <span>{message}</span>
          </p>
        )}
      </div>
    </div>
  );
}
