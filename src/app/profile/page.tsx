import { AssignmentCard } from "@/components/assignment/AssignmentCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAssignments, mockUser } from "@/lib/mock-data";
import { CheckCircle, Edit, Mail, Star } from "lucide-react";

export default function ProfilePage() {
    const postedAssignments = mockAssignments.filter(a => a.requester.id === mockUser.id);
    const completedByProvider = mockAssignments.filter(a => a.provider?.id === mockUser.id && a.status === 'Completed');

  return (
    <div className="min-h-screen bg-muted/40 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1 space-y-8">
            <Card>
              <CardHeader className="items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                  <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-headline">{mockUser.name}</CardTitle>
                <CardDescription>Joined in 2024</CardDescription>
                 <Button size="sm" variant="outline" className="mt-2">
                    <Edit className="mr-2 h-4 w-4"/>
                    Edit Profile
                 </Button>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{mockUser.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>{mockUser.rating} Stars ({mockUser.reviewsCount} reviews)</span>
                </div>
                 <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Identity Verified</span>
                </div>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Physics</Badge>
                    <Badge variant="secondary">Academic Writing</Badge>
                    <Badge variant="secondary">Calculus</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Logo Design</Badge>
                </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Posted Assignments</CardTitle>
                    <CardDescription>Assignments created by {mockUser.name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        {postedAssignments.slice(0, 2).map(a => (
                            <AssignmentCard key={a.id} assignment={a} mode="requester" />
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Completed Work</CardTitle>
                    <CardDescription>Assignments {mockUser.name} has completed as a provider</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid gap-4 md:grid-cols-2">
                        {completedByProvider.slice(0, 2).map(a => (
                            <AssignmentCard key={a.id} assignment={a} mode="provider" />
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-4">
                         <Avatar className="h-10 w-10">
                            <AvatarImage src="https://placehold.co/100x100.png" />
                            <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">Jane Smith</span>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm">"Alex was fantastic! The lab report was well-researched and delivered on time."</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                         <Avatar className="h-10 w-10">
                            <AvatarImage src="https://placehold.co/100x100.png" />
                            <AvatarFallback>RB</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">Robert Brown</span>
                                <div className="flex items-center">
                                     {[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                                     <Star className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm">"Good work on the essay. A few minor revisions were needed, but overall solid."</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
