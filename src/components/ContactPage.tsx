
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@vevilo.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Tech Street, Digital City",
      description: "Our office location"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 2 hours",
      description: "Average response time"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="vevilo-gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your needs and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="vevilo-card">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Send className="w-6 h-6 mr-2" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-design">Website Design & Development</SelectItem>
                        <SelectItem value="hosting">Website Hosting</SelectItem>
                        <SelectItem value="email">Email Hosting</SelectItem>
                        <SelectItem value="vps">VPS Hosting</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1k">Under $1,000</SelectItem>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-plus">$25,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white min-h-[120px]"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                    className="rounded border-vevilo-purple/30"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Subscribe to our newsletter for updates and tips
                  </label>
                </div>

                <Button type="submit" className="w-full vevilo-gradient hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="vevilo-card vevilo-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 vevilo-gradient rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-vevilo-blue font-medium">{info.content}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="vevilo-card">
              <CardHeader>
                <CardTitle className="text-xl text-white">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Get the latest tips, tutorials, and updates delivered to your inbox.
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                  />
                  <Button className="vevilo-gradient">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="vevilo-card">
              <CardHeader>
                <CardTitle className="text-xl text-white">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="pt-2 border-t border-vevilo-purple/20">
                  <span className="text-vevilo-blue text-sm">
                    Emergency support available 24/7 for hosting clients
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
