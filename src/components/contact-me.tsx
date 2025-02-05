"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "../lib/actions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactMe() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData);
    if (result.success) {
      setMessage(result.message);
    } else {
      setMessage("There was an error sending your message. Please try again.");
    }
  }

  return (
    <section
      className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto my-8"
      id="contact-me"
    >
      <div className="md:w-2/3 space-y-4">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-muted-foreground">
          Get in touch with me for any inquiries or collaborations.
        </p>
        <div className="space-y-4 mt-8">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span>chegegachuki@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span>+1 905 924 5608</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span>Toulon Road, Toronto</span>
          </div>
        </div>
      </div>
      <Card className="md:w-2/3">
        <CardContent className="pt-6">
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                className="min-h-[120px]"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
        <CardFooter>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </CardFooter>
      </Card>
    </section>
  );
}
