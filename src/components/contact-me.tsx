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
import CopyToClipboard from "./copy-to-clipboard";

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
  const [textColor, setTextColor] = useState<string>("text-green-500");

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData);

    if (result.success) {
      setMessage(result.message);
      setTextColor("text-green-500");
    } else {
      setTextColor("text-red-500");
      setMessage(result.message);
    }
  }

  return (
    <section
      className="max-w-6xl mx-auto flex flex-col md:flex-row p-4 gap-4 lg:gap-8 w-full  my-8 container"
      id="contact-me"
    >
      <div className="md:w-2/3 space-y-4 ">
        <h2 className="text-3xl font-bold gradient">Contact Me</h2>
        <p className="text-muted-foreground">
          Get in touch with me for any inquiries or collaborations.
        </p>
        <div className="space-y-4 mt-8">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <a href="mailto:chegegachuki@gmail.com" className="hover:underline">
              chegegachuki@gmail.com{" "}
            </a>
            <CopyToClipboard textData="chegegachuki@gmail.com" />
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <a href="tel:+19059245608" className=" hover:underline">
              +1 905 924 5608
            </a>
            <CopyToClipboard textData="+1 905 924 5608" />
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />

            <span> Toronto</span>
          </div>
        </div>
      </div>
      <Card className="md:w-2/3 herocard">
        <CardContent className="pt-6">
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
              <small className="text-muted-foreground">
                I will get back to you on this email
              </small>
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
          {message && <p className={`text-sm ${textColor}`}>{message}</p>}
        </CardFooter>
      </Card>
    </section>
  );
}
