
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

interface ClientPortalProps {
  onPageChange: (page: string) => void;
}

const ClientPortal: React.FC<ClientPortalProps> = ({ onPageChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Here you would typically authenticate the user
    onPageChange('dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-vevilo-radial"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-vevilo-purple/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-vevilo-magenta/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-vevilo-blue/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="w-full max-w-md relative z-10">
        <Card className="vevilo-card border-vevilo-purple/30">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 vevilo-gradient rounded-lg"></div>
              <span className="text-3xl font-bold vevilo-gradient-text">VEVILO</span>
            </div>
            <CardTitle className="text-2xl text-white">Client Portal</CardTitle>
            <p className="text-gray-400">Access your account and manage your services</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="pl-10 bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="pl-10 pr-10 bg-vevilo-dark-alt/50 border-vevilo-purple/30 text-white"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-vevilo-purple/30"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-vevilo-blue hover:text-vevilo-magenta transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full vevilo-gradient hover:opacity-90 transition-opacity">
                Sign In
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-vevilo-purple/20 text-center">
              <p className="text-gray-400 mb-4">Don't have an account?</p>
              <Button 
                variant="outline" 
                className="w-full border-vevilo-purple text-white hover:bg-vevilo-purple/10"
                onClick={() => onPageChange('contact')}
              >
                Contact Us to Get Started
              </Button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onPageChange('home')}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Homepage
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Features List */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          {[
            "Manage Services",
            "View Invoices",
            "Support Tickets",
            "Domain Management"
          ].map((feature, index) => (
            <div key={index} className="glass-effect p-3 rounded-lg">
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
