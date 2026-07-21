import { inputFields } from "../data/inputFields";
import type { FormType } from "../types";
import Input from "./Input";
import PatternCircle from "../assets/images/pattern-circle.svg?react";
import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { hasSpecialChar, isValidEmail } from "../utils/validation";
import { useUserContext } from "../contexts/use-context";
import { useNavigate } from "react-router-dom";

const initialFormState: FormType = {
  fullName: "",
  email: "",
  username: "",
};

type ErrorType = "error" | null;

interface ErrorState<T> {
  email: T;
  username: T;
}

const initialErrorState = {
  email: null,
  username: null,
};

export default function Form() {
  const { storeUserData } = useUserContext();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<FormType>(initialFormState);
  const [error, setError] = useState<ErrorState<ErrorType>>(initialErrorState);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleGenerateTicket(e: SyntheticEvent) {
    e.preventDefault();

    const fullName = userDetails.fullName.trim();
    const email = userDetails.email.trim();
    const username = userDetails.username.trim();

    if (fullName === "") return;

    const nextErrors: ErrorState<ErrorType> = {
      email: !isValidEmail(email) ? "error" : null,
      username:
        hasSpecialChar(username) || username.length < 5 ? "error" : null,
    };

    setError(nextErrors);

    if (nextErrors.email || nextErrors.username) return;

    storeUserData({ fullName, email, username });
    navigate("/confirmation");
  }

  return (
    <form
      className="flex flex-col w-full md:max-w-125 mt-7 md:mt-8 gap-6 mb-30 z-10 relative"
      onSubmit={handleGenerateTicket}
      noValidate
    >
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
          error={
            input.name === "email" || input.name === "username"
              ? (error[input.name as keyof ErrorState<ErrorType>] as ErrorType)
              : null
          }
        />
      ))}
      <button
        type="submit"
        className="bg-orange-500 p-4 capitalize rounded-2xl font-bold text-[#090832]"
      >
        Generate my ticket
      </button>
    </form>
  );
}
