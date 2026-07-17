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
}: InputProps<string>) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={id} className="text-neutral-0 capitalize">
        {label}
      </label>

      {prefix ? (
        <span
          className="pl-3 select-none absolute top-14.5 text-neutral-500 text-base md:text-xl md:top-13.5"
          aria-hidden="true"
        >
          {prefix}
        </span>
      ) : null}

      <input
        type={type}
        id={id}
        className={`p-3 rounded-2xl placeholder:text-base md:placeholder:text-xl text-base md:text-xl text-neutral-300 border-2 border-neutral-0/25 bg-neutral-700/30 focus:outline-neutral-700 focus:outline-offset-4 autofill:shadow-[0_0_0_1000px_white_inset] ${prefix && "pl-5 lowercase"}`}
        name={name}
        onChange={handleOnChange}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}
