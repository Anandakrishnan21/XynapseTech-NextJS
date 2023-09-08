"use client";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CareerForm() {
  return (
    <Card className="w-full md:w-4/6 lg:w-3/6">
      <CardHeader>
        <CardTitle className="font-medium">Register Here</CardTitle>
        <CardDescription>
          Fill this form to complete the registration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-7">
            {/* name field */}
            <div className="flex items-center justify-between gap-5">
              {/* first name */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" placeholder="Your first name" />
              </div>
              {/* second name */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" placeholder="Your second name" />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" type="email" placeholder="Your email address" />
            </div>
            {/* phone number */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mobilenum">Mobile</Label>
              <Input
                id="mobilenum"
                type="tel"
                placeholder="Your mobile number"
              />
            </div>
            {/* address */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="address">
                Residential Address{" "}
                <span className="text-gray-500">(Optional)</span>
              </Label>
              <Textarea
                placeholder="Your residential address..."
                id="address"
                className="resize-none"
              />
            </div>
            {/* resume upload */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="resumeFile">Upload Resume</Label>
              <Input
                id="resumeFile"
                type="file"
                placeholder="Your mobile number"
                className="cursor-pointer"
              />
            </div>
            {/* linkedin url */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="linkedinUrl">
                LinkedIn Profile Url
                <span className="text-gray-500">(Optional)</span>
              </Label>
              <Input
                id="linkedinUrl"
                type="url"
                placeholder="Your linkedin profile url"
              />
            </div>

            {/* University/College name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="collegeName">University/College name</Label>
              <Input
                id="collegeName"
                type="text"
                placeholder="Your email address"
              />
            </div>

            {/* Major/Area of study */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="majorName">Major/Area of study</Label>
              <Input
                id="majorName"
                type="text"
                placeholder="Your email address"
              />
            </div>
            {/* cgpa&gradu date */}
            <div className="flex items-center justify-between gap-5">
              {/*cgpa */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="cgpa">Current CGPA</Label>
                <Input
                  type="number"
                  id="cgpa"
                  placeholder="Your current cgpa"
                />
              </div>
              {/*course duration */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="gradDate">Graduation Date</Label>
                <Input type="month" id="gradDate" />
              </div>
            </div>

            {/* skills */}
            <div className="w-full space-y-1.5 ">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                placeholder="Your residential address..."
                id="skills"
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Add each skills seperated by commas.
              </p>
            </div>
            {/* area of interest */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="interestArea">Area of Interest</Label>
              <Select>
                <SelectTrigger id="interestArea">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Web development">
                    Web development
                  </SelectItem>
                  <SelectItem value="App development">
                    App development
                  </SelectItem>
                  <SelectItem value="Machine learning">
                    Machine learning
                  </SelectItem>
                  <SelectItem value="Cyber security">Cyber security</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* project details */}
            <div className="w-full space-y-1.5 ">
              <Label htmlFor="projectDetails">
                Share details of any project you have worked on.
              </Label>
              <Textarea
                placeholder="Project details...."
                id="projectDetails"
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Provide Source-code link or Live site link.
              </p>
            </div>

            {/* prefered internship duration */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="internDuration">
                Prefered internship duration
              </Label>
              <Select>
                <SelectTrigger id="internDuration">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="2 Weeks">2 Weeks</SelectItem>
                  <SelectItem value="1 Month">1 Month</SelectItem>
                  <SelectItem value="2 Month">2 Month</SelectItem>
                  <SelectItem value="3 Month">3 Months</SelectItem>
                  <SelectItem value="6 Month">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* how did you here about us */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="hearSource">How did you here about us?</Label>
              <Select>
                <SelectTrigger id="hearSource">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Referral from a Friend or Colleague">
                    Referral from a Friend or Colleague
                  </SelectItem>
                  <SelectItem value="Online Job Board">
                    Online Job Board
                  </SelectItem>
                  <SelectItem
                    value="Company Website/Careers Page
"
                  >
                    Company Website/Careers Page
                  </SelectItem>
                  <SelectItem value="Social Media Platforms">
                    Social Media Platforms
                  </SelectItem>
                  <SelectItem
                    value="University or College Career Center
"
                  >
                    University or College Career Center
                  </SelectItem>
                  <SelectItem value="Print Advertisement ">
                    Print Advertisement{" "}
                  </SelectItem>
                  <SelectItem
                    value="Company Presentation or Workshop
"
                  >
                    Company Presentation or Workshop
                  </SelectItem>
                  <SelectItem value="Other ">Other </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center md:justify-end">
        <Button variant="blueBg" className="w-[130px] justify-center">
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}
