const applicationTemplate = ({
  APPLICANT_NAME,
  CURRENT_TITLE,
  EMAIL,
  PHONE,
  LOCATION,
  HR_NAME,
  HR_TITLE,
  COMPANY_NAME,
  ROLE_TITLE,
  YEARS_EXPERIENCE,
  FIELD,
  MAIN_PARAGRAPH,
  COMPANY_ATTRACTION,
  COMPANY_ACHIEVEMENT,
  PREVIOUS_ROLE,
  PREVIOUS_COMPANY,
  ACHIEVEMENT_1,
  ACHIEVEMENT_2,
  LINKEDIN_URL,
  GITHUB_URL,
  WEBSITE_URL,
  CV_URL,
  PORTFOLIO_URL,
}: {
  APPLICANT_NAME: string;
  CURRENT_TITLE: string;
  EMAIL: string;
  PHONE: string;
  LOCATION: string;
  HR_NAME: string;
  HR_TITLE: string;
  COMPANY_NAME: string;
  ROLE_TITLE: string;
  YEARS_EXPERIENCE: string;
  FIELD: string;
  MAIN_PARAGRAPH: string;
  COMPANY_ATTRACTION: string;
  COMPANY_ACHIEVEMENT: string;
  PREVIOUS_ROLE: string;
  PREVIOUS_COMPANY: string;
  ACHIEVEMENT_1: string;
  ACHIEVEMENT_2: string;
  LINKEDIN_URL: string;
  GITHUB_URL: string;
  WEBSITE_URL: string;
  CV_URL?: string;
  PORTFOLIO_URL?: string;
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${APPLICANT_NAME} - Application for ${ROLE_TITLE}</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f1f1f1;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <tr>
              <td align="center" style="background: #6c5ce7; padding: 40px 20px; color: #ffffff;">
                <img src="https://www.w3schools.com/w3images/avatar2.png" width="100" height="100" alt="Avatar" style="border-radius: 50%; border: 4px solid rgba(255,255,255,0.3); margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${APPLICANT_NAME}</h1>
                <p style="margin: 10px 0 0; font-size: 16px; font-style: italic;">${CURRENT_TITLE}</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="background-color: #a29bfe; padding: 20px;">
                <table cellpadding="5" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #ffffff; font-size: 14px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="14" height="14" alt="Email" style="vertical-align: middle;"> &nbsp;
                      <a href="mailto:${EMAIL}" style="color: #ffffff; text-decoration: none;">${EMAIL}</a>
                    </td>
                    <td align="center" style="color: #ffffff; font-size: 14px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="14" height="14" alt="Phone" style="vertical-align: middle;"> &nbsp;
                      <a href="tel:${PHONE}" style="color: #ffffff; text-decoration: none;">${PHONE}</a>
                    </td>
                    <td align="center" style="color: #ffffff; font-size: 14px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="14" height="14" alt="Location" style="vertical-align: middle;"> &nbsp;
                      ${LOCATION}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px; background-color: #f9f9f9;">
                <h2 style="margin: 0 0 15px 0; color: #2d3436;">Dear ${HR_NAME},</h2>
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #636e72; font-style: italic;">${HR_TITLE} at ${COMPANY_NAME}</p>
                <p style="color: #2d3436; font-size: 15px; line-height: 1.6;">
                  I am writing to express my interest in the <strong>${ROLE_TITLE}</strong> role at <strong>${COMPANY_NAME}</strong>. With <strong>${YEARS_EXPERIENCE}</strong> years of experience in <strong>${FIELD}</strong>, I am confident in my ability to contribute to your team.
                </p>
                <p style="color: #2d3436; font-size: 15px; line-height: 1.6;">${MAIN_PARAGRAPH}</p>
                <p style="color: #2d3436; font-size: 15px; line-height: 1.6;">
                  What draws me to <strong>${COMPANY_NAME}</strong> is ${COMPANY_ATTRACTION}. I admire ${COMPANY_ACHIEVEMENT} and would be thrilled to contribute to that.
                </p>
                <p style="color: #2d3436; font-size: 15px; line-height: 1.6;">
                  In my previous role as <strong>${PREVIOUS_ROLE}</strong> at <strong>${PREVIOUS_COMPANY}</strong>, I ${ACHIEVEMENT_1}. Additionally, I ${ACHIEVEMENT_2}.
                </p>
                <p style="color: #2d3436; font-size: 15px; line-height: 1.6;">
                  I’d welcome the opportunity to discuss further how I can help ${COMPANY_NAME} achieve its goals.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 30px 20px;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding: 10px;">
                      <a href="${
                        CV_URL || "#"
                      }" style="background: #ff7675; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 30px; display: inline-block; font-weight: bold;">View My CV</a>
                    </td>
                    <td align="center" style="padding: 10px;">
                      <a href="${
                        PORTFOLIO_URL || "#"
                      }" style="background: #74b9ff; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 30px; display: inline-block; font-weight: bold;">View Portfolio</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 20px 30px; background: #f1f3f4;">
                <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 16px; color: #2d3436;">Connect with me</p>
                <a href="${LINKEDIN_URL}" style="margin: 0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24" height="24" alt="LinkedIn"></a>
                <a href="${GITHUB_URL}" style="margin: 0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="24" height="24" alt="GitHub"></a>
                <a href="${WEBSITE_URL}" style="margin: 0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" width="24" height="24" alt="Website"></a>
              </td>
            </tr>
            <tr>
              <td align="center" style="background-color: #2d3436; color: #b2bec3; padding: 20px; font-size: 13px;">
                <p style="margin: 0;">Thank you for your time and consideration.</p>
                <p style="margin: 5px 0 0 0; font-size: 11px;">This application was sent on ${new Date().toLocaleDateString()} for the ${ROLE_TITLE} position at ${COMPANY_NAME}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export default applicationTemplate;
