import type { ContactFormData } from "@/types";

/**
 * Creates HTML email template for admin notification
 */
export const createAdminEmailTemplate = (data: ContactFormData): string => {
  const currentDate = new Date().toLocaleString("tr-TR");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #0A2342, #3FBF7F);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
          }
          .label {
            font-weight: 600;
            color: #0A2342;
            margin-bottom: 5px;
            display: block;
          }
          .value {
            color: #555;
          }
          .message-box {
            background: #f0f8f5;
            border-left: 4px solid #3FBF7F;
            padding: 20px;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #888;
            font-size: 12px;
            border-top: 1px solid #eee;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Form Message</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="field">
              <span class="label">Subject:</span>
              <span class="value">${data.subject}</span>
            </div>
            <div class="message-box">
              <span class="label">Message:</span>
              <div class="value" style="white-space: pre-wrap; margin-top: 10px;">
                ${data.message}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>Sent from MAXEFF website contact form</p>
            <p>${currentDate}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Creates plain text email for admin notification
 */
export const createAdminEmailText = (data: ContactFormData): string => {
  const currentDate = new Date().toLocaleString("tr-TR");

  return `
New Contact Form Message

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from MAXEFF website
${currentDate}
  `.trim();
};

export const createAutoReplyTemplate = (name: string): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You - MAXEFF</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          .container {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #0A2342, #3FBF7F);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            padding: 40px 30px;
          }
          .content p {
            margin-bottom: 15px;
            line-height: 1.8;
          }
          .button {
            display: inline-block;
            padding: 14px 32px;
            background: #3FBF7F;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            margin: 20px 0;
            font-weight: 600;
          }
          .footer {
            background: #f9f9f9;
            padding: 30px;
            text-align: center;
            color: #666;
            font-size: 13px;
          }
          .footer p {
            margin: 5px 0;
          }
          .divider {
            height: 1px;
            background: #eee;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Message Received! ✅</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting MAXEFF. We have successfully received your message.</p>
            <p>Our team will review your inquiry and respond within 24 hours during business days.</p>
            <p>In the meantime, feel free to explore our website for more information about our energy efficiency solutions.</p>
            <center>
              <a href="https://maxeff.com.tr" class="button">Visit Our Website</a>
            </center>
          </div>
          <div class="footer">
            <p><strong>MAXEFF Energy Efficiency Solutions</strong></p>
            <div class="divider"></div>
            <p>📧 info@maxeff.com.tr | 📞 +90 (212) 000 00 00</p>
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Creates plain text auto-reply for sender
 */
export const createAutoReplyText = (name: string): string => {
  return `
Dear ${name},

Thank you for contacting MAXEFF. We have successfully received your message.

Our team will review your inquiry and respond within 24 hours during business days.

In the meantime, feel free to explore our website for more information about our energy efficiency solutions.

Visit our website: https://maxeff.com.tr

Best regards,
MAXEFF Team

---
MAXEFF Energy Efficiency Solutions
📧 info@maxeff.com.tr
📞 +90 (212) 000 00 00

This is an automated response. Please do not reply to this email.
  `.trim();
};
