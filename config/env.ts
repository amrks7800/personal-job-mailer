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
  urls: {
    productionAppUrl: process.env.PRODUCTION_APP_URL,
    localAppUrl: process.env.LOCAL_APP_URL,
  },
  env: process.env.NODE_ENV,
} as const;

export default config;
