import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


const UserInput = () => {
  const [conversationInput, setConversationInput] = useState(""); 

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

    
        console.log("Input submitted!");
        console.log(conversationInput);
    
        // reset the search input
        // setConversationInput("");
      };

    
    return (
        <div
        {...getRootProps()}
        >
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
            className="bg-transparent focus:outline-none rounded text-xl w-full"
          />
        </form>
        </div>
    );
    };

export default UserInput;