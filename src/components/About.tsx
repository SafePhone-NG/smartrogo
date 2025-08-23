import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Search, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Audits Completed", value: "150+" },
    { icon: Code, label: "Smart Contracts", value: "500+" },
    { icon: Search, label: "Vulnerabilities Found", value: "2000+" },
    { icon: Award, label: "Years Experience", value: "10+" },
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Certified Information Security Manager (CISM)",
    "Blockchain Security Professional",
    "Smart Contract Auditor Certification",
    "Certified Hedera Developer"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about securing the decentralized future through rigorous testing and analysis. 
            I also create content and localize complex blockchain concepts into Hausa for Hausa-speaking 
            communities around the globe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated blockchain security specialist with over 10 years of cybersecurity experience, 
              I've mastered the art of identifying vulnerabilities in smart contracts and DeFi protocols. 
              My expertise spans digital forensic investigations, incident response, and comprehensive security 
              assessments across multiple blockchain ecosystems including Ethereum, Binance Smart Chain, 
              Polygon, and emerging Layer 2 solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I combine traditional cybersecurity principles with cutting-edge blockchain technology and 
              digital forensic methodologies to provide comprehensive security assessments. My background 
              in cybersecurity and digital forensic investigation enables me to not only identify vulnerabilities 
              but also trace attack vectors and provide detailed forensic analysis when incidents occur.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Smart Contract Auditing",
                  "DeFi Protocol Security",
                  "Digital Forensic Investigation",
                  "Blockchain Forensics",
                  "Penetration Testing",
                  "Security Architecture",
                  "Incident Response"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-smooth">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:shadow-glow transition-smooth">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;