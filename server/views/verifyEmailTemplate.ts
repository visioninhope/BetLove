const verifyEmail = (name: string, link: string): string => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirm Your Account - BetLove</title>
    <style>
      body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 0;
      padding: 0; background-color: #f4f4f4; } .container { max-width: 600px;
      margin: 20px auto; padding: 20px; background-color: #ffffff;
      border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); } h1 { color:
      #333333; } p { color: #555555; } .confirmation-link { display:
      inline-block; margin-top: 10px; padding: 10px 20px; background-color:
      #3498db; color: #ffffff; text-decoration: none; border-radius: 3px; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to BetLove!</h1>
      <p>Hi ${name},</p>
      <p>Thank you for registering on BetLove. To start enjoying our
        services, please confirm your account by clicking the button below:</p>
      <a href="${link}" class="confirmation-link">Confirm Your Account</a>
      <p>If the button above does not work, you can also copy and paste the
        following link into your browser:</p>
      <p>${link}</p>
      <p>Thank you for choosing BetLove. If you have any questions or need
        assistance, feel free to contact our support team.</p>
      <p>Best regards,<br /> The BetLove Team</p>
    </div>
  </body>
</html>`;
};

export default verifyEmail;
