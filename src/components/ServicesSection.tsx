import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Monitor, 
  Smartphone, 
  Users,
  ArrowRight,
  Activity,
  Shield,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const spineServices = [
    {
      icon: Stethoscope,
      title: 'Non-Surgical Spinal Decompression',
      description: 'Advanced techniques for treating herniated discs and spinal conditions without surgery.',
    },
    {
      icon: Activity,
      title: 'Advanced Manual Therapy',
      description: 'Maitland, McKenzie, Mulligan techniques for comprehensive rehabilitation.',
    },
    {
      icon: Brain,
      title: 'Robotic & Digital Rehab',
      description: 'State-of-the-art robotic systems for precise and effective rehabilitation.',
    },
    {
      icon: Zap,
      title: 'Pain Management',
      description: 'Laser therapy, Shockwave, IFT, and Ultrasound treatments for pain relief.',
    },
    {
      icon: Heart,
      title: 'Women\'s Health & Pelvic Floor',
      description: 'Specialized rehabilitation programs for women\'s health concerns.',
    },
    {
      icon: Shield,
      title: 'Geriatric & Pediatric Rehab',
      description: 'Age-specific rehabilitation programs for optimal patient outcomes.',
    },
  ];

  const techServices = [
    {
      icon: Monitor,
      title: 'Medical Devices',
      description: 'Diagnostic, wearable, and IoT-enabled medical devices for modern healthcare.',
    },
    {
      icon: Smartphone,
      title: 'Digital Health Platforms',
      description: 'Telemedicine, EHR, and AI-based solutions for healthcare delivery.',
    },
    {
      icon: Activity,
      title: 'Preventive Healthcare',
      description: 'Remote monitoring and preventive care solutions for better health outcomes.',
    },
  ];

  const corporateServices = [
    {
      icon: Users,
      title: 'Ergonomic Workshops',
      description: 'Workplace ergonomic assessments and training programs.',
    },
    {
      icon: Shield,
      title: 'Office Syndrome Prevention',
      description: 'Comprehensive programs to prevent work-related health issues.',
    },
    {
      icon: Brain,
      title: 'Public Health Seminars',
      description: 'Educational seminars on health awareness and prevention.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions combining traditional expertise with cutting-edge technology
          </p>
        </div>

        {/* Spine & Physiotherapy Care */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Spine & Physiotherapy Care</h3>
            <p className="text-lg text-muted-foreground">
              Non-surgical spinal treatments and advanced rehabilitation techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spineServices.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-card group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Healthcare Technology & Devices */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Healthcare Technology & Devices</h3>
            <p className="text-lg text-muted-foreground">
              Innovative medical technology and digital health solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-card group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-medical-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate & Public Health Programs */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Corporate & Public Health Programs</h3>
            <p className="text-lg text-muted-foreground">
              Workplace wellness and community health initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-card group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a consultation with our expert team and discover personalized healthcare solutions
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;