import { AssignmentCard } from "@/components/assignment/AssignmentCard";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAssignments } from "@/lib/mock-data";


export default function FindWorkPage() {
  const openAssignments = mockAssignments.filter(a => a.status === 'Open');

  // A dummy state for the header, since it's not interactive on this page
  const setMode = () => {};

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header mode="provider" setMode={setMode} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Find Work</CardTitle>
                <CardDescription>Browse and apply for open assignments.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {openAssignments.map(a => (
                        <AssignmentCard key={a.id} assignment={a} mode="provider" />
                    ))}
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
