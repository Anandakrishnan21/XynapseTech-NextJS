"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/validators/regFormValidation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { interestArea, internDuration, hearSource } from "@/lib/data";
import { registerForm } from "@/actions/regForm-api";

type Input = z.infer<typeof formSchema>;

export default function CareerForm() {
  const { toast } = useToast();
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobilenum: "",
      address: "",
      resumeUrl: "",
      linkedinUrl: "",
      collegeName: "",
      majorName: "",
      cgpa: "",
      gradDate: "",
      skills: "",
      interestArea: "",
      projectDetails: "",
      internDuration: "",
      hearSource: "",
    },
  });

  async function onSubmit(data: Input) {
    await registerForm(data)
      .then(() => {
        toast({
          variant: "successVariant",
          title: "Registered for the internship.",
          description:
            "You've successfully regeistered for the internship. We will send you an email soon.",
        });
      })
      .catch((error) => {
        toast({
          variant: "failureVariant",
          title: "Something went wrong!",
          description: error,
        });
      });
    form.reset();
  }

  return (
    <Card className="w-full md:w-4/6 lg:w-3/6">
      <CardHeader>
        <CardTitle className="font-medium">Register Here</CardTitle>
        <CardDescription>
          Fill this form to complete the registration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-7">
              {/* name field */}
              <div className="flex items-center justify-between gap-5">
                {/* first name */}
                <div className="w-full space-y-1.5">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* second name */}
                <div className="w-full space-y-1.5">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* email */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* phone number */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="mobilenum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input placeholder="Your mobile number..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* address */}
              <div className="grid w-full gap-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Residential Address (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your residential address..."
                          {...field}
                          className="resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* resume url */}
              <div className="grid w-full gap-2">
                <FormField
                  control={form.control}
                  name="resumeUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume Url</FormLabel>
                      <FormControl>
                        <Input placeholder="Your resume url..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* linkedin url */}
              <div className="grid w-full gap-2">
                <FormField
                  control={form.control}
                  name="linkedinUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile Url (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your linkedin profile url"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* University/College name */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University/College name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="University/College name..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Major/Area of study */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="majorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Major/Area of study</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Major/Area of study..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* cgpa&gradu date */}
              <div className="flex items-center justify-between gap-5">
                {/*cgpa */}
                <div className="w-full space-y-1.5">
                  <FormField
                    control={form.control}
                    name="cgpa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current CGPA</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your current cgpa..."
                            {...field}
                            type="number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/*course duration */}
                <div className="w-full space-y-1.5">
                  <FormField
                    control={form.control}
                    name="gradDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Graduation Date</FormLabel>
                        <FormControl>
                          <Input type="month" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* skills */}
              <div className="w-full space-y-1.5 ">
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your skills..."
                          {...field}
                          className="resize-none"
                        />
                      </FormControl>
                      <FormDescription>
                        Add each skills seperated by commas.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* area of interest */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="interestArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Interest</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an area of interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interestArea.map((area, index) => {
                            return (
                              <SelectItem value={area.toString()} key={index}>
                                {area}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* project details */}
              <div className="w-full space-y-1.5 ">
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Project details..."
                          {...field}
                          className="resize-none"
                        />
                      </FormControl>
                      <FormDescription>
                        Share details of any project you have worked on.Provide
                        Source-code link or Live site link.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* prefered internship duration */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="internDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prefered internship duration</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select prefered duration" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {internDuration.map((duartion, index) => {
                            return (
                              <SelectItem
                                value={duartion.toString()}
                                key={index}
                              >
                                {duartion}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* how did you here about us */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="hearSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you here about us?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {hearSource.map((source, index) => {
                            return (
                              <SelectItem value={source.toString()} key={index}>
                                {source}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center md:justify-end">
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  variant="blueBg"
                  className="w-[160px] justify-center font-normal"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      Registering...
                      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    </>
                  ) : (
                    <>Register</>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
