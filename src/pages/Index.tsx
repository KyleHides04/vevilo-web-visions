
import React from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import ServicesPage from '@/components/ServicesPage';
import PortfolioPage from '@/components/PortfolioPage';
import PricingPage from '@/components/PricingPage';
import ContactPage from '@/components/ContactPage';
import ClientPortal from '@/components/ClientPortal';
import AdminDashboard from '@/components/AdminDashboard';

const Index = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage onPageChange={setCurrentPage} />;
      case 'pricing':
        return <PricingPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      case 'portal':
        return <ClientPortal onPageChange={setCurrentPage} />;
      case 'dashboard':
        return <AdminDashboard onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  const showNavigation = !['portal', 'dashboard'].includes(currentPage);

  return (
    <div className="min-h-screen bg-vevilo-dark text-white">
      {showNavigation && <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />}
      {renderPage()}
    </div>
  );
};

export default Index;
