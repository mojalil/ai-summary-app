'use client';

import Upload from "@/components/Upload";
import { useState } from "react";

const SummaryPage = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <div>
      <Upload setIsUploaded={setIsUploaded} />
      {isUploaded && (<div>File Uploaded</div>)}
    </div>
  );
};

export default SummaryPage;
