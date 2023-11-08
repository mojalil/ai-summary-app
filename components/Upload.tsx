"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type UploadProps = {
  setIsUploaded: (isUploaded: boolean) => void;
};

const Upload = ({ setIsUploaded }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(() => file);

      console.log("file", file);
    }
  };

  // handling video for now, we will update this to handle any files
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/video/upload", {
      method: "POST",
      body: formData,
    });

    console.log("res", res);

    console.log(setIsUploaded);

    if (res.status === 200) {
      const data = await res.json();
      console.log("data", data);
      setIsUploaded(true);
    } else {
      setIsUploaded(false);

      console.log("error uploading file");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default Upload;
