import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, FileText, IndianRupee, MapPin, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Assignment, User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatBox } from "@/components/chat/ChatBox";
import { mockAssignments } from "@/lib/mock-data";

const mockUser: User = {
  id: "user-1",
  name: "Alex Doe",
  email: "alex@example.com",
  avatarUrl: "https://placehold.co/100x100.png",
  rating: 4.8,
  reviewsCount: 32,
};

const mockAssignment: Assignment = {
  id: "1",
  title: "Complete Physics Lab Report",
  description: "Detailed lab report on the principles of thermodynamics. Must include graphs and data analysis. The report should be at least 10 pages long and follow the university's formatting guidelines. Key topics to cover are the First and Second Laws of Thermodynamics, entropy, and heat engines. Please use APA citation style for all references. At least five academic sources are required. The final submission should be a PDF document.",
  amount: 1500,
  deadline: new Date("2024-08-15"),
  status: "In Progress",
  requester: { ...mockUser, name: "Jane Smith", avatarUrl: "https://placehold.co/100x100.png" },
  provider: mockUser,
  location: "Mumbai, Maharashtra",
  fileUrls: ["report_guidelines.pdf", "dataset.csv"]
};

export default function AssignmentDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch assignment data based on params.id
  const assignment = mockAssignment;

  return (
    <div className="min-h-screen bg-muted/40 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl lg:text-3xl font-headline">{assignment.title}</CardTitle>
                  <Badge variant={assignment.status === 'Open' ? 'default' : 'secondary'} className="text-sm">{assignment.status}</Badge>
                </div>
                <CardDescription>Posted by {assignment.requester.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{assignment.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6">
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-semibold">₹{assignment.amount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="font-semibold">{assignment.deadline.toLocaleDateString()}</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-3 col-span-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{assignment.location}</p>
                    </div>
                  </div>
                </div>
                {assignment.fileUrls && (
                     <div className="mt-6 border-t pt-6">
                        <h4 className="font-semibold mb-2">Attachments</h4>
                        <div className="flex flex-col gap-2">
                            {assignment.fileUrls.map((file, index) => (
                                <Button key={index} variant="outline" asChild className="justify-start">
                                    <Link href="#">
                                        <FileText className="mr-2 h-4 w-4"/>
                                        {file}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
              </CardContent>
            </Card>
            
            {assignment.status === 'Open' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Apply for this Assignment</CardTitle>
                        <CardDescription>Submit your proposal to the requester.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-4 items-center">
                        <p className="text-sm text-muted-foreground flex-grow">Showcase your skills and explain why you're the best fit for this task. You can negotiate the price in the chat after applying.</p>
                        <Button size="lg" className="w-full md:w-auto">Apply Now</Button>
                    </CardContent>
                </Card>
            )}

          </div>
          <div className="md:col-span-1 space-y-8">
            <Card className="overflow-hidden h-[70vh]">
                <ChatBox />
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>About the Requester</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                 <Avatar className="h-16 w-16">
                    <AvatarImage src={assignment.requester.avatarUrl} />
                    <AvatarFallback>{assignment.requester.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold">{assignment.requester.name}</p>
                    <p className="text-sm text-muted-foreground">4.9 Stars (28 reviews)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return mockAssignments.map((a) => ({ id: a.id }));
}
