import { Button } from "@/components/ui/button";
import { Shield, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-bg opacity-80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-primary/30 rounded-lg animate-float" />
      <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-primary/20 rounded-full animate-glow" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Blockchain</span>
            <br />
            <span className="text-foreground">Security Expert</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Protecting digital assets and smart contracts through comprehensive security audits, 
            vulnerability assessments, and blockchain forensics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;