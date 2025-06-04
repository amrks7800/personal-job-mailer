const mailPassword = process.env.MAIL_PASSWORD;
const ownerMail = process.env.OWNER_MAIL;

const config = {
  mail: {
    mailPassword,
    ownerMail,
  },
  links: {
    portfolioUrl: process.env.PORTFOLIO_URL,
    blogUrl: process.env.BLOG_URL,
    githubUrl: process.env.GITHUB_URL,
    cvUrl: process.env.CV_URL,
    linkedinUrl: process.env.LINKEDIN_URL,
  },
} as const;

export default config;
