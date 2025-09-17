import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building,
  Globe,
  Linkedin,
  Youtube,
  Instagram
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Building,
      title: 'Corporate Office',
      details: ['Bangalore, India', 'Healthcare Innovation Hub'],
    },
    {
      icon: MapPin,
      title: 'Regional Centers',
      details: ['Bhagalpur', 'Siliguri', 'Expanding Globally'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to learn more about our healthcare solutions and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button type="submit" variant="medical" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-card hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Direct Contact */}
            <Card className="border-none shadow-card bg-gradient-medical">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-medical-foreground mb-6">Get Direct Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 text-medical-foreground mr-3" />
                    <span className="text-medical-foreground">info@prospinehealthcare.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-5 w-5 text-medical-foreground mr-3" />
                    <span className="text-medical-foreground">+91 (0) 80-XXXXXXX</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="h-5 w-5 text-medical-foreground mr-3" />
                    <span className="text-medical-foreground">www.prospinehealthcare.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-none shadow-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-muted rounded-lg">
          <h4 className="text-lg font-semibold text-foreground mb-2">Healthcare Disclaimer</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information provided on this website is for educational purposes only and is not intended 
            as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice 
            of your physician or other qualified healthcare provider with any questions you may have regarding 
            a medical condition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;