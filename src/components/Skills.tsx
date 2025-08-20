import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Code2, 
  Search, 
  Bug, 
  Lock, 
  Database,
  Network,
  FileText,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Auditing",
      description: "Comprehensive smart contract and protocol security analysis",
      skills: [
        "Smart Contract Auditing",
        "Code Review",
        "Vulnerability Assessment", 
        "Security Architecture Review",
        "Threat Modeling"
      ]
    },
    {
      icon: Code2,
      title: "Blockchain Development",
      description: "Deep understanding of blockchain technology and development",
      skills: [
        "Solidity",
        "Rust", 
        "JavaScript/TypeScript",
        "Python",
        "Go"
      ]
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Identifying and exploiting security vulnerabilities",
      skills: [
        "Web3 Penetration Testing",
        "DeFi Protocol Testing",
        "Smart Contract Exploitation",
        "Social Engineering",
        "Network Security Testing"
      ]
    },
    {
      icon: Search,
      title: "Forensics & Analysis",
      description: "Blockchain transaction analysis and incident investigation",
      skills: [
        "On-chain Analysis",
        "Transaction Tracing",
        "Incident Response",
        "Digital Forensics",
        "Compliance Auditing"
      ]
    },
    {
      icon: Database,
      title: "Blockchain Platforms",
      description: "Multi-chain expertise across various blockchain ecosystems",
      skills: [
        "Ethereum",
        "Binance Smart Chain",
        "Polygon",
        "Avalanche",
        "Arbitrum"
      ]
    },
    {
      icon: Zap,
      title: "Security Tools",
      description: "Proficiency with industry-standard security tools",
      skills: [
        "Mythril",
        "Slither",
        "Echidna",
        "Manticore",
        "Securify"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of blockchain security and auditing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:shadow-glow transition-smooth hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <category.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2 bg-secondary/70 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Smart Contract Security", level: 95 },
              { name: "Blockchain Analysis", level: 90 },
              { name: "Penetration Testing", level: 85 },
              { name: "Incident Response", level: 88 }
            ].map((skill, index) => (
              <Card key={index} className="bg-card/30 border-border/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;