import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Users,
  Award,
  Monitor,
  ArrowRight,
  Calendar
} from 'lucide-react';

const AcademySection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Fellowship Programs',
      description: 'Comprehensive fellowship programs in spine care and advanced physiotherapy techniques.',
      duration: '6-12 months',
      level: 'Advanced',
    },
    {
      icon: Award,
      title: 'Certification Courses',
      description: 'Professional certification in specialized areas of healthcare and rehabilitation.',
      duration: '3-6 months',
      level: 'Intermediate',
    },
    {
      icon: Video,
      title: 'Workshops & Webinars',
      description: 'Interactive workshops on office syndrome prevention and spinal rehabilitation.',
      duration: '1-3 days',
      level: 'All Levels',
    },
    {
      icon: Monitor,
      title: 'Online Learning Portal',
      description: 'Digital platform for continuous learning and skill development (Coming Soon).',
      duration: 'Self-paced',
      level: 'All Levels',
    },
  ];

  const specializations = [
    'Office Syndrome Prevention',
    'Spinal Rehabilitation Techniques',
    'Healthy Computing Practices',
    'Manual Therapy Methods',
    'Pain Management Strategies',
    'Ergonomic Assessment',
  ];

  const partnerships = [
    'Leading Hospitals & Medical Centers',
    'Healthcare Institutions',
    'Corporate Organizations',
    'International Medical Associations',
  ];

  return (
    <section id="academy" className="section-padding bg-medical-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academy & <span className="text-medical">Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional development programs designed to advance healthcare knowledge and expertise
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift border-none shadow-card group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-medical rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="h-8 w-8 text-medical-foreground" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-medical bg-medical-light px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Duration: {program.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Training Specializations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <BookOpen className="h-5 w-5 text-medical mr-3" />
                  <span className="text-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Institutional Partnerships</h3>
            <div className="space-y-4">
              {partnerships.map((partner, index) => (
                <div key={index} className="flex items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-medical rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-medical-foreground mb-4">
            Advance Your Healthcare Career
          </h3>
          <p className="text-xl text-medical-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our academy and gain expertise in cutting-edge healthcare technologies and techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-medical hover:bg-white/90">
              View Training Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Expert Faculty</h4>
            <p className="text-muted-foreground">Learn from industry-leading healthcare professionals</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-medical-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Certified Programs</h4>
            <p className="text-muted-foreground">Internationally recognized certifications and credentials</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Hands-on Training</h4>
            <p className="text-muted-foreground">Practical experience with latest medical technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;