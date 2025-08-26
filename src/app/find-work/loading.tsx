import { AssignmentListSkeleton } from "@/components/common/Skeletons";

export default function Loading() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="h-8 w-44 rounded bg-muted animate-pulse" />
      <AssignmentListSkeleton />
    </main>
  );
}


