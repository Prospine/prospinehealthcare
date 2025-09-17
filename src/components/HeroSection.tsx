import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Award, Stethoscope } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  const handleExploreServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerWithUs = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Innovating{' '}
            <span className="text-primary-glow">Non-Surgical</span>
            <br />
            Spine & Healthcare Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Combining advanced technology, physiotherapy, and training to transform lives through 
            non-invasive spinal healthcare and digital health innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={handleExploreServices}
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 glass-effect text-white border-white/30 hover:bg-white/20"
              onClick={handlePartnerWithUs}
            >
              Partner With Us
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center justify-center mb-4">
                <Stethoscope className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Spine & Rehabilitation</h3>
              <p className="text-white/80">Advanced non-surgical spinal decompression and physiotherapy</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Medical Technology</h3>
              <p className="text-white/80">Cutting-edge devices and digital health platforms</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-medical" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Training & Academy</h3>
              <p className="text-white/80">Professional development and certification programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;