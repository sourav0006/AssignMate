import { CreateAssignmentForm } from "@/components/assignment/CreateAssignmentForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateAssignmentPage() {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Link>
        </Button>
        <Card>
            <CardHeader>
            <CardTitle className="text-2xl font-headline">Create a New Assignment</CardTitle>
            <CardDescription>
                Fill out the details below to post your assignment. It will be visible to providers near your location.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <CreateAssignmentForm />
            </CardContent>
        </Card>
        </div>
    </div>
  );
}
