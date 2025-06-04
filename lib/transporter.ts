import nodemailer from "nodemailer";
import config from "@/config/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.mail.ownerMail,
    pass: config.mail.mailPassword,
  },
});

export default transporter;
