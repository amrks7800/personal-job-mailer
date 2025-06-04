"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, User, Building, FileText, Award, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/actions";
import { useState } from "react";

const emailTemplateSchema = z.object({
  // Personal Information
  applicantName: z.string().min(2, "Name must be at least 2 characters"),
  currentTitle: z.string().min(2, "Current title is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Location is required"),

  // Application Details
  roleTitle: z.string().min(2, "Role title is required"),
  companyName: z.string().min(2, "Company name is required"),
  companyEmail: z
    .string()
    .email("Please enter a valid company email")
    .optional(),
  date: z.string().min(1, "Date is required"),
  hrName: z.string().min(2, "HR contact name is required"),
  hrTitle: z.string().min(2, "HR contact title is required"),

  // Experience
  yearsExperience: z.string().min(1, "Years of experience is required"),
  field: z.string().min(2, "Field of expertise is required"),

  // Letter Content
  mainParagraph: z
    .string()
    .min(50, "Main paragraph must be at least 50 characters"),
  companyAttraction: z
    .string()
    .min(20, "Please explain what attracts you to the company"),
  companyAchievement: z
    .string()
    .min(20, "Please mention a company achievement you admire"),

  // Previous Experience
  previousRole: z.string().min(2, "Previous role is required"),
  previousCompany: z.string().min(2, "Previous company is required"),
  achievement1: z.string().min(20, "Please describe your first achievement"),
  achievement2: z.string().min(20, "Please describe your second achievement"),
});

export type EmailTemplateFormData = z.infer<typeof emailTemplateSchema>;

export default function EmailTemplateForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<EmailTemplateFormData>({
    resolver: zodResolver(emailTemplateSchema),
    defaultValues: {
      applicantName: "",
      currentTitle: "",
      email: "",
      phone: "",
      location: "",
      roleTitle: "",
      companyName: "",
      companyEmail: "",
      date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD for date input
      hrName: "",
      hrTitle: "",
      yearsExperience: "",
      field: "",
      mainParagraph: "",
      companyAttraction: "",
      companyAchievement: "",
      previousRole: "",
      previousCompany: "",
      achievement1: "",
      achievement2: "",
    },
  });

  async function onSubmit(data: EmailTemplateFormData) {
    setLoading(true);

    console.log("Form data:", data);

    const result = await sendEmail(data);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
      console.error("Error sending email:", JSON.parse(result.error || ""));
    }

    setLoading(false);

    // You could also trigger email generation, preview, or download here
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Cover Letter Generator
        </h1>
        <p className="text-gray-600">
          Fill out the form below to generate your personalized cover letter
          email template
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Your basic contact information and current position
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="applicantName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currentTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Senior Software Developer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="New York, NY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Application Details Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Application Details
              </CardTitle>
              <CardDescription>
                Information about the position and company you&apos;re applying
                to
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="roleTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Frontend Developer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Tech Corp Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Email (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="hr@company.com"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="bg-gray-50" />
                      </FormControl>
                      <FormDescription>
                        Defaults to today&apos;s date
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hrName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>HR Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hrTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>HR Contact Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Hiring Manager" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Professional Experience
              </CardTitle>
              <CardDescription>
                Your professional background and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="yearsExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience</FormLabel>
                      <FormControl>
                        <Input placeholder="5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field of Expertise</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Development" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="previousRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="previousCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Previous Tech Co." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Letter Content Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Letter Content
              </CardTitle>
              <CardDescription>
                Customize the content of your cover letter
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="mainParagraph"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Paragraph</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your key qualifications and why you're interested in this role..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This will be the main body of your cover letter explaining
                      your qualifications
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyAttraction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What Attracts You to This Company</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="their innovative approach to technology and commitment to sustainability..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Explain what specifically draws you to this company
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyAchievement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Achievement You Admire</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="their recent product launch that revolutionized the industry..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Mention a specific achievement or project by the company
                      that impresses you
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="achievement1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Achievement #1</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="led a team of 5 developers to deliver a project 2 weeks ahead of schedule..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="achievement2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Achievement #2</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="implemented a new system that improved efficiency by 30%..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-8 py-3 text-lg font-semibold"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              <Mail className="mr-2 h-5 w-5" />
              Send Generated Cover Letter
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
