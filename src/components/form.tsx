import { useState, type ChangeEvent } from "react";
import { inputFields } from "../data/inputFields";
import Input from "./Input";

type FormType = {
  fullName: string;
  email: string;
  username: string;
};

const initialFormState: FormType = {
  fullName: "",
  email: "",
  username: "",
};

export default function Form() {
  const [userData, setUserData] = useState<FormType>(initialFormState);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className="flex flex-col w-full md:max-w-125 mt-7 md:mt-8 gap-6 mb-40">
      {inputFields.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          handleOnChange={handleOnChange}
          value={userData[input.name as keyof FormType] ?? ""}
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
