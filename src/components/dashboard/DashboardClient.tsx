"use client";

import { useState } from "react";
import type { Assignment, User } from "@/types";
import { Header } from "@/components/layout/Header";
import { AssignmentCard } from "@/components/assignment/AssignmentCard";
import { StatsChart } from "@/components/dashboard/StatsChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, CheckCircle, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockUser: User = {
  id: "user-1",
  name: "Alex Doe",
  email: "alex@example.com",
  avatarUrl: "https://placehold.co/100x100.png",
  rating: 4.8,
  reviewsCount: 32,
};

const mockAssignments: Assignment[] = [
  {
    id: "1",
    title: "Complete Physics Lab Report",
    description: "Detailed lab report on the principles of thermodynamics. Must include graphs and data analysis. The report should be at least 10 pages long and follow the university's formatting guidelines.",
    amount: 1500,
    deadline: new Date("2024-08-15"),
    status: "Open",
    requester: { ...mockUser, name: "Jane Smith" },
    location: "Mumbai, Maharashtra",
  },
  {
    id: "2",
    title: "Write an Essay on Ancient History",
    description: "A 2000-word essay on the impact of the Roman Empire on modern law. Requires at least 5 academic sources.",
    amount: 2500,
    deadline: new Date("2024-08-20"),
    status: "In Progress",
    requester: { ...mockUser, name: "Robert Brown" },
    provider: mockUser,
    location: "Delhi, NCR",
  },
  {
    id: "3",
    title: "Create a Presentation on Marketing",
    description: "A 20-slide presentation for a business class on digital marketing strategies for startups.",
    amount: 1200,
    deadline: new Date("2024-07-30"),
    status: "Completed",
    requester: mockUser,
    provider: { ...mockUser, name: "Emily White" },
    location: "Bengaluru, Karnataka",
  },
    {
    id: "4",
    title: "Solve Calculus Problem Set",
    description: "Problem set covering differentiation and integration. 15 problems in total, need to show all steps for each solution.",
    amount: 1800,
    deadline: new Date("2024-09-01"),
    status: "Open",
    requester: { ...mockUser, name: "Michael Green" },
    location: "Pune, Maharashtra",
  },
];

const RequesterView = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,245</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Assignments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+3</div>
            <p className="text-xs text-muted-foreground">1 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Assignments</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">in the last 6 months</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <StatsChart title="Monthly Spending" yAxisLabel="Amount Spent (₹)" />
        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>My Posted Assignments</CardTitle>
                <CardDescription>An overview of all your assignments.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="active">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <div className="mt-4 space-y-4 max-h-[250px] overflow-y-auto pr-2">
                      <TabsContent value="active" className="mt-0">
                          {mockAssignments.filter(a => a.status === 'In Progress' || a.status === 'Open').map(a => <AssignmentCard key={a.id} assignment={a} mode="requester" />)}
                      </TabsContent>
                      <TabsContent value="completed" className="mt-0">
                          {mockAssignments.filter(a => a.status === 'Completed').map(a => <AssignmentCard key={a.id} assignment={a} mode="requester" />)}
                      </TabsContent>
                    </div>
                </Tabs>
            </CardContent>
        </Card>
      </div>
  </div>
);

const ProviderView = () => (
    <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹25,870</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Assignments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1</div>
            <p className="text-xs text-muted-foreground">Due in 5 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Assignments</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+28</div>
            <p className="text-xs text-muted-foreground">Average rating: 4.8</p>
          </CardContent>
        </Card>
      </div>
    <div className="grid grid-cols-1 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Available Assignments</CardTitle>
                <CardDescription>Find new opportunities to earn.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mockAssignments.filter(a => a.status === 'Open').map(a => (
                        <AssignmentCard key={a.id} assignment={a} mode="provider" />
                    ))}
                </div>
            </CardContent>
        </Card>
        <StatsChart title="Monthly Earnings" yAxisLabel="Amount Earned (₹)" />
    </div>
    </div>
);


export function DashboardClient() {
  const [mode, setMode] = useState<"requester" | "provider">("requester");

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-headline">
            Welcome back, {mockUser.name}!
          </h1>
          <p className="text-muted-foreground">
            You are in <span className="font-semibold text-primary">{mode}</span> mode. Here is an overview of your activity.
          </p>
        </div>
        {mode === 'requester' ? <RequesterView /> : <ProviderView />}
      </main>
    </>
  );
}
