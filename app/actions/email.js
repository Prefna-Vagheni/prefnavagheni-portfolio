'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message') || 'No message provided.';

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'prefnavagheni54@example.com',
      subject: 'New Command from Portfolio',
      replyTo: senderEmail,
      text: `From: ${senderEmail}\n\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}
