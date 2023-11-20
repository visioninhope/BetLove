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
    token: string;
  };
}

interface Context {
  token: string;
  url: string;
}

export class SendEmail {
  receiver: string;
  subject: string;
  context: {
    token: string;
    url: string;
  };

  constructor(receiver: string, subject: string, context: Context) {
    this.context = context;
    this.receiver = receiver;
    this.subject = subject;
  }

  public async sendMail(): Promise<unknown> {
    try {
      const info = await new Promise((resolve: any, reject: any) => {
        const emailOptions: AddTemplateOption = {
          from: process.env.NODEMAILER_EMAIL_SENDER,
          to: this.receiver,
          template: "verifyEmailTemplate",
          subject: this.subject,
          context: {
            token: this.context.token,
          },
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
