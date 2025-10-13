import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-image1.jpg";
import trustImage from "@/assets/hero-bg.jpg";
import wavebg from "@/assets/wave-bg.jpg";
import { Camera, FileText, Send, Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 xl:pt-28 pb-16 bg-hero-bg bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-[34px] lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground !leading-normal text-center md:text-left">
                Report your damage <span className="text-primary">instantly</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-center md:text-left">
                Skado makes car damage reporting fast and reliable.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/report">
                  <Button variant="hero" size="lg" className="h-12 lg:h-14 px-8 lg:px-10">
                    Start Report
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="h-12 lg:h-14 px-8 lg:px-10">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>No sign-up required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>2-min process</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Car damage reporting"
                className="w-[75%] mx-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to complete your damage report
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                Capture Damage Photo
              </h3>
              <p className="text-muted-foreground">
                Simply take photos of the damage using your phone camera
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                Auto-Generate Report
              </h3>
              <p className="text-muted-foreground">
                Our AI instantly creates a detailed damage report for you
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                Send Securely
              </h3>
              <p className="text-muted-foreground">
                Submit your report directly to your insurance company
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 md:py-20 bg-[#f3f4f6] text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <img 
                src={trustImage} 
                alt="Professional service"
                className="w-full xl:w-[85%] rounded-sm mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-primary rounded-full text-white font-medium text-sm mb-6">
                Trusted by Thousands
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground ">
                As efficient as a tech startup — as trustworthy as an insurance company
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Skado combines cutting-edge technology with insurance-grade reliability to give you the best of both worlds.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 text-foreground">Bank-Level Security</h3>
                    <p className="text-muted-foreground">Your data is encrypted and protected</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 text-foreground">Lightning Fast</h3>
                    <p className="text-muted-foreground">Complete reports in under 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-14 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join thousands who've simplified their accident reporting process
            </p>
            <Link to="/report">
              <Button variant="hero" size="lg">
                Start Your Report Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;