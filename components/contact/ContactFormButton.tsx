import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function ContactFormButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center md:justify-end md:mr-5">
      <Button
        variant="blueBg"
        disabled={pending}
        type="submit"
        className="w-48 md:w-52 font-light"
      >
        {pending ? (
          <>
            Sending...
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          </>
        ) : (
          <>
            Send Message
            <AiOutlineSend />
          </>
        )}
      </Button>
    </div>
  );
}
