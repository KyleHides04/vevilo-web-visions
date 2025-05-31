import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Mail, Globe, Star, Users, Zap, Shield, Gamepad2 } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Design & Development",
      description: "Custom websites built with modern technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Hosting",
      description: "Fast, reliable hosting packages"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "VPS Hosting",
      description: "High-performance virtual private servers"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Hosting",
      description: "Professional email solutions for your business"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Server Hosting",
      description: "Dedicated gaming servers for optimal performance"
    }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, text: "Lightning Fast Performance" },
    { icon: <Shield className="w-6 h-6" />, text: "Enterprise Security" },
    { icon: <Users className="w-6 h-6" />, text: "24/7 Expert Support" },
    { icon: <Star className="w-6 h-6" />, text: "99.9% Uptime Guarantee" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-vevilo-radial"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="vevilo-gradient-text">Websites That</span>
              <br />
              <span className="text-white">Actually Work.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Clean. Crisp. Code.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              We build websites that not only look stunning but perform flawlessly. 
              From design to hosting, we've got your digital presence covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="vevilo-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                onClick={() => onPageChange('contact')}
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-vevilo-purple text-white hover:bg-vevilo-purple/10 text-lg px-8 py-6"
                onClick={() => onPageChange('portfolio')}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-vevilo-purple/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-vevilo-magenta/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-vevilo-blue/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-vevilo-dark-alt/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 vevilo-gradient rounded-lg mb-4">
                  {feature.icon}
                </div>
                <p className="text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="vevilo-gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to establish and maintain a powerful online presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="vevilo-card vevilo-hover group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 vevilo-gradient rounded-lg mb-6 group-hover:animate-glow">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-vevilo-purple text-white hover:bg-vevilo-purple/10"
              onClick={() => onPageChange('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 vevilo-gradient opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your digital vision to life
          </p>
          <Button 
            size="lg" 
            className="vevilo-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
            onClick={() => onPageChange('contact')}
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
