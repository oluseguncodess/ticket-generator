import { useUserContext } from "../contexts/use-context";
import { inputFields } from "../data/inputFields";
import type { FormType } from "../types";
import Input from "./Input";

export default function Form() {
const {userData, handleOnChangeUserData} = useUserContext()  
  return (
    <form className="flex flex-col w-full md:max-w-125 mt-7 md:mt-8 gap-6 mb-40">
      {inputFields.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          handleOnChange={handleOnChangeUserData}
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
