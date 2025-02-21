"use client";
import { Check, CopyIcon } from "lucide-react";
import React, { FC, useState } from "react";

const CopyToClipboard: FC<{ textData: string }> = ({ textData }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(textData).then(
      () => {},
      (err) => {
        console.error(err);
      }
    );
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div
      className="inline  cursor-pointer text-muted-foreground"
      onClick={copyToClipboard}
    >
      {copied ? (
        <span title="copied">
          <Check size={18} />
        </span>
      ) : (
        <span title="Copy to clipboard">
          <CopyIcon size={18} />
        </span>
      )}
    </div>
  );
};

export default CopyToClipboard;
