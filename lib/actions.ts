"use server";

import transporter from "./transporter";
import applicationTemplate from "@/templates/application";
import { EmailTemplateFormData } from "@/components/email-template-form";
import config from "@/config/env";

// URL to the CV
const cvUrl =
  config.env === "production"
    ? `${config.urls.productionAppUrl}/AMR_KHALED_CV_2.pdf`
    : `${config.urls.localAppUrl}/AMR_KHALED_CV_2.pdf`;

export async function sendEmail(data: EmailTemplateFormData) {
  try {
    // Fetch the CV file from the remote URL
    console.log("CV URL:", cvUrl);
    const response = await fetch(cvUrl);
    if (!response.ok) {
      console.log(
        `Failed to fetch CV: ${response.status} ${response.statusText}`
      );
    }
    const cvBuffer = Buffer.from(await response.arrayBuffer());

    const mailOptions = {
      from: data.email,
      to: data.companyEmail || "amrkh.business@gmail.com",
      subject: `Cover Letter for ${data.roleTitle}`,
      attachments: [
        {
          filename: `CV_${data.applicantName.replace(/\s+/g, "_")}.pdf`,
          content: cvBuffer,
          contentType: "application/pdf",
        },
      ],
      html: applicationTemplate({
        APPLICANT_NAME: data.applicantName,
        CURRENT_TITLE: data.currentTitle,
        EMAIL: data.email,
        PHONE: data.phone,
        LOCATION: data.location,
        HR_NAME: data.hrName,
        HR_TITLE: data.hrTitle,
        COMPANY_NAME: data.companyName,
        ROLE_TITLE: data.roleTitle,
        YEARS_EXPERIENCE: data.yearsExperience,
        FIELD: data.field,
        MAIN_PARAGRAPH: data.mainParagraph,
        COMPANY_ATTRACTION: data.companyAttraction,
        COMPANY_ACHIEVEMENT: data.companyAchievement,
        PREVIOUS_ROLE: data.previousRole,
        PREVIOUS_COMPANY: data.previousCompany,
        ACHIEVEMENT_1: data.achievement1,
        ACHIEVEMENT_2: data.achievement2,
        LINKEDIN_URL: config.links.linkedinUrl as string,
        GITHUB_URL: config.links.githubUrl as string,
        WEBSITE_URL: config.links.portfolioUrl as string,
      }),
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
      error: JSON.stringify(error),
    };
  }
}
