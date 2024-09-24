"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2, LuClipboardCopy } from "react-icons/lu";
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";
import { useState } from "react";

function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;

  // Function to copy link to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        {/* Add Copy to Clipboard functionality */}
        <Button
          variant="outline"
          size="icon"
          className="p-2"
          onClick={handleCopy}
        >
          <LuClipboardCopy />
        </Button>
        {copied && <span className="text-xs text-green-500">Copied!</span>}
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
