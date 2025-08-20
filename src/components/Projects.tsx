import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DeFi Protocol Security Audit",
      description: "Comprehensive security audit of a $50M TVL lending protocol, identifying 8 critical vulnerabilities including reentrancy attacks and price manipulation exploits.",
      tags: ["Smart Contract Audit", "DeFi", "Solidity", "Security"],
      status: "Completed",
      findings: { critical: 3, high: 5, medium: 12, low: 8 },
      technologies: ["Ethereum", "Solidity", "Mythril", "Slither"],
      impact: "Prevented potential loss of $2M+ in user funds"
    },
    {
      title: "Cross-Chain Bridge Analysis",
      description: "Security assessment of a multi-chain bridge protocol, focusing on validator consensus mechanisms and cross-chain message verification.",
      tags: ["Bridge Security", "Multi-chain", "Consensus", "Validation"],
      status: "Completed",
      findings: { critical: 1, high: 3, medium: 7, low: 5 },
      technologies: ["Ethereum", "Polygon", "Avalanche", "Go"],
      impact: "Enhanced security for $100M+ in cross-chain transactions"
    },
    {
      title: "NFT Marketplace Penetration Test",
      description: "Full-scope penetration testing of an NFT marketplace, including smart contract vulnerabilities and web application security flaws.",
      tags: ["Penetration Testing", "NFT", "Web3", "Smart Contracts"],
      status: "Completed", 
      findings: { critical: 2, high: 4, medium: 9, low: 6 },
      technologies: ["Ethereum", "IPFS", "React", "Node.js"],
      impact: "Secured platform handling 10K+ NFT transactions daily"
    },
    {
      title: "Blockchain Forensics Investigation",
      description: "On-chain investigation of a $5M hack, tracing stolen funds through multiple protocols and identifying the attack vector.",
      tags: ["Forensics", "Investigation", "On-chain Analysis", "Incident Response"],
      status: "Completed",
      findings: { critical: 1, high: 2, medium: 4, low: 3 },
      technologies: ["Chainalysis", "Etherscan", "Python", "Graph Analysis"],
      impact: "Recovered 60% of stolen funds, identified attack vector"
    },
    {
      title: "Layer 2 Protocol Security Review",
      description: "Security architecture review of a new Layer 2 scaling solution, focusing on rollup mechanisms and fraud proof systems.",
      tags: ["Layer 2", "Rollups", "Scaling", "Architecture Review"],
      status: "In Progress",
      findings: { critical: 0, high: 2, medium: 5, low: 3 },
      technologies: ["Optimistic Rollups", "Zero-Knowledge", "Solidity", "Go"],
      impact: "Ensuring secure launch of high-throughput L2 solution"
    },
    {
      title: "DAO Governance Security Assessment",
      description: "Comprehensive security assessment of DAO governance mechanisms, including voting systems and treasury management.",
      tags: ["DAO", "Governance", "Voting", "Treasury"],
      status: "Completed",
      findings: { critical: 1, high: 3, medium: 8, low: 4 },
      technologies: ["Snapshot", "Solidity", "Multi-sig", "Timelock"],
      impact: "Secured $25M+ in DAO treasury assets"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-destructive';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-accent';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world security assessments and audits that have protected millions in digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:shadow-glow transition-smooth hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={project.status === 'Completed' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {project.status === 'Completed' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 mr-1" />
                    )}
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Security Findings */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    Security Findings
                  </h4>
                  <div className="flex space-x-2">
                    {Object.entries(project.findings).map(([severity, count]) => (
                      <div key={severity} className="flex items-center space-x-1">
                        <div className={`w-3 h-3 rounded-full ${getSeverityColor(severity)}`} />
                        <span className="text-xs text-muted-foreground capitalize">
                          {severity}: {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-accent/10 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-foreground mb-1">Impact</h4>
                  <p className="text-xs text-muted-foreground">{project.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;