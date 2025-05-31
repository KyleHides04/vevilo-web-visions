
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Eye } from 'lucide-react';

interface PortfolioPageProps {
  onPageChange: (page: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onPageChange }) => {
  const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "Corporate Website",
      description: "Modern B2B technology platform with advanced integrations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 2,
      title: "EcoStore",
      category: "E-commerce",
      description: "Sustainable products marketplace with custom shopping experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Shopify", "Custom Design", "Payment Integration"]
    },
    {
      id: 3,
      title: "HealthPlus Clinic",
      category: "Healthcare",
      description: "Patient portal with appointment booking and telemedicine",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "HIPAA Compliant", "Real-time Chat"]
    },
    {
      id: 4,
      title: "ArtisanCraft",
      category: "Portfolio",
      description: "Creative showcase for handmade crafts and artisan products",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      tags: ["WordPress", "Custom Theme", "Gallery"]
    },
    {
      id: 5,
      title: "FitnessPro",
      category: "Fitness App",
      description: "Personal training platform with workout tracking",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      tags: ["React Native", "API Integration", "Analytics"]
    },
    {
      id: 6,
      title: "RestaurantFlow",
      category: "Restaurant",
      description: "Online ordering system with table reservation management",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tags: ["Angular", "POS Integration", "Mobile App"]
    }
  ];

  const categories = ["All", "Corporate Website", "E-commerce", "Healthcare", "Portfolio", "Fitness App", "Restaurant"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="vevilo-gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest projects and the digital experiences we've crafted for our clients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "vevilo-gradient" 
                : "border-vevilo-purple/50 text-gray-300 hover:bg-vevilo-purple/10"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="vevilo-card vevilo-hover group overflow-hidden">
              <div className="relative">
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 vevilo-gradient rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="vevilo-gradient">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-vevilo-blue">{item.category}</span>
                  <Code className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-vevilo-purple/20 text-vevilo-blue rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-12 vevilo-card rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Portfolio?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="vevilo-gradient hover:opacity-90 transition-opacity"
            onClick={() => onPageChange('contact')}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
