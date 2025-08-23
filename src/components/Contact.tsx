import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Github, 
  Calendar,
  MapPin,
  Clock,
  Shield
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your blockchain project? Let's discuss how I can help protect your digital assets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Let's Secure Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I specialize in comprehensive blockchain security assessments, smart contract audits, 
                  and incident response. Whether you're launching a new DeFi protocol or need to investigate 
                  a security incident, I'm here to help.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">smartrogo@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Remote / Global</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Available 24/7 for incidents</span>
                  </div>
                </div>

                {/* Services */}
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Services Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Smart Contract Audits",
                      "Security Assessments", 
                      "Incident Response",
                      "Code Reviews",
                      "Security Consulting",
                      "Penetration Testing"
                    ].map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/70 text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" }, 
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Mail, href: "mailto:smartrogo@gmail.com", label: "Email" }
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="hover:shadow-glow transition-smooth"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <social.icon className="w-4 h-4" />
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:shadow-glow transition-smooth bg-blue-500/10 border-blue-500/30"
                      onClick={() => window.open('https://t.me/Smartrogo', '_blank')}
                    >
                      <span className="text-sm font-mono">TG</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Response Time</h3>
                  <p className="text-2xl font-bold text-accent mb-1">&lt; 24 Hours</p>
                  <p className="text-sm text-muted-foreground">For all audit inquiries</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="bg-input/50 border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-input/50 border-border/50 focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-input/50 border-border/50 focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company" className="bg-input/50 border-border/50 focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Type</label>
                <select className="w-full p-2 bg-input/50 border border-border/50 rounded-md focus:border-primary focus:ring-1 focus:ring-primary text-foreground">
                  <option value="audit">Smart Contract Audit</option>
                  <option value="assessment">Security Assessment</option>
                  <option value="incident">Incident Response</option>
                  <option value="consulting">Security Consulting</option>
                  <option value="pentest">Penetration Testing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project and security requirements..."
                  className="bg-input/50 border-border/50 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button className="w-full gradient-primary hover:shadow-glow transition-smooth">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Your information is kept confidential and secure. I'll respond within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;