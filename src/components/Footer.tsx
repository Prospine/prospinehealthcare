import { Separator } from '@/components/ui/separator';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Spine Care',
    'Physiotherapy',
    'Medical Devices',
    'Digital Health',
    'Corporate Wellness',
  ];

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PROSPINE</h3>
                <p className="text-sm text-background/70">HEALTHCARE</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Innovating non-surgical spine and healthcare solutions through advanced technology 
              and compassionate care.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="text-background/80">Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-background/80">info@prospinehealthcare.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-background/80">+91 (0) 80-XXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-background/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-background/80 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates on healthcare innovations.
            </p>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-background/10 border border-background/20 rounded-md text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/80 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 PROSPINE HEALTHCARE Pvt. Ltd. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <button className="text-background/80 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-background/80 hover:text-primary transition-colors duration-200">
              Terms of Use
            </button>
            <button className="text-background/80 hover:text-primary transition-colors duration-200">
              Healthcare Disclaimer
            </button>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-4 border-t border-background/20">
          <p className="text-background/60 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;