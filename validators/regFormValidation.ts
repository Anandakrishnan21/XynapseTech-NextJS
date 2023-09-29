"use client";

import * as z from "zod";

export const formSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(25),
  lastname: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(25),
  email: z.string().email(),
  mobilenum: z.string().min(10).max(13),
  address: z.string().min(15).max(300),
  resumeUrl: z.string().min(10).max(200).url({ message: "Not a valid url!" }),
  linkedinUrl: z.string().min(10).max(200).url({ message: "Not a valid url!" }),
  collegeName: z.string().min(5).max(100),
  majorName: z.string().min(5).max(50),
  cgpa: z
    .string()
    .min(1)
    .max(5)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Should be a number",
    }),
  gradDate: z.string(),
  skills: z.string().min(5).max(200),
  interestArea: z.string(),
  projectDetails: z.string().min(50).max(400),
  internDuration: z.string(),
  hearSource: z.string(),
});
