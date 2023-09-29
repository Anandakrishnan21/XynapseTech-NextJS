"use client";
import { sendEmail } from "@/actions/sendEmail";
import React from "react";
import ContactFormButton from "./ContactFormButton";
import { useToast } from "../ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  return (
    <div className="bg-gray-100 dark:bg-slate-900 p-4 rounded w-full sm:w-[450px] md:min-w-[400px] lg:w-2/3">
      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast({
              variant: "failureVariant",
              description: error,
            });
            return;
          }
          toast({
            variant: "successVariant",
            description: "Email sent successfully!",
          });
        }}
        autoComplete="off"
      >
        {/* name */}
        <div className="flex flex-col px-5 py-5 ">
          <label htmlFor="fullName" className="md:text-lg">
            Full Name
          </label>
          <input
            name="senderName"
            id="fullName"
            type="text"
            placeholder="Your full name"
            required
            maxLength={500}
            className="bg-transparent border-b border-b-gray-300 dark:border-b-gray-600 py-2 outline-none 
            focus:border-b-2 focus:border-b-gray-400"
          />
        </div>
        {/* email */}
        <div className="flex flex-col px-5 py-5 ">
          <label htmlFor="emailAddress" className="md:text-lg">
            Email Address
          </label>
          <input
            name="senderEmail"
            id="emailAddress"
            type="email"
            placeholder="Your email address"
            required
            maxLength={500}
            className="bg-transparent border-b border-b-gray-300 dark:border-b-gray-600 py-2 outline-none 
            focus:border-b-2 focus:border-b-gray-400"
          />
        </div>
        {/* message */}
        <div className="flex flex-col px-5 py-5 ">
          <label htmlFor="emailAddress" className="md:text-lg">
            Message
          </label>
          <textarea
            name="senderMessage"
            rows={3}
            className="bg-transparent border-b border-b-gray-300 dark:border-b-gray-600 py-2 resize-none 
            outline-none focus:border-b-2 focus:border-b-gray-400"
            placeholder="Your message goes here...."
            required
          ></textarea>
        </div>
        <ContactFormButton />
      </form>
    </div>
  );
}
