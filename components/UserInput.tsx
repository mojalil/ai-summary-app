import { Message } from "@/lib/types";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type UserInputProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUpdateConversation: (message: Message)=> void;
  conversationInput: string;
};

const UserInput = ({
  handleSubmit,
  handleInput,
  conversationInput,
  handleUpdateConversation,
}: UserInputProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];
        handleUpdateConversation({text: `Uploaded file: ${file.name}`, author: "assistant", type: "file" });
      }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
  });

//   Get the type for the getRootProps and getInputProps functions


  return (
    <div {...getRootProps()}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full pl-9 rounded-lg"
      >
        {/* This input is hidden visually but remains accessible, it's needed for the file drop to work */}
        <input {...getInputProps()} className="hidden" />
        <input
          value={conversationInput}
          onChange={handleInput}
          type="text"
          placeholder="Start typing or upload a file..."
          className="bg-transparent focus:outline-none rounded text-xl w-full font-semibold"
        />
      </form>
    </div>
  );
};

export default UserInput;
