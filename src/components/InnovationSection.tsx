import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Globe, 
  Brain, 
  Smartphone,
  Activity,
  Search,
  ArrowRight,
  Zap
} from 'lucide-react';

const InnovationSection = () => {
  const innovations = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced artificial intelligence algorithms for precise medical diagnostics and treatment recommendations.',
      status: 'In Development',
    },
    {
      icon: Smartphone,
      title: 'IoT Healthcare Devices',
      description: 'Internet of Things enabled medical devices for real-time patient monitoring and data collection.',
      status: 'Active Research',
    },
    {
      icon: Activity,
      title: 'Robotic Rehabilitation',
      description: 'Next-generation robotic systems for precise and personalized rehabilitation therapy.',
      status: 'Clinical Trials',
    },
    {
      icon: Zap,
      title: 'Telemedicine Platforms',
      description: 'Advanced digital platforms connecting patients with healthcare providers globally.',
      status: 'Deployed',
    },
  ];

  const partners = [
    {
      region: 'Global Partners',
      description: 'Collaborating with leading healthcare institutions worldwide',
      icon: Globe,
    },
    {
      region: 'Research Institutions',
      description: 'Joint research programs with top medical universities',
      icon: Search,
    },
    {
      region: 'Technology Companies',
      description: 'Strategic partnerships with healthcare technology leaders',
      icon: Lightbulb,
    },
  ];

  const researchAreas = [
    'Non-invasive Spinal Treatment Technologies',
    'Digital Health Platform Development',
    'Wearable Medical Device Innovation',
    'AI-driven Healthcare Analytics',
    'Remote Patient Monitoring Systems',
    'Precision Medicine Applications',
  ];

  return (
    <section id="innovation" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovation & <span className="text-primary">R&D</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of healthcare through cutting-edge research and technological innovation
          </p>
        </div>

        {/* Innovation Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <Card key={index} className="hover-lift border-none shadow-card group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <innovation.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    innovation.status === 'Deployed' 
                      ? 'bg-green-100 text-green-800' 
                      : innovation.status === 'Clinical Trials'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground">{innovation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration Network */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Global Collaboration Network</h3>
            <p className="text-lg text-muted-foreground">
              Working with partners worldwide to accelerate healthcare innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover-lift border-none shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6">
                    <partner.icon className="h-8 w-8 text-medical-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{partner.region}</h4>
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Active Research Areas</h3>
            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Research Impact</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">15+</div>
                <p className="text-primary-foreground/90">Active Research Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
                <p className="text-primary-foreground/90">International Collaborations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">10,000+</div>
                <p className="text-primary-foreground/90">Patients Impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-medical rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-medical-foreground mb-4">
            Partner with Our Innovation Team
          </h3>
          <p className="text-xl text-medical-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of healthcare through collaborative research and development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-medical hover:bg-white/90">
              Explore Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              View Research Papers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;