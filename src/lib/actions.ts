"use server";

export async function submitContactForm(formData: FormData) {
  // In a real application, you'd send an email or save to a database here
  console.log("Form submitted:", Object.fromEntries(formData));

  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message. We'll be in touch soon!",
  };
}
