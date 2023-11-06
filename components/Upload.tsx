"use client";

import { ChangeEvent, useState } from "react";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(() => file);

      console.log("file", file);
    }
  };

  const handleSubmit = async () => {};

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default Upload;
