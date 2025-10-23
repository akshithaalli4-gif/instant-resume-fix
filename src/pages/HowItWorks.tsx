import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, TrendingUp, FileCheck, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Resume",
      description: "Simply drag and drop your resume in PDF or DOCX format. Our secure platform ensures your data is protected throughout the process.",
    },
    {
      icon: Sparkles,
      title: "AI Analysis",
      description: "Our advanced AI algorithms scan your resume for keywords, formatting, ATS compatibility, grammar, and industry best practices in seconds.",
    },
    {
      icon: TrendingUp,
      title: "Get Actionable Insights",
      description: "Receive a comprehensive report with your resume score, strengths, weaknesses, keyword suggestions, and personalized recommendations for improvement.",
    },
  ];

  const features = [
    {
      icon: FileCheck,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems used by 98% of Fortune 500 companies.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get detailed feedback in under 30 seconds. No waiting, no hassle.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your resume data is encrypted and never shared. We respect your privacy.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your resume in three simple steps with our AI-powered analysis platform
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Steps Section */}
          <div className="max-w-4xl mx-auto space-y-12 mb-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="rounded-full bg-gradient-primary w-16 h-16 flex items-center justify-center shadow-elegant">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <Card className="flex-1 border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-muted-foreground">
                Powerful features designed to give you the competitive edge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <Card className="border-border shadow-elegant bg-gradient-primary">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Upload your resume now and discover how you can improve it to land more interviews
                </p>
                <Link to="/analyze">
                  <Button size="lg" variant="secondary" className="shadow-elegant hover:scale-105 transition-transform text-lg px-8">
                    Analyze Your Resume
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
