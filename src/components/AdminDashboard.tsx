
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  MessageSquare, 
  Image, 
  BarChart3, 
  Settings, 
  Bell,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Server,
  Globe,
  Mail,
  Gamepad2,
  Activity,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield
} from 'lucide-react';

interface AdminDashboardProps {
  onPageChange: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = React.useState('overview');

  const stats = [
    { 
      title: 'Total Clients', 
      value: '142', 
      icon: <Users className="w-6 h-6" />, 
      change: '+12%',
      changeType: 'increase',
      description: 'Active paying customers',
      detail: '8 new this month'
    },
    { 
      title: 'Active Projects', 
      value: '28', 
      icon: <BarChart3 className="w-6 h-6" />, 
      change: '+5%',
      changeType: 'increase',
      description: 'In development or live',
      detail: '5 launching this week'
    },
    { 
      title: 'Support Tickets', 
      value: '7', 
      icon: <MessageSquare className="w-6 h-6" />, 
      change: '-15%',
      changeType: 'decrease',
      description: 'Open support requests',
      detail: '2 high priority'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$24,580', 
      icon: <DollarSign className="w-6 h-6" />, 
      change: '+23%',
      changeType: 'increase',
      description: 'Recurring + one-time',
      detail: 'Target: $30k'
    }
  ];

  const serviceStats = [
    { service: 'Web Development', clients: 45, revenue: '$12,400', icon: <Globe className="w-5 h-5" /> },
    { service: 'VPS Hosting', clients: 32, revenue: '$6,800', icon: <Server className="w-5 h-5" /> },
    { service: 'Email Hosting', clients: 28, revenue: '$2,240', icon: <Mail className="w-5 h-5" /> },
    { service: 'Game Servers', clients: 18, revenue: '$3,140', icon: <Gamepad2 className="w-5 h-5" /> },
    { service: 'Web Hosting', clients: 19, revenue: '$1,900', icon: <Shield className="w-5 h-5" /> }
  ];

  const supportTickets = [
    {
      id: '#001',
      client: 'John Doe',
      email: 'john@techcorp.com',
      subject: 'Website loading issues on mobile',
      description: 'Pages take too long to load on mobile devices, especially the gallery section.',
      status: 'Open',
      priority: 'High',
      assignee: 'You',
      date: '2024-01-15',
      lastUpdate: '2 hours ago',
      service: 'Web Development'
    },
    {
      id: '#002',
      client: 'Jane Smith',
      email: 'jane@ecostore.com',
      subject: 'Email configuration help needed',
      description: 'Cannot setup IMAP on Outlook, getting authentication errors repeatedly.',
      status: 'In Progress',
      priority: 'Medium',
      assignee: 'You',
      date: '2024-01-14',
      lastUpdate: '1 day ago',
      service: 'Email Hosting'
    },
    {
      id: '#003',
      client: 'Tech Corp',
      email: 'admin@techcorp.com',
      subject: 'SSL certificate renewal urgent',
      description: 'SSL certificate expires in 3 days, need immediate renewal to avoid downtime.',
      status: 'Pending',
      priority: 'High',
      assignee: 'You',
      date: '2024-01-13',
      lastUpdate: '2 days ago',
      service: 'Web Hosting'
    },
    {
      id: '#004',
      client: 'Gaming Hub',
      email: 'support@gaminghub.net',
      subject: 'Minecraft server lag issues',
      description: 'Server experiencing high latency during peak hours, affecting player experience.',
      status: 'Open',
      priority: 'Medium',
      assignee: 'You',
      date: '2024-01-12',
      lastUpdate: '3 days ago',
      service: 'Game Server Hosting'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'TechCorp Solutions',
      client: 'Tech Corporation',
      status: 'Live',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Modern corporate website with CMS',
      technologies: ['React', 'Node.js', 'MongoDB'],
      launchDate: '2024-01-10',
      projectValue: '$8,500',
      monthlyRevenue: '$120'
    },
    {
      id: 2,
      title: 'EcoStore E-commerce',
      client: 'Eco Products Ltd',
      status: 'Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Sustainable products online store',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      expectedLaunch: '2024-02-15',
      projectValue: '$12,000',
      monthlyRevenue: '$0'
    },
    {
      id: 3,
      title: 'HealthPlus Clinic',
      client: 'HealthPlus Medical',
      status: 'Review',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      description: 'Medical practice management system',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      expectedLaunch: '2024-01-25',
      projectValue: '$15,000',
      monthlyRevenue: '$200'
    },
    {
      id: 4,
      title: 'Gaming Community Portal',
      client: 'Gaming Hub',
      status: 'Live',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      description: 'Gaming community with forums and stats',
      technologies: ['React', 'Discord API', 'Redis'],
      launchDate: '2023-12-20',
      projectValue: '$6,800',
      monthlyRevenue: '$85'
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@techcorp.com',
      company: 'Tech Corporation',
      plan: 'Business Hosting + Web Dev',
      status: 'Active',
      joinDate: '2023-06-15',
      monthlyValue: '$245',
      totalSpent: '$8,920',
      lastContact: '2024-01-14',
      services: ['Web Development', 'Web Hosting', 'Email Hosting']
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@ecostore.com',
      company: 'Eco Products Ltd',
      plan: 'E-commerce Package',
      status: 'Active',
      joinDate: '2023-08-22',
      monthlyValue: '$320',
      totalSpent: '$12,480',
      lastContact: '2024-01-13',
      services: ['Web Development', 'VPS Hosting', 'Email Hosting']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@gaminghub.net',
      company: 'Gaming Hub',
      plan: 'Game Server Enterprise',
      status: 'Active',
      joinDate: '2023-03-10',
      monthlyValue: '$180',
      totalSpent: '$1,980',
      lastContact: '2024-01-12',
      services: ['Game Server Hosting', 'Web Development']
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@healthplus.com',
      company: 'HealthPlus Medical',
      plan: 'Professional Website',
      status: 'Pending',
      joinDate: '2024-01-05',
      monthlyValue: '$200',
      totalSpent: '$15,000',
      lastContact: '2024-01-15',
      services: ['Web Development', 'Web Hosting']
    }
  ];

  const recentActivity = [
    { action: 'New client registration', details: 'Sarah Wilson - HealthPlus Medical', time: '2 hours ago', type: 'client' },
    { action: 'Payment received', details: '$320 from Eco Products Ltd', time: '4 hours ago', type: 'payment' },
    { action: 'Ticket resolved', details: 'VPS backup issue for Tech Corp', time: '6 hours ago', type: 'ticket' },
    { action: 'Project launched', details: 'Gaming Community Portal went live', time: '1 day ago', type: 'project' },
    { action: 'Server maintenance', details: 'VPS cluster upgrade completed', time: '2 days ago', type: 'system' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-vevilo-dark via-vevilo-dark to-vevilo-dark-alt">
      {/* Header */}
      <header className="glass-effect border-b border-vevilo-purple/20 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 vevilo-gradient rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold vevilo-gradient-text">VEVILO</span>
                <p className="text-gray-400 text-sm">Admin Control Center</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>All systems operational</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">3</div>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button onClick={() => onPageChange('home')} className="vevilo-gradient">
              Back to Site
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-vevilo-dark-alt/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-vevilo-purple/20">Overview</TabsTrigger>
            <TabsTrigger value="tickets" className="data-[state=active]:bg-vevilo-purple/20">Support</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-vevilo-purple/20">Portfolio</TabsTrigger>
            <TabsTrigger value="clients" className="data-[state=active]:bg-vevilo-purple/20">Clients</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-effect border-vevilo-purple/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-vevilo-radial opacity-20"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 vevilo-gradient rounded-xl">
                        {stat.icon}
                      </div>
                      <div className={`flex items-center text-sm ${
                        stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.changeType === 'increase' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-gray-500 text-xs">{stat.description}</p>
                      <p className="text-vevilo-purple text-xs mt-1">{stat.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Breakdown */}
            <Card className="glass-effect border-vevilo-purple/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Service Performance Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {serviceStats.map((service, index) => (
                    <div key={index} className="text-center p-4 bg-vevilo-dark-alt/30 rounded-lg">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 vevilo-gradient rounded-lg">
                          {service.icon}
                        </div>
                      </div>
                      <h4 className="text-white font-medium text-sm mb-1">{service.service}</h4>
                      <p className="text-vevilo-purple text-lg font-bold">{service.clients}</p>
                      <p className="text-gray-400 text-xs">clients</p>
                      <p className="text-green-400 font-semibold text-sm mt-1">{service.revenue}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity & Quick Stats */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 glass-effect border-vevilo-purple/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Recent Activity Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-vevilo-dark-alt/30 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'client' ? 'bg-blue-400' :
                          activity.type === 'payment' ? 'bg-green-400' :
                          activity.type === 'ticket' ? 'bg-yellow-400' :
                          activity.type === 'project' ? 'bg-purple-400' :
                          'bg-gray-400'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{activity.action}</p>
                          <p className="text-gray-400 text-xs">{activity.details}</p>
                          <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-vevilo-purple/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Priority Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex items-center mb-1">
                        <XCircle className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-red-400 text-sm font-medium">SSL Expiring</span>
                      </div>
                      <p className="text-gray-300 text-xs">Tech Corp SSL expires in 3 days</p>
                    </div>
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="flex items-center mb-1">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 text-sm font-medium">High Priority</span>
                      </div>
                      <p className="text-gray-300 text-xs">2 urgent support tickets</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center mb-1">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 text-sm font-medium">On Track</span>
                      </div>
                      <p className="text-gray-300 text-xs">Monthly revenue target 82%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tickets Tab */}
          <TabsContent value="tickets" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Support Ticket Management</h2>
                <p className="text-gray-400">Manage and respond to client support requests</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search tickets..." className="pl-10 bg-vevilo-dark-alt/50 border-vevilo-purple/30" />
                </div>
                <Button variant="outline" className="border-vevilo-purple/50">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card className="glass-effect border-vevilo-purple/30">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-vevilo-purple/20 bg-vevilo-dark-alt/30">
                      <tr>
                        <th className="text-left p-4 text-gray-300 font-medium">Ticket Details</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Client Info</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Service</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Priority</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Last Update</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportTickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b border-vevilo-purple/10 hover:bg-vevilo-dark-alt/20">
                          <td className="p-4">
                            <div>
                              <p className="text-white font-medium text-sm">{ticket.subject}</p>
                              <p className="text-gray-400 text-xs mt-1 line-clamp-2">{ticket.description}</p>
                              <p className="text-vevilo-purple text-xs font-mono mt-1">{ticket.id}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-white text-sm font-medium">{ticket.client}</p>
                              <p className="text-gray-400 text-xs">{ticket.email}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="px-2 py-1 bg-vevilo-purple/20 text-vevilo-purple rounded text-xs">
                              {ticket.service}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              ticket.status === 'Open' ? 'bg-red-500/20 text-red-400' :
                              ticket.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              ticket.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                              ticket.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-green-500/20 text-green-400'
                            }`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-gray-400 text-xs">{ticket.lastUpdate}</p>
                              <p className="text-gray-500 text-xs">{ticket.date}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                                <MessageSquare className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Portfolio Management</h2>
                <p className="text-gray-400">Showcase your completed projects and manage client work</p>
              </div>
              <Button className="vevilo-gradient">
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="glass-effect border-vevilo-purple/30 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="space-x-2">
                          <Button size="sm" className="vevilo-gradient">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/20">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.status === 'Development' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">{item.projectValue}</p>
                        <p className="text-xs text-gray-500">project value</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-vevilo-purple/20 text-vevilo-purple rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <p className="text-gray-400">
                          {item.status === 'Live' ? 'Launched' : 'Expected'}: 
                          <span className="text-white ml-1">
                            {item.launchDate || item.expectedLaunch}
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">Monthly: <span className="text-green-400">{item.monthlyRevenue}</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Client Relationship Management</h2>
                <p className="text-gray-400">Manage client accounts, billing, and service relationships</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search clients..." className="pl-10 bg-vevilo-dark-alt/50 border-vevilo-purple/30" />
                </div>
                <Button className="vevilo-gradient">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Client
                </Button>
              </div>
            </div>

            <Card className="glass-effect border-vevilo-purple/30">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-vevilo-purple/20 bg-vevilo-dark-alt/30">
                      <tr>
                        <th className="text-left p-4 text-gray-300 font-medium">Client Details</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Services</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Financial</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Last Contact</th>
                        <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <tr key={client.id} className="border-b border-vevilo-purple/10 hover:bg-vevilo-dark-alt/20">
                          <td className="p-4">
                            <div>
                              <p className="text-white font-medium">{client.name}</p>
                              <p className="text-gray-400 text-sm">{client.company}</p>
                              <p className="text-gray-500 text-xs">{client.email}</p>
                              <p className="text-gray-500 text-xs">Joined: {client.joinDate}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <p className="text-white text-sm font-medium">{client.plan}</p>
                              <div className="flex flex-wrap gap-1">
                                {client.services.map((service, index) => (
                                  <span key={index} className="px-2 py-1 bg-vevilo-purple/20 text-vevilo-purple rounded text-xs">
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-green-400 font-bold">{client.monthlyValue}</p>
                              <p className="text-xs text-gray-400">per month</p>
                              <p className="text-white text-sm mt-1">{client.totalSpent}</p>
                              <p className="text-xs text-gray-400">total spent</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              client.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                              client.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-gray-400 text-sm">{client.lastContact}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                                <MessageSquare className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
