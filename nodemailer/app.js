const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "mail.openjavascript.info", 
    port: 465,
    secure: true, 
    auth: {
      user: "test@openjavascript.info", 
      pass: "Node123", 
      
    },
  });
  
 
  let info = await transporter.sendMail({
    from: 'Openjavascript <test@openjavascript.info>',
    to: "test2@openjavascript.info",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId); 
}

main()
.catch(err => console.log(err));