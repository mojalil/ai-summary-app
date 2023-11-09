'use client';
import { ChangeEvent, FormEvent, useState } from "react";

const Assistant = () => {
    const [hasInput, setHasInput] = useState(false);
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasInput(true);
    }
    const handleClear = (e : FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setHasInput(false);
    }

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setHasInput(true);
    }

  // Render the search/upload UI if there's no user input yet
  if (!hasInput) {
    return (
      <div className="rounded p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Where would you like to go?</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Start typing..."
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            onChange={handleFileUpload}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
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
