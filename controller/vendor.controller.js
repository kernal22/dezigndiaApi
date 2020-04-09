const VedndorService = require('../services/vendor.service');

const vendorService = new VedndorService();

class VendorController {
    async sendMail(req, res) {
        try {
            const mailData = req.body;
            const mailOptions = {
                from: mailData.email,
                to: 'connect@dezigndia.com',
                subject: `${mailData.name}: Project Requirement `,
                html: `<h4>Name: ${mailData.name}</h4><br><h4>Email: ${mailData.email}</h4><br><h4>Phone: ${mailData.phone}</h4><br><h4>Message: ${mailData.message}</h4><br>`
            }
            const responseData = await vendorService.sendMail(mailOptions);
            res.send({status: true, data: responseData, message: 'Mail sent successfully'});
        } catch (error) {
            return res.send({status: false, error: error.message});
        }
    }
}

module.exports = VendorController;