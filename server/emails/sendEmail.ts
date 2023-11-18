import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL_SENDER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
interface ViewEngineOptions {
  extName: string;
}
interface Options {
  viewEngine: ViewEngineOptions;
  viewPath: string;
  extName: string;
}

const options: Options = {
  viewEngine: {
    extName: ".handlebars",
  },
  viewPath: "./views",
  extName: ".handlebars",
};

interface AddTemplateOption extends SendMailOptions {
  template: string;
  context: {
    token: String;
  };
}

export class SendEmail {
  receiver: string;
  subject: string;
  text: string;

  constructor(receiver: string, subject: string, text: string) {
    this.text = text;
    this.receiver = receiver;
    this.subject = subject;
  }

  public async sendMail() {
    try {
      const info = await new Promise((resolve: any, reject: any) => {
        const emailOptions: AddTemplateOption = {
          from: process.env.NODEMAILER_EMAIL_SENDER,
          to: this.receiver,
          template: "verifyEmailTemplate",
          subject: this.subject,
          context: {
            token: this.text,
          },
        };
        // Send the email
        transporter.sendMail(emailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
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
