import { inputFields } from "../data/inputFields";
import type { FormType } from "../types";
import Input from "./Input";
import PatternCircle from "../assets/images/pattern-circle.svg?react";
import { useState, type ChangeEvent } from "react";

const initialFormState: FormType = {
  fullName: "",
  email: "",
  username: "",
};

export default function Form() {
  const [userDetails, setUserDetails] = useState<FormType>(initialFormState);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className="flex flex-col w-full md:max-w-125 mt-7 md:mt-8 gap-6 mb-30 z-10 relative">
      <PatternCircle className="absolute w-30 -right-15 top-15 md:w-55 md:-top-8 md:-right-50" />
      {inputFields.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          handleOnChange={handleOnChange}
          value={userDetails[input.name as keyof FormType] ?? ""}
          prefix={input.name === "username" ? "@" : ""}
          placeholder={input.placeholder}
        />
      ))}
      <button className="bg-orange-500 p-4 capitalize rounded-2xl font-bold text-[#090832]">
        Generate my ticket
      </button>
    </form>
  );
}
