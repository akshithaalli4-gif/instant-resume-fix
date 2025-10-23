import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower job seekers worldwide with AI-driven insights that transform resumes and accelerate career success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to provide the most accurate and actionable resume feedback available.",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Every feature is designed with you in mind, ensuring a simple, effective, and results-driven experience.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to maintaining the highest standards in resume analysis and career advancement tools.",
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
                About Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Revolutionizing resume optimization with artificial intelligence
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Story Section */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AI Resume Analyzer was born from a simple observation: talented professionals were being overlooked 
                  because their resumes didn't match what Applicant Tracking Systems (ATS) were programmed to find.
                </p>
                <p>
                  We believed that everyone deserves a fair chance to showcase their skills and experience. That's why 
                  we created an AI-powered platform that helps job seekers understand exactly how to optimize their 
                  resumes for both human recruiters and automated systems.
                </p>
                <p>
                  Today, we've helped thousands of professionals improve their resumes, increase their interview rates, 
                  and land their dream jobs. Our mission continues to evolve as we incorporate the latest AI advancements 
                  to provide even better insights and recommendations.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="pt-6">
                      <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technology Section */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Card className="border-border shadow-elegant bg-gradient-primary">
                <CardContent className="pt-10 pb-10">
                  <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                    Powered by Advanced AI
                  </h2>
                  <div className="max-w-2xl mx-auto text-lg text-primary-foreground/90 leading-relaxed space-y-4">
                    <p>
                      Our platform uses state-of-the-art natural language processing and machine learning algorithms 
                      to analyze resumes with unprecedented accuracy.
                    </p>
                    <p>
                      We continuously train our AI on thousands of successful resumes across various industries, 
                      ensuring our recommendations stay current with evolving hiring trends and ATS requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "10K+", label: "Resumes Analyzed" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "3x", label: "More Interviews" },
                { value: "24/7", label: "AI Availability" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="border-border shadow-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
