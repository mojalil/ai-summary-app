export type Message = {
    text: string;
    author: "user" | "assistant";
    type?: "text" | "image" | "video" | "audio" | "file";
  };