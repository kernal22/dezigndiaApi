const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


class VendorService {
    async sendMail(mailOptions) {
        return new Promise(async (resolve, reject) => {
            try {
                  let transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: process.env.EMAIL_PORT,
                    secure: false,
                    requireTLS: true,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        return reject(error);
                    } else {
                        return resolve(info);
                    }
                });
            } catch (error) {
                return reject(error);
            }
        })
    }
}
module.exports = VendorService;