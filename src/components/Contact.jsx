import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const formRef = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(service_id, template_id, formRef.current, user_id)
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sanskarsahu2095@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-gray-300 hover:text-primary transition-colors"
                  >
                    sanskarsahu2095@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+917441175886"
                    className="text-muted-foreground  text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    +91 7441175XXX
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-md text-start font-semibold">Location</h4>
                  <a
                    href="https://maps.app.goo.gl/ULCWq4b8mjo3nfYS9"
                    className="text-muted-foreground  text-gray-300 hover:text-primary transition-colors"
                  >
                    Indore, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/sanskar-sahu-ab3a76246"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-4 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                {/* <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                {/* <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                {/* <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Subject
                </label> */}
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                {/* <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to collaborate on..."
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
