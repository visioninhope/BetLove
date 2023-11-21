import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "cyklonehateka1@gmail.com",
    pass: "copl qbdl bgcp brpd",
  },
});

console.log("");

interface MessageConfig {
  from: string | undefined;
  to: string;
  subject: string;
  html: string;
}

export class SendEmail {
  receiver: string;
  subject: string;
  html: string;

  constructor(receiver: string, subject: string, html: string) {
    this.html = html;
    this.receiver = receiver;
    this.subject = subject;
  }

  public async sendMail(): Promise<unknown> {
    try {
      const info = await new Promise((resolve: any, reject: any) => {
        const emailOptions: MessageConfig = {
          from: process.env.NODEMAILER_EMAIL_SENDER,
          to: this.receiver,
          subject: this.subject,
          html: this.html,
        };
        // Send the email
        transporter.sendMail(emailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
            return;
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });
    } catch (error) {
      return error;
    }
  }
}
