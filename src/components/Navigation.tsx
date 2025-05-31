
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-vevilo-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 vevilo-gradient rounded-lg"></div>
            <span className="text-2xl font-bold vevilo-gradient-text">VEVILO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`transition-colors hover:text-vevilo-magenta ${
                  currentPage === item.id ? 'text-vevilo-magenta' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => onPageChange('portal')}
              className="vevilo-gradient hover:opacity-90 transition-opacity"
            >
              Client Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-vevilo-purple/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left transition-colors hover:text-vevilo-magenta ${
                    currentPage === item.id ? 'text-vevilo-magenta' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onPageChange('portal');
                  setIsMenuOpen(false);
                }}
                className="vevilo-gradient hover:opacity-90 transition-opacity w-fit"
              >
                Client Portal
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
