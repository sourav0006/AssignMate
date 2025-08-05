import type { Assignment } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, IndianRupee, MapPin, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type AssignmentCardProps = {
  assignment: Assignment;
  mode: 'requester' | 'provider';
};

export function AssignmentCard({ assignment, mode }: AssignmentCardProps) {
  const getBadgeVariant = (status: Assignment['status']) => {
    switch (status) {
      case 'Open': return 'default';
      case 'In Progress': return 'secondary';
      case 'Completed': return 'outline';
      case 'Pending Approval': return 'default';
      default: return 'destructive';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-headline">{assignment.title}</CardTitle>
          <Badge variant={getBadgeVariant(assignment.status)}>{assignment.status}</Badge>
        </div>
        <CardDescription className="flex items-center gap-2 pt-2">
           <Avatar className="h-6 w-6">
              <AvatarImage src={assignment.requester.avatarUrl} />
              <AvatarFallback>{assignment.requester.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{assignment.requester.name}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{assignment.description}</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-primary" />
                <span>{assignment.amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{assignment.deadline.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{assignment.location}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/assignment/${assignment.id}`}>
            {mode === 'provider' ? 'View & Apply' : 'View Details'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
