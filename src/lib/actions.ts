"use server";
import { Resend } from "resend";
export async function submitContactForm(formData: FormData) {
  // In a real application, you'd send an email or save to a database here

  const req = Object.fromEntries(formData);

  const resend = new Resend(process.env.RESEND_API_KEY);

  (async function () {
    const { data, error } = await resend.emails.send({
      from: `${req.name} <onboarding@resend.dev>`,
      to: ["chegegachuki@gmail.com"],
      subject: "Availability for Dev services",
      html: `<strong>${req.message} from ${req.email}</strong>`,
    });

    console.log(data);

    if (error) {
      return {
        success: false,
        message: error?.message,
      };
    }
  })();

  // Simulate a delay to show loading state
  //await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message. We'll be in touch soon!",
  };
}
