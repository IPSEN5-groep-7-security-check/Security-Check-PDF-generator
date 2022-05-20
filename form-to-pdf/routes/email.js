const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'h.elfaquir53@gmail.com',
        pass: 'denhaag070'
    }
});

router.post('/', (req, res) => {
    // var attachment = (typeof req.body.attachment !="undefined") ? req.body.attachment : '';
    var mailOptions = {
        from: 'h.elfaquir53@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
        attachments: [
            {   // use URL as an attachment
                filename: 'Resultaten.pdf',
                path: 'C:\\Users\\helfa\\Downloads\\2022-0001OIFF.pdf'
            }]
        };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

module.exports = router
