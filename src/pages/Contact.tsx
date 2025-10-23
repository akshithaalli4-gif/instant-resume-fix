import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground">support@airesume analyzer.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant bg-gradient-primary">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-2">
                        How long does analysis take?
                      </h4>
                      <p className="text-sm text-primary-foreground/90">
                        Our AI typically analyzes resumes in under 30 seconds.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-2">
                        Is my data secure?
                      </h4>
                      <p className="text-sm text-primary-foreground/90">
                        Yes, all data is encrypted and never shared with third parties.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-2">
                        What file formats are supported?
                      </h4>
                      <p className="text-sm text-primary-foreground/90">
                        We support PDF and DOCX formats up to 5MB.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Business Inquiries
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in enterprise solutions or partnerships? Let us know how we can help your organization.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
