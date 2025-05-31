
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Server, Mail, Globe, Check, Star } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange }) => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Design & Development",
      description: "Custom websites built with cutting-edge technologies",
      features: [
        "Responsive Design",
        "Modern Frameworks (React, Vue, Angular)",
        "SEO Optimization",
        "Performance Optimization",
        "Custom CMS Integration",
        "E-commerce Solutions"
      ],
      highlight: "Most Popular"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Hosting",
      description: "Fast, reliable hosting solutions for all website types",
      features: [
        "99.9% Uptime Guarantee",
        "SSL Certificates Included",
        "Daily Backups",
        "Content Delivery Network",
        "24/7 Monitoring",
        "One-Click WordPress Install"
      ]
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Hosting",
      description: "Professional email solutions for your business",
      features: [
        "Custom Domain Email",
        "Advanced Spam Protection",
        "Mobile Sync",
        "Calendar & Contacts",
        "Large Storage Capacity",
        "Business Collaboration Tools"
      ]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "VPS Hosting",
      description: "High-performance virtual private servers",
      features: [
        "Dedicated Resources",
        "Root Access",
        "Choice of Operating Systems",
        "Scalable Resources",
        "DDoS Protection",
        "24/7 Technical Support"
      ],
      highlight: "Enterprise"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="vevilo-gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to power your online success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="vevilo-card vevilo-hover relative overflow-hidden">
              {service.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 vevilo-gradient rounded-full text-sm font-semibold">
                  {service.highlight}
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 vevilo-gradient rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </div>
                </div>
                <p className="text-gray-400 text-lg">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-vevilo-blue flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6 vevilo-gradient hover:opacity-90 transition-opacity"
                  onClick={() => onPageChange('pricing')}
                >
                  View Pricing
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12">
            <span className="vevilo-gradient-text">Our Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your needs and goals" },
              { step: "02", title: "Planning", desc: "We create a detailed project roadmap" },
              { step: "03", title: "Development", desc: "We build your solution with precision" },
              { step: "04", title: "Launch", desc: "We deploy and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 vevilo-gradient rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="vevilo-gradient hover:opacity-90 transition-opacity"
              onClick={() => onPageChange('contact')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-vevilo-purple text-white hover:bg-vevilo-purple/10"
              onClick={() => onPageChange('portfolio')}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
