import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type UserInputProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUpdateConversation: (message: string, author: string) => void;
  conversationInput: string;
};

const UserInput = ({
  handleSubmit,
  handleInput,
  conversationInput,
  handleUpdateConversation,
}: UserInputProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Handle the files here
        console.log(acceptedFiles);
        // Perform actions such as setting state, uploading files, etc.
        // Assuming you only handle one file at a time
        const file = acceptedFiles[0];
    
        // Add file upload message to the conversation
        // setConversation((prevConversation) => [
        //   ...prevConversation,
        //   { text: `Uploaded file: ${file.name}`, author: "assistant" },
        // ]);

        handleUpdateConversation(`Uploaded file: ${file.name}`, "assistant");
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
