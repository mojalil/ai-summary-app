"use client";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";

const Assistant = () => {
  const [conversationStarted, setConversationStarted] = useState(false);
  const [conversationInput, setConversationInput] = useState(""); // [1

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle the files here
    console.log(acceptedFiles);
    // Perform actions such as setting state, uploading files, etc.
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
  });

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
  if (!true) {
    return (
      <div
        {...getRootProps()}
        className="flex h-full items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full p-4 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            What would you like to know?
          </h2>
          {/* This input is hidden visually but remains accessible, it's needed for the file drop to work */}
          <input {...getInputProps()} className="hidden" />
          <input
            value={conversationInput}
            onChange={handleInput}
            type="text"
            placeholder="Start typing or upload a file..."
            className="mb-4 bg-transparent focus:outline-none rounded text-2xl w-full"
          />
        </form>
      </div>
    );
  }

  return (
    <div className="assistant">
      <AssistantMessage  message="Test Message" isLast/>
      <UserMessage message="What were nike's sales like last month?"/>
      <AssistantMessage  message="Test Message" isLast/>
        <UserMessage message="What were nike's sales like last month?"/>
    </div>
  );
};

export default Assistant;
