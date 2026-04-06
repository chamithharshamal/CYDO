import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, company, projectType, message } = data

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    })

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
        <p>You have received a new message from the CYDO website contact form.</p>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="margin-top: 0;">Sender Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
          
          <h3 style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 15px;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
        </div>
      </div>
    `

    // Setup email data
    const mailOptions = {
      from: `"CYDO Website" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER, // receiver
      subject: `New Inquiry from ${name} - ${company || "CYDO Website"}`, // Subject line
      html: htmlContent, // html body
      replyTo: email, // Set replyTo so you can hit reply and email the person directly
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    )
  }
}
