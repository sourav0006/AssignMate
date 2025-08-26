import { DashboardSkeleton } from "@/components/common/Skeletons";

export default function Loading() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="space-y-2">
        <div className="h-8 w-56 rounded bg-muted animate-pulse" />
        <div className="h-4 w-80 rounded bg-muted animate-pulse" />
      </div>
      <DashboardSkeleton />
    </main>
  );
}


