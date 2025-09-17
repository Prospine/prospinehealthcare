import { Users, Eye, Target, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const leadership = [
    {
      name: 'Dr. Pranav Kumar',
      title: 'Founder & Director',
      description: 'Leading expert in non-surgical spine care with extensive experience in advanced physiotherapy techniques.',
    },
    {
      name: 'Pallavi Singh',
      title: 'Co-Founder & Director',
      description: 'Healthcare technology innovator focused on digital health solutions and medical device development.',
    },
    {
      name: 'Priya Ranjan Kumar',
      title: 'Co-Founder & Director (USA)',
      description: 'International healthcare consultant driving global partnerships and expansion strategies.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">PROSPINE HEALTHCARE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Incorporated in Bangalore, India, we are pioneers in non-invasive spinal healthcare, 
            combining advanced technology with compassionate care to transform lives globally.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="hover-lift border-none shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To lead in non-invasive spinal healthcare and digital health innovation, 
                making advanced treatment accessible to everyone, everywhere.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-none shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-medical mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To combine advanced technology, physiotherapy, and training to transform lives 
                through innovative, patient-centered healthcare solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h3>
            <p className="text-lg text-muted-foreground">
              Experienced professionals driving innovation in healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-lift border-none shadow-card">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{leader.name}</h4>
                  <p className="text-primary font-semibold mb-4">{leader.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-gradient-medical rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-medical-foreground mb-6">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slide-in">
              <div className="text-4xl font-bold text-medical-foreground mb-2">2023</div>
              <p className="text-medical-foreground/90">Company Incorporation in Bangalore</p>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-medical-foreground mb-2">2024</div>
              <p className="text-medical-foreground/90">Advanced Technology Launches</p>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-medical-foreground mb-2">2024+</div>
              <p className="text-medical-foreground/90">Global Collaborations</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-primary mr-2" />
            <span className="text-lg font-semibold text-foreground">Headquartered in Bangalore, India</span>
          </div>
          <p className="text-muted-foreground">
            Serving patients globally with regional centers in Bhagalpur, Siliguri, and expanding worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;