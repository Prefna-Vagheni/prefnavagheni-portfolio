'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Validation
  if (!senderEmail || typeof senderEmail !== 'string') {
    return {
      success: false,
      error: 'Invalid email address',
    };
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(senderEmail)) {
    return {
      success: false,
      error: 'Invalid email format',
    };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified domain
      to: 'prefnavagheni54@gmail.com', // Your email
      replyTo: senderEmail, // Visitor's email for easy reply
      subject: `New Portfolio Contact from ${senderEmail}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .label {
                color: #EA580C;
                font-weight: bold;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .value {
                background: #f9fafb;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-family: 'Courier New', monospace;
                font-size: 14px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 New Portfolio Contact</h1>
            </div>
            <div class="content">
              <div class="label">From:</div>
              <div class="value">${senderEmail}</div>
              
              ${
                message
                  ? `
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              `
                  : ''
              }
              
              <div class="label">Time:</div>
              <div class="value">${new Date().toLocaleString()}</div>
              
              <div class="footer">
                📧 Reply directly to this email to respond to ${senderEmail}
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Portfolio Contact

From: ${senderEmail}
${message ? `Message: ${message}\n` : ''}
Time: ${new Date().toLocaleString()}

Reply directly to this email to respond.
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      error: 'Failed to send email',
    };
  }
}
