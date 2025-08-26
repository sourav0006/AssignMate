export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm">
        <div className="h-8 w-40 rounded bg-muted animate-pulse mb-6 mx-auto" />
        <div className="space-y-3">
          <div className="h-4 w-24 rounded bg-muted animate-pulse" />
          <div className="h-10 w-full rounded bg-muted animate-pulse" />
          <div className="h-4 w-24 rounded bg-muted animate-pulse mt-4" />
          <div className="h-10 w-full rounded bg-muted animate-pulse" />
          <div className="h-10 w-full rounded bg-muted animate-pulse mt-6" />
        </div>
      </div>
    </div>
  );
}


