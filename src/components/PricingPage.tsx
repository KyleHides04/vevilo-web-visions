
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

interface PricingPageProps {
  onPageChange: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onPageChange }) => {
  const webDesignPlans = [
    {
      name: "Starter",
      price: "$1,299",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5-page responsive website",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form",
        "3 months support",
        "Social media integration"
      ]
    },
    {
      name: "Professional",
      price: "$2,799",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 15 pages",
        "Custom design",
        "Advanced SEO",
        "Content management system",
        "E-commerce integration",
        "6 months support",
        "Analytics setup",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Custom CMS",
        "12 months support",
        "Training included",
        "Priority support"
      ]
    }
  ];

  const hostingPlans = [
    {
      name: "Basic Hosting",
      price: "$9.99",
      period: "/month",
      description: "Perfect for personal websites and blogs",
      features: [
        "10GB SSD Storage",
        "Unlimited Bandwidth",
        "1 Website",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support"
      ]
    },
    {
      name: "Business Hosting",
      price: "$19.99",
      period: "/month",
      description: "Great for business websites and online stores",
      features: [
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "5 Websites",
        "Free SSL Certificate",
        "Daily Backups",
        "CDN Included",
        "Email Hosting",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "VPS Hosting",
      price: "$49.99",
      period: "/month",
      description: "High-performance virtual private server",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "160GB SSD Storage",
        "Root Access",
        "Choice of OS",
        "DDoS Protection",
        "Managed Updates",
        "24/7 Monitoring"
      ]
    }
  ];

  const emailPlans = [
    {
      name: "Professional Email",
      price: "$5.99",
      period: "/user/month",
      description: "Professional email for your business",
      features: [
        "Custom domain email",
        "50GB mailbox storage",
        "Mobile sync",
        "Spam protection",
        "Calendar & contacts",
        "24/7 support"
      ]
    },
    {
      name: "Business Email Plus",
      price: "$12.99",
      period: "/user/month",
      description: "Advanced email with collaboration tools",
      features: [
        "Custom domain email",
        "100GB mailbox storage",
        "Advanced spam protection",
        "Shared calendars",
        "Team collaboration",
        "Video conferencing",
        "File sharing",
        "Priority support"
      ],
      popular: true
    }
  ];

  const PricingCard = ({ plan, category }: { plan: any, category: string }) => (
    <Card className={`vevilo-card vevilo-hover relative ${plan.popular ? 'pulse-border' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 vevilo-gradient rounded-full text-sm font-semibold flex items-center">
          <Star className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
        <div className="text-3xl font-bold vevilo-gradient-text">
          {plan.price}
          {plan.period && <span className="text-lg text-gray-400">{plan.period}</span>}
        </div>
        <p className="text-gray-400">{plan.description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-vevilo-blue flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${plan.popular ? 'vevilo-gradient' : 'border-vevilo-purple text-white hover:bg-vevilo-purple/10'}`}
          variant={plan.popular ? 'default' : 'outline'}
          onClick={() => onPageChange('contact')}
        >
          {category === 'design' ? 'Get Quote' : 'Choose Plan'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="vevilo-gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing for all our services. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Web Design Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="vevilo-gradient-text">Website Design & Development</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {webDesignPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="design" />
            ))}
          </div>
        </div>

        {/* Hosting Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="vevilo-gradient-text">Hosting Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="hosting" />
            ))}
          </div>
        </div>

        {/* Email Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="vevilo-gradient-text">Email Hosting</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emailPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="email" />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="vevilo-gradient-text">Frequently Asked Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                q: "Do you offer custom pricing for large projects?",
                a: "Yes, we provide custom quotes for enterprise projects and large-scale implementations."
              },
              {
                q: "What's included in the support?",
                a: "Our support includes technical assistance, bug fixes, and guidance on using your website or hosting service."
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade your hosting plan at any time, and we'll handle the migration for you."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee on all hosting services and discuss refund policies for custom development projects."
              }
            ].map((faq, index) => (
              <div key={index} className="vevilo-card p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center vevilo-card p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <Button 
            size="lg" 
            className="vevilo-gradient hover:opacity-90 transition-opacity"
            onClick={() => onPageChange('contact')}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
