"use server";
import { Resend } from "resend";
export async function submitContactForm(formData: FormData) {
  const req = Object.fromEntries(formData);

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: `${req.name} <onboarding@resend.dev>`,
    to: ["chegegachuki@gmail.com"],
    subject: "Availability for Dev services",
    html: `<strong>${req.message} from ${req.email}</strong>`,
  });

  if (error) {
    return {
      success: false,
      message: error?.message,
    };
  }

  return {
    success: true,
    data,
    message: "Thank you for your message. We'll be in touch soon!",
  };
}
