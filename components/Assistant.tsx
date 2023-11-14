"use client";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";
import UserInput from "./UserInput";

type Message = {
  text: string;
  author: "user" | "assistant";
};

const Assistant = () => {
  const [conversationInput, setConversationInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);

  const handleUpdateConversation = (message: string, author: string) => {
    setConversation((prev) => [...prev, { text: message, author: author }]);
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle the files here
    console.log(acceptedFiles);
    // Perform actions such as setting state, uploading files, etc.
    // Assuming you only handle one file at a time
    const file = acceptedFiles[0];

    // Add file upload message to the conversation
    setConversation((prevConversation) => [
      ...prevConversation,
      { text: `Uploaded file: ${file.name}`, author: "assistant" },
    ]);
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
    setConversation((prev) => [
      ...prev,
      { text: conversationInput, author: "user" },
    ]);

    // Simulate an assistant's response
    setTimeout(() => {
      setConversation((prevConversation) => [
        ...prevConversation,
        {
          text: "That's a great question! Here's what I found...",
          author: "assistant",
        },
      ]);
    }, 1000);

    // reset the search input
    setConversationInput("");
  };

  console.log(`conversationInput: ${conversationInput}`);

  // Render the search/upload UI if there's no user input yet
  if (conversation.length === 0) {
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
            className="mb-4 bg-transparent focus:outline-none rounded text-2xl w-full font-semibold"
          />
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" overflow-auto">
        {conversation.map((message, index) => {
          return message.author === "user" ? (
            <UserMessage
              key={index}
              message={message.text}
              isLast={index === conversation.length - 1}
            />
          ) : (
            <AssistantMessage
              key={index}
              message={message.text}
              isLast={index === conversation.length - 1}
            />
          );
        })}
      </div>
      <UserInput
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        conversationInput={conversationInput}
        handleUpdateConversation={handleUpdateConversation}
      />
    </div>
  );
};

export default Assistant;
