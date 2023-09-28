"use client";
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log("saff cup");
    reset();
  };

  return (
    <Card className="w-full md:w-4/6 lg:w-3/6">
      <CardHeader>
        <CardTitle className="font-medium">Register Here</CardTitle>
        <CardDescription>
          Fill this form to complete the registration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-7">
            {/* name field */}
            <div className="flex items-center justify-between gap-5">
              {/* first name */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  {...register("firstname", {
                    required: "First name is required.",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters.",
                    },
                    maxLength: {
                      value: 25,
                      message: "Maximum 25 characters are allowed.",
                    },
                  })}
                  id="firstname"
                  placeholder="Your first name"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{`${errors.firstname.message}`}</p>
                )}
              </div>
              {/* second name */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  {...register("lastname", {
                    required: "Last name is required.",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters.",
                    },
                    maxLength: {
                      value: 25,
                      message: "Maximum 25 characters are allowed.",
                    },
                  })}
                  id="lastname"
                  placeholder="Your last name"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{`${errors.lastname.message}`}</p>
                )}
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required.",
                })}
                id="email"
                type="email"
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
              )}
            </div>
            {/* phone number */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mobilenum">Mobile</Label>
              <Input
                {...register("mobilenum", {
                  required: "Mobile number is required.",
                  minLength: {
                    value: 10,
                    message: "Atleast 10 digits are required.",
                  },
                })}
                id="mobilenum"
                type="tel"
                placeholder="Your mobile number"
              />
              {errors.mobilenum && (
                <p className="text-red-500 text-sm">{`${errors.mobilenum.message}`}</p>
              )}
            </div>
            {/* address */}
            <div className="grid w-full gap-2">
              <Label htmlFor="address">
                Residential Address{" "}
                <span className="text-gray-500">(Optional)</span>
              </Label>
              <Textarea
                {...register("address", {
                  maxLength: {
                    value: 150,
                    message: "Maximum 150 characters are allowed.",
                  },
                })}
                placeholder="Your residential address..."
                id="address"
                className="resize-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{`${errors.address.message}`}</p>
              )}
            </div>
            {/* resume url */}
            <div className="grid w-full gap-2">
              <Label htmlFor="resumeUrl">Resume Url</Label>
              <Input
                {...register("resumeUrl", {
                  required: "Resume url is required.",
                })}
                id="resumeUrl"
                type="url"
                placeholder="Your resume url"
              />
              {errors.resumeUrl && (
                <p className="text-red-500 text-sm">{`${errors.resumeUrl.message}`}</p>
              )}
            </div>
            {/* linkedin url */}
            <div className="grid w-full gap-2">
              <Label htmlFor="linkedinUrl">
                LinkedIn Profile Url
                <span className="text-gray-500">(Optional)</span>
              </Label>
              <Input
                {...register("linkedinUrl")}
                id="linkedinUrl"
                type="url"
                placeholder="Your linkedin profile url"
              />
              {errors.linkedinUrl && (
                <p className="text-red-500 text-sm">{`${errors.linkedinUrl.message}`}</p>
              )}
            </div>

            {/* University/College name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="collegeName">University/College name</Label>
              <Input
                {...register("collegeName", {
                  required: "University/College name is required.",
                  maxLength: {
                    value: 80,
                    message: "Maximum 80 characters are allowed.",
                  },
                })}
                id="collegeName"
                type="text"
                placeholder="Your email address"
              />
              {errors.collegeName && (
                <p className="text-red-500 text-sm">{`${errors.collegeName.message}`}</p>
              )}
            </div>

            {/* Major/Area of study */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="majorName">Major/Area of study</Label>
              <Input
                {...register("majorName", {
                  required: "Major/Area of study is required.",
                  maxLength: {
                    value: 50,
                    message: "Maximum 50 characters are allowed.",
                  },
                })}
                id="majorName"
                type="text"
                placeholder="Your email address"
              />
              {errors.majorName && (
                <p className="text-red-500 text-sm">{`${errors.majorName.message}`}</p>
              )}
            </div>
            {/* cgpa&gradu date */}
            <div className="flex items-center justify-between gap-5">
              {/*cgpa */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="cgpa">Current CGPA</Label>
                <Input
                  {...register("cgpa", {
                    required: "Current CGPA is required.",
                    maxLength: {
                      value: 5,
                      message: "Maximum 5 characters are allowed.",
                    },
                  })}
                  type="number"
                  id="cgpa"
                  placeholder="Your current cgpa"
                />
                {errors.cgpa && (
                  <p className="text-red-500 text-sm">{`${errors.cgpa.message}`}</p>
                )}
              </div>
              {/*course duration */}
              <div className="w-full space-y-1.5">
                <Label htmlFor="gradDate">Graduation Date</Label>
                <Input
                  {...register("gradDate", {
                    required: "Graduation Date is required.",
                  })}
                  type="month"
                  id="gradDate"
                />
                {errors.gradDate && (
                  <p className="text-red-500 text-sm">{`${errors.gradDate.message}`}</p>
                )}
              </div>
            </div>

            {/* skills */}
            <div className="w-full space-y-1.5 ">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                {...register("skills", {
                  required: "Skills is required.",
                  maxLength: {
                    value: 500,
                    message: "Maximum 500 characters are allowed.",
                  },
                })}
                placeholder="Your skills"
                id="skills"
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Add each skills seperated by commas.
              </p>
              {errors.skills && (
                <p className="text-red-500 text-sm">{`${errors.skills.message}`}</p>
              )}
            </div>
            {/* area of interest */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="interestArea">Area of Interest</Label>
              <Select
                {...register("interestArea", {
                  required: "This field is required.",
                  maxLength: {
                    value: 250,
                    message: "Maximum 250 characters are allowed.",
                  },
                })}
              >
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
              {errors.interestArea && (
                <p className="text-red-500 text-sm">{`${errors.interestArea.message}`}</p>
              )}
            </div>

            {/* project details */}
            <div className="w-full space-y-1.5 ">
              <Label htmlFor="projectDetails">
                Share details of any project you have worked on.
              </Label>
              <Textarea
                {...register("projectDetails", {
                  required: "Project details required.",
                  maxLength: {
                    value: 800,
                    message: "Maximum 800 characters are allowed.",
                  },
                })}
                placeholder="Project details...."
                id="projectDetails"
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Provide Source-code link or Live site link.
              </p>
              {errors.projectDetails && (
                <p className="text-red-500 text-sm">{`${errors.projectDetails.message}`}</p>
              )}
            </div>

            {/* prefered internship duration */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="internDuration">
                Prefered internship duration
              </Label>
              <Select
                {...register("internDuration", {
                  required: "This field is required.",
                })}
              >
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
              {errors.internDuration && (
                <p className="text-red-500 text-sm">{`${errors.internDuration.message}`}</p>
              )}
            </div>

            {/* how did you here about us */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="hearSource">How did you here about us?</Label>
              <Select
                {...register("hearSource", {
                  required: "This field is required.",
                })}
              >
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
              {errors.hearSource && (
                <p className="text-red-500 text-sm">{`${errors.hearSource.message}`}</p>
              )}
            </div>

            <div className="flex justify-center md:justify-end">
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="blueBg"
                className="w-[160px] justify-center font-normal disabled:bg-yellow-300"
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
