"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InputForm } from "./InputForm";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Assistant = () => {
  const [conversationStarted, setConversationStarted] = useState(false);
  const [conversationInput, setConversationInput] = useState(""); // [1

  //   update the searchQuery state variable whenever the user types in the search input

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConversationInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConversationStarted(true);

    console.log("Input submitted!");
    console.log(conversationInput);

    // reset the search input
    setConversationInput("");
  };

  const handleClear = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConversationStarted(false);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setConversationStarted(true);
  };

  console.log(`conversationInput: ${conversationInput}`);

  // Render the search/upload UI if there's no user input yet
  if (!conversationStarted) {
    return (
      <div className="flex h-full items-center">
        <div className="rounded p-4 flex flex-col w-full">
          <h2 className="text-2xl font-bold mb-4">
            What would you like to know?
          </h2>
          <form onSubmit={handleSubmit}>

            <input
              onChange={handleInput}
              type="text"
              placeholder="Start typing or upload a file..."
              className="mb-4 bg-transparent focus:outline-none rounded text-2xl w-full"
            />
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="assistant">
      <p>Welcome to Wanderlust. Start planning your next journey!</p>
    </div>
  );
};

export default Assistant;
