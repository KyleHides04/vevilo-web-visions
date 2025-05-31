
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
  Eye
} from 'lucide-react';

interface AdminDashboardProps {
  onPageChange: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = React.useState('overview');

  const stats = [
    { title: 'Total Clients', value: '142', icon: <Users className="w-6 h-6" />, change: '+12%' },
    { title: 'Active Projects', value: '28', icon: <BarChart3 className="w-6 h-6" />, change: '+5%' },
    { title: 'Support Tickets', value: '7', icon: <MessageSquare className="w-6 h-6" />, change: '-15%' },
    { title: 'Monthly Revenue', value: '$24,580', icon: <BarChart3 className="w-6 h-6" />, change: '+23%' }
  ];

  const supportTickets = [
    {
      id: '#001',
      client: 'John Doe',
      subject: 'Website loading issues',
      status: 'Open',
      priority: 'High',
      date: '2024-01-15'
    },
    {
      id: '#002',
      client: 'Jane Smith',
      subject: 'Email configuration help',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-01-14'
    },
    {
      id: '#003',
      client: 'Tech Corp',
      subject: 'SSL certificate renewal',
      status: 'Pending',
      priority: 'Low',
      date: '2024-01-13'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'TechCorp Solutions',
      client: 'Tech Corporation',
      status: 'Live',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'EcoStore',
      client: 'Eco Products Ltd',
      status: 'Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'HealthPlus Clinic',
      client: 'HealthPlus Medical',
      status: 'Review',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      plan: 'Business Hosting',
      status: 'Active',
      joinDate: '2023-06-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@company.com',
      plan: 'Professional Website',
      status: 'Active',
      joinDate: '2023-08-22'
    },
    {
      id: 3,
      name: 'Tech Corporation',
      email: 'contact@techcorp.com',
      plan: 'Enterprise',
      status: 'Active',
      joinDate: '2023-03-10'
    }
  ];

  return (
    <div className="min-h-screen bg-vevilo-dark">
      {/* Header */}
      <header className="bg-vevilo-dark-alt border-b border-vevilo-purple/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 vevilo-gradient rounded-lg"></div>
              <span className="text-2xl font-bold vevilo-gradient-text">VEVILO</span>
            </div>
            <span className="text-gray-400">Admin Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button onClick={() => onPageChange('home')}>
              Back to Site
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-vevilo-dark-alt">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">Support</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="vevilo-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className="p-3 vevilo-gradient rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="vevilo-card">
                <CardHeader>
                  <CardTitle className="text-white">Recent Support Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportTickets.slice(0, 3).map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-3 bg-vevilo-dark-alt/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{ticket.subject}</p>
                          <p className="text-gray-400 text-sm">{ticket.client}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          ticket.status === 'Open' ? 'bg-red-500/20 text-red-400' :
                          ticket.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {ticket.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="vevilo-card">
                <CardHeader>
                  <CardTitle className="text-white">Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolioItems.slice(0, 3).map((project) => (
                      <div key={project.id} className="flex items-center space-x-3 p-3 bg-vevilo-dark-alt/50 rounded-lg">
                        <img src={project.image} alt={project.title} className="w-12 h-12 rounded object-cover" />
                        <div className="flex-1">
                          <p className="text-white font-medium">{project.title}</p>
                          <p className="text-gray-400 text-sm">{project.client}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tickets Tab */}
          <TabsContent value="tickets" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search tickets..." className="pl-10 bg-vevilo-dark-alt border-vevilo-purple/30" />
                </div>
                <Button variant="outline" className="border-vevilo-purple">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card className="vevilo-card">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-vevilo-purple/20">
                      <tr>
                        <th className="text-left p-4 text-gray-300">Ticket ID</th>
                        <th className="text-left p-4 text-gray-300">Client</th>
                        <th className="text-left p-4 text-gray-300">Subject</th>
                        <th className="text-left p-4 text-gray-300">Status</th>
                        <th className="text-left p-4 text-gray-300">Priority</th>
                        <th className="text-left p-4 text-gray-300">Date</th>
                        <th className="text-left p-4 text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportTickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b border-vevilo-purple/10">
                          <td className="p-4 text-white font-mono">{ticket.id}</td>
                          <td className="p-4 text-white">{ticket.client}</td>
                          <td className="p-4 text-white">{ticket.subject}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              ticket.status === 'Open' ? 'bg-red-500/20 text-red-400' :
                              ticket.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              ticket.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                              ticket.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-green-500/20 text-green-400'
                            }`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400">{ticket.date}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
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
              <h2 className="text-2xl font-bold text-white">Portfolio Management</h2>
              <Button className="vevilo-gradient">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="vevilo-card group">
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.client}</p>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {item.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Client Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search clients..." className="pl-10 bg-vevilo-dark-alt border-vevilo-purple/30" />
                </div>
                <Button className="vevilo-gradient">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Client
                </Button>
              </div>
            </div>

            <Card className="vevilo-card">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-vevilo-purple/20">
                      <tr>
                        <th className="text-left p-4 text-gray-300">Name</th>
                        <th className="text-left p-4 text-gray-300">Email</th>
                        <th className="text-left p-4 text-gray-300">Plan</th>
                        <th className="text-left p-4 text-gray-300">Status</th>
                        <th className="text-left p-4 text-gray-300">Join Date</th>
                        <th className="text-left p-4 text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <tr key={client.id} className="border-b border-vevilo-purple/10">
                          <td className="p-4 text-white font-medium">{client.name}</td>
                          <td className="p-4 text-gray-400">{client.email}</td>
                          <td className="p-4 text-white">{client.plan}</td>
                          <td className="p-4">
                            <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                              {client.status}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400">{client.joinDate}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <MessageSquare className="w-4 h-4" />
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
