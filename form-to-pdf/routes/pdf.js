const express = require('express')
const router = express.Router()
const PDFDocument = require('pdfkit')

router.post('/', (req, res) => {
    const doc = new PDFDocument()
    let filename = req.body.filename
    // Stripping special characters
    // filename = encodeURIComponent(filename) + '.pdf'
    let test = "een_pad_test"
    filename = test + '.pdf';
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    // const content = req.body.content
    const content = "appeltaart\n testb"

    doc.y = 300
    doc.text(content, 50, 50)
    doc.pipe(res)
    doc.end()
})

module.exports = router
