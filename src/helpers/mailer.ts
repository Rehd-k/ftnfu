import nodemailer from "nodemailer";

export async function sendMail(subject: string, to: string, body: any) {
  console.log(subject, to);
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    auth: {
      user: "admin@ftnfu.com",
      pass: "AzUo!BtOotz#$3&Q",
    },
  });

  try {
    await transporter.verify();
    console.log("verifcation Success");
  } catch (err) {
    console.log(err, "verifcation error");
    return err;
  }

  var mailOptions = {
    from: "admin@ftnfu.com",
    to: to,
    subject: subject,
    html: body,
  };

  try {
    const email = await transporter.sendMail(mailOptions);
    console.log(email);
  } catch (error) {
    console.log(error, "verifcation error");
    return error;
  }
}
