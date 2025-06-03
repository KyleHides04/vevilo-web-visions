
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  MessageSquare, 
  DollarSign, 
  Clock, 
  User, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  Eye,
  Reply,
  ArrowLeft,
  RefreshCw,
  Calendar,
  CreditCard,
  AlertTriangle
} from 'lucide-react';

interface StaffDashboardProps {
  onPageChange: (page: string) => void;
}

const StaffDashboard: React.FC<StaffDashboardProps> = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [newResponse, setNewResponse] = useState('');

  // Mock data for support tickets
  const supportTickets = [
    {
      id: 'TKT-001',
      subject: 'Website not loading properly',
      client: 'John Smith',
      email: 'john@example.com',
      status: 'Open',
      priority: 'High',
      department: 'Technical Support',
      created: '2024-06-03 14:30',
      lastReply: '2024-06-03 15:45',
      responses: [
        { from: 'John Smith', message: 'My website has been down for 2 hours. Please help!', time: '14:30', type: 'client' },
        { from: 'Sarah (Support)', message: 'Hi John, I\'m looking into this issue now. Can you please provide your domain name?', time: '14:45', type: 'staff' },
        { from: 'John Smith', message: 'The domain is mywebsite.com', time: '15:45', type: 'client' }
      ]
    },
    {
      id: 'TKT-002',
      subject: 'Billing inquiry about invoice #1234',
      client: 'Jane Doe',
      email: 'jane@company.com',
      status: 'Pending',
      priority: 'Medium',
      department: 'Billing',
      created: '2024-06-03 10:15',
      lastReply: '2024-06-03 11:30',
      responses: [
        { from: 'Jane Doe', message: 'I have a question about invoice #1234. The amount seems incorrect.', time: '10:15', type: 'client' },
        { from: 'Mike (Billing)', message: 'I\'ve reviewed your invoice. The amount includes the new hosting upgrade you requested last month.', time: '11:30', type: 'staff' }
      ]
    },
    {
      id: 'TKT-003',
      subject: 'Request for website redesign quote',
      client: 'Bob Wilson',
      email: 'bob@startup.com',
      status: 'In Progress',
      priority: 'Low',
      department: 'Sales',
      created: '2024-06-02 16:20',
      lastReply: '2024-06-03 09:00',
      responses: [
        { from: 'Bob Wilson', message: 'I\'d like to get a quote for redesigning our company website.', time: '16:20', type: 'client' }
      ]
    }
  ];

  // Mock data for billing queries
  const billingQueries = [
    {
      id: 'BIL-001',
      client: 'TechCorp Inc.',
      invoice: 'INV-2024-001',
      amount: '$2,499.00',
      status: 'Overdue',
      dueDate: '2024-05-28',
      query: 'Payment processing issue'
    },
    {
      id: 'BIL-002',
      client: 'StartupXYZ',
      invoice: 'INV-2024-002',
      amount: '$899.00',
      status: 'Pending',
      dueDate: '2024-06-10',
      query: 'Request for payment plan'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-red-500';
      case 'in progress': return 'bg-yellow-500';
      case 'pending': return 'bg-blue-500';
      case 'closed': return 'bg-green-500';
      case 'overdue': return 'bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const handleTicketResponse = () => {
    if (selectedTicket && newResponse.trim()) {
      const newResp = {
        from: 'Staff Member',
        message: newResponse,
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        type: 'staff'
      };
      selectedTicket.responses.push(newResp);
      setNewResponse('');
    }
  };

  return (
    <div className="min-h-screen bg-vevilo-dark text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onPageChange('home')}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold vevilo-gradient-text">Staff Dashboard</h1>
            <p className="text-gray-400">Support & Operations Center</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Badge variant="secondary" className="bg-vevilo-purple/20 text-vevilo-magenta">
            Online
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="vevilo-card border-vevilo-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Open Tickets</p>
                <p className="text-2xl font-bold text-red-400">23</p>
              </div>
              <MessageSquare className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="vevilo-card border-vevilo-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Billing</p>
                <p className="text-2xl font-bold text-yellow-400">8</p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="vevilo-card border-vevilo-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Response Time</p>
                <p className="text-2xl font-bold text-blue-400">2.4h</p>
              </div>
              <Clock className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="vevilo-card border-vevilo-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Clients</p>
                <p className="text-2xl font-bold text-green-400">156</p>
              </div>
              <User className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-vevilo-dark-alt">
          <TabsTrigger value="tickets" className="data-[state=active]:bg-vevilo-purple">Support Tickets</TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-vevilo-purple">Billing Queries</TabsTrigger>
          <TabsTrigger value="clients" className="data-[state=active]:bg-vevilo-purple">Client Management</TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-vevilo-purple">Reports</TabsTrigger>
        </TabsList>

        {/* Support Tickets Tab */}
        <TabsContent value="tickets" className="space-y-6">
          <Card className="vevilo-card border-vevilo-purple/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Support Tickets</CardTitle>
                  <CardDescription>Manage customer support requests</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search tickets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-vevilo-dark-alt border-vevilo-purple/20"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-vevilo-purple/20">
                    <TableHead className="text-gray-300">Ticket ID</TableHead>
                    <TableHead className="text-gray-300">Subject</TableHead>
                    <TableHead className="text-gray-300">Client</TableHead>
                    <TableHead className="text-gray-300">Department</TableHead>
                    <TableHead className="text-gray-300">Priority</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Last Reply</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="border-vevilo-purple/20 hover:bg-vevilo-purple/5">
                      <TableCell className="font-mono text-vevilo-magenta">{ticket.id}</TableCell>
                      <TableCell className="text-white max-w-xs truncate">{ticket.subject}</TableCell>
                      <TableCell className="text-gray-300">{ticket.client}</TableCell>
                      <TableCell className="text-gray-300">{ticket.department}</TableCell>
                      <TableCell>
                        <span className={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(ticket.status)} text-white`}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{ticket.lastReply}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedTicket(ticket)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl bg-vevilo-dark border-vevilo-purple/20 text-white">
                            <DialogHeader>
                              <DialogTitle className="vevilo-gradient-text">
                                {selectedTicket?.subject}
                              </DialogTitle>
                              <DialogDescription className="text-gray-400">
                                Ticket #{selectedTicket?.id} - {selectedTicket?.client}
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                              {selectedTicket?.responses.map((response: any, index: number) => (
                                <div
                                  key={index}
                                  className={`p-4 rounded-lg ${
                                    response.type === 'client' 
                                      ? 'bg-gray-800 ml-8' 
                                      : 'bg-vevilo-purple/20 mr-8'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-white">{response.from}</span>
                                    <span className="text-gray-400 text-sm">{response.time}</span>
                                  </div>
                                  <p className="text-gray-300">{response.message}</p>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-4 border-t border-vevilo-purple/20 pt-4">
                              <Label htmlFor="response" className="text-white">Your Response</Label>
                              <Textarea
                                id="response"
                                placeholder="Type your response here..."
                                value={newResponse}
                                onChange={(e) => setNewResponse(e.target.value)}
                                className="bg-vevilo-dark-alt border-vevilo-purple/20 text-white"
                                rows={4}
                              />
                              <div className="flex items-center justify-between">
                                <Select>
                                  <SelectTrigger className="w-48 bg-vevilo-dark-alt border-vevilo-purple/20">
                                    <SelectValue placeholder="Change status" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-vevilo-dark border-vevilo-purple/20">
                                    <SelectItem value="open">Open</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                  </SelectContent>
                                </Select>
                                <Button onClick={handleTicketResponse} className="vevilo-gradient">
                                  <Reply className="h-4 w-4 mr-2" />
                                  Send Response
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Queries Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="vevilo-card border-vevilo-purple/20">
            <CardHeader>
              <CardTitle className="text-white">Billing Queries</CardTitle>
              <CardDescription>Manage payment and invoice inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-vevilo-purple/20">
                    <TableHead className="text-gray-300">Query ID</TableHead>
                    <TableHead className="text-gray-300">Client</TableHead>
                    <TableHead className="text-gray-300">Invoice</TableHead>
                    <TableHead className="text-gray-300">Amount</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Due Date</TableHead>
                    <TableHead className="text-gray-300">Query Type</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingQueries.map((query) => (
                    <TableRow key={query.id} className="border-vevilo-purple/20 hover:bg-vevilo-purple/5">
                      <TableCell className="font-mono text-vevilo-magenta">{query.id}</TableCell>
                      <TableCell className="text-white">{query.client}</TableCell>
                      <TableCell className="text-gray-300">{query.invoice}</TableCell>
                      <TableCell className="text-white font-semibold">{query.amount}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(query.status)} text-white`}>
                          {query.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{query.dueDate}</TableCell>
                      <TableCell className="text-gray-300">{query.query}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <CreditCard className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Client Management Tab */}
        <TabsContent value="clients" className="space-y-6">
          <Card className="vevilo-card border-vevilo-purple/20">
            <CardHeader>
              <CardTitle className="text-white">Client Management</CardTitle>
              <CardDescription>Overview of client accounts and services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-400">
                <User className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Client management features coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card className="vevilo-card border-vevilo-purple/20">
            <CardHeader>
              <CardTitle className="text-white">Reports & Analytics</CardTitle>
              <CardDescription>Performance metrics and operational reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-vevilo-dark-alt border-vevilo-purple/20">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-4">Today's Activity</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tickets Resolved</span>
                        <span className="text-green-400">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">New Tickets</span>
                        <span className="text-blue-400">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Billing Issues</span>
                        <span className="text-yellow-400">3</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-vevilo-dark-alt border-vevilo-purple/20">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-4">Performance Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Customer Satisfaction</span>
                        <span className="text-green-400">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">First Response Time</span>
                        <span className="text-blue-400">1.2h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Resolution Rate</span>
                        <span className="text-green-400">89%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffDashboard;
