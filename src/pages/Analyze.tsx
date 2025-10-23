import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Analyze = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis Complete!",
        description: "Your resume has been analyzed successfully.",
      });
    }, 3000);
  };

  const mockResults = {
    score: 78,
    strengths: [
      "Strong action verbs throughout the resume",
      "Clear and concise professional summary",
      "Quantifiable achievements in work experience",
      "Well-organized sections with consistent formatting",
    ],
    weaknesses: [
      "Missing keywords for ATS optimization",
      "Skills section could be more detailed",
      "Some bullet points lack measurable outcomes",
    ],
    keywords: [
      "Project Management",
      "Data Analysis",
      "Leadership",
      "Strategic Planning",
      "Team Collaboration",
    ],
    suggestions: [
      "Add more industry-specific keywords to improve ATS compatibility",
      "Include metrics in all achievement statements (e.g., percentages, dollar amounts)",
      "Consider adding a certifications section if applicable",
      "Tailor your resume to each specific job application",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!showResults ? (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Analyze Your Resume
                </h1>
                <p className="text-lg text-muted-foreground">
                  Upload your resume and get instant AI-powered feedback
                </p>
              </div>

              <Card className="border-border shadow-elegant animate-scale-in">
                <CardHeader>
                  <CardTitle>Upload Resume</CardTitle>
                  <CardDescription>
                    Supported formats: PDF, DOCX (Max size: 5MB)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                    <div className="flex flex-col items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground mb-1">
                          Drop your resume here or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PDF or DOCX files only
                        </p>
                      </div>
                      <Button
                        size="lg"
                        onClick={handleFileUpload}
                        disabled={isAnalyzing}
                        className="bg-gradient-primary hover:opacity-90 transition-opacity"
                      >
                        {isAnalyzing ? (
                          <>
                            <Sparkles className="mr-2 h-5 w-5 animate-pulse-glow" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-5 w-5" />
                            Upload Resume
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {isAnalyzing && (
                    <div className="mt-6 space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Analyzing your resume...</span>
                        <span className="text-primary font-medium">Processing</span>
                      </div>
                      <Progress value={66} className="h-2" />
                      <p className="text-sm text-muted-foreground text-center">
                        Our AI is analyzing formatting, keywords, and ATS compatibility
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    Analysis Results
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Here's what our AI found in your resume
                  </p>
                </div>

                {/* Score Card */}
                <Card className="border-border shadow-elegant mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Resume Score</h3>
                        <p className="text-muted-foreground">Overall assessment of your resume</p>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {mockResults.score}
                        </div>
                        <p className="text-sm text-muted-foreground">out of 100</p>
                      </div>
                    </div>
                    <Progress value={mockResults.score} className="h-3" />
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-success">
                        <CheckCircle className="h-5 w-5" />
                        Strengths
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mockResults.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Weaknesses */}
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-warning">
                        <AlertCircle className="h-5 w-5" />
                        Areas to Improve
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mockResults.weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-warning mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground">{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Keywords */}
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Detected Keywords
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {mockResults.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Suggestions */}
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mockResults.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    size="lg"
                    onClick={() => setShowResults(false)}
                    variant="outline"
                  >
                    Analyze Another Resume
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analyze;
