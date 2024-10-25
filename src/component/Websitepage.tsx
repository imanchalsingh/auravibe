import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from ".././components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from ".././components/ui/card";
import { Button } from ".././components/ui/button";
import { Input } from ".././components/ui/input";
import { Label } from ".././components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from ".././components/ui/select"; // replace with your actual UI library import
import { Badge } from ".././components/ui/badge";

// Define the Website type
interface Website {
  id: number;
  name: string;
  status: "published" | "draft";
  template: string;
}

const InteractiveElement = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: 1,
      name: "My Portfolio",
      status: "published",
      template: "Professional",
    },
    { id: 2, name: "Blog Site", status: "draft", template: "Minimalist" },
  ]);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newWebsiteName, setNewWebsiteName] = useState("");
  const [newWebsiteTemplate, setNewWebsiteTemplate] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const templates = [
    { name: "Professional", icon: "👔" },
    { name: "Minimalist", icon: "🖤" },
    { name: "Creative", icon: "🎨" },
    { name: "E-commerce", icon: "🛒" },
  ];

  const handleCreateWebsite = () => {
    if (newWebsiteName.trim() && newWebsiteTemplate) {
      const newWebsite: Website = {
        id: websites.length + 1,
        name: newWebsiteName.trim(),
        status: "draft",
        template: newWebsiteTemplate,
      };
      setWebsites([...websites, newWebsite]);
      setNewWebsiteName("");
      setNewWebsiteTemplate("");
      setIsCreating(false);
    }
  };

  const handleDeleteWebsite = (id: number) => {
    setWebsites(websites.filter((website) => website.id !== id));
    setSelectedWebsite(null);
  };

  const handleEditWebsite = (website: Website) => {
    setSelectedWebsite(website);
    setNewWebsiteName(website.name);
    setNewWebsiteTemplate(website.template);
    setIsCreating(true); // Open the create dialog for editing
  };

  const handleUpdateWebsite = (updatedWebsite: Website) => {
    setWebsites(
      websites.map((w) => (w.id === updatedWebsite.id ? updatedWebsite : w))
    );
    setSelectedWebsite(updatedWebsite);
    setIsCreating(false); // Close the dialog after updating
  };

  const handleConfirmUpdate = () => {
    if (selectedWebsite) {
      const updatedWebsite: Website = {
        ...selectedWebsite,
        name: newWebsiteName.trim(),
        template: newWebsiteTemplate,
      };
      handleUpdateWebsite(updatedWebsite);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Website Creator Dashboard
      </h1>

      <div className="mb-6 flex justify-between items-center">
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Create New Website
        </Button>
        <div>
          <Button
            onClick={() => setShowTemplates(true)}
            className="mr-2 bg-purple-500 hover:bg-purple-600 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Templates
          </Button>
          <Button
            onClick={() => setShowAnalytics(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            Analytics
          </Button>
        </div>
      </div>

      {isCreating && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {selectedWebsite ? "Edit Website" : "Create New Website"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="websiteName">Website Name</Label>
                <Input
                  id="websiteName"
                  type="text"
                  placeholder="Enter website name"
                  value={newWebsiteName}
                  onChange={(e) => setNewWebsiteName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="websiteTemplate">Choose Template</Label>
                <Select
                  onValueChange={setNewWebsiteTemplate}
                  defaultValue={newWebsiteTemplate}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.name} value={template.name}>
                        {template.icon} {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  onClick={
                    selectedWebsite ? handleConfirmUpdate : handleCreateWebsite
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {selectedWebsite ? "Update" : "Create"}
                </Button>
                <Button onClick={() => setIsCreating(false)} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Websites</CardTitle>
          </CardHeader>
          <CardContent>
            {websites.map((website) => (
              <div
                key={website.id}
                className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow"
              >
                <div>
                  <h3 className="font-semibold text-lg">{website.name}</h3>
                  <Badge className="bg-blue-100 text-blue-600">
                    {website.status}
                  </Badge>
                  <p className="text-gray-600">Template: {website.template}</p>
                </div>
                <div>
                  <Button
                    onClick={() => handleEditWebsite(website)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteWebsite(website.id)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Dialog open={showAnalytics} onOpenChange={setShowAnalytics}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Website Analytics</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { name: "Jan", visits: 4000 },
                        { name: "Feb", visits: 3000 },
                        { name: "Mar", visits: 5000 },
                        { name: "Apr", visits: 4500 },
                        { name: "May", visits: 6000 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-600">22,500</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Avg. Time on Site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-green-600">3m 45s</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bounce Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-yellow-600">35%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Website Templates</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template) => (
              <Card key={template.name} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{template.icon}</span>
                    {template.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Click to preview and select</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveElement;
