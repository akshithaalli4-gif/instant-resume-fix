import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Upload, Sparkles, TrendingUp, CheckCircle, FileText, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Simply upload your resume in PDF or DOCX format and let our AI do the rest.",
    },
    {
      icon: Sparkles,
      title: "AI Analysis",
      description: "Advanced algorithms analyze your resume for keywords, formatting, and ATS compatibility.",
    },
    {
      icon: TrendingUp,
      title: "Instant Insights",
      description: "Get actionable feedback on strengths, weaknesses, and improvement opportunities.",
    },
  ];

  const benefits = [
    "Improve ATS compatibility",
    "Optimize keyword usage",
    "Enhance formatting and structure",
    "Identify grammar and spelling issues",
    "Boost your interview chances",
    "Stand out from the competition",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                AI-Powered Resume Analysis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get Instant Feedback on Your Resume Using{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">AI</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your resume with intelligent insights. Our AI analyzes your resume against industry standards 
                and provides personalized recommendations to help you land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/analyze">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant text-lg px-8 py-6">
                    <Upload className="mr-2 h-5 w-5" />
                    Analyze Your Resume
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to improve your resume and increase your chances of landing interviews
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
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
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose AI Resume Analyzer?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI-powered platform provides comprehensive analysis that goes beyond simple spell-checking. 
                  Get professional insights that actually help you land interviews.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="border-border shadow-card">
                  <CardContent className="pt-6">
                    <FileText className="h-8 w-8 text-primary mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">95%</div>
                    <p className="text-sm text-muted-foreground">ATS Pass Rate</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-card mt-8">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-8 w-8 text-success mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">10K+</div>
                    <p className="text-sm text-muted-foreground">Resumes Analyzed</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-card">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 text-warning mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">3x</div>
                    <p className="text-sm text-muted-foreground">More Interviews</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-card mt-8">
                  <CardContent className="pt-6">
                    <Sparkles className="h-8 w-8 text-primary mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                    <p className="text-sm text-muted-foreground">AI Available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Resume?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Join thousands of professionals who have improved their resumes and landed their dream jobs
              </p>
              <Link to="/analyze">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-elegant hover:scale-105 transition-transform">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Start Analyzing Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
