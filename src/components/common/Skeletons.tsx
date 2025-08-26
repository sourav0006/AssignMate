"use client";

import React from "react";

export const TextSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse rounded bg-muted ${className ?? "h-4 w-24"}`} />
);

export const CardSkeleton: React.FC = () => (
  <div className="animate-pulse rounded-lg border bg-card p-4">
    <div className="h-5 w-32 rounded bg-muted" />
    <div className="mt-3 h-4 w-52 rounded bg-muted" />
    <div className="mt-6 h-10 w-full rounded bg-muted" />
  </div>
);

export const AssignmentListSkeleton: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="animate-pulse rounded-lg border bg-card p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-muted" />
          <div className="flex-1">
            <div className="h-4 w-2/3 rounded bg-muted" />
            <div className="mt-2 h-3 w-1/3 rounded bg-muted" />
          </div>
        </div>
        <div className="mt-4 h-3 w-full rounded bg-muted" />
        <div className="mt-2 h-3 w-5/6 rounded bg-muted" />
        <div className="mt-6 flex items-center justify-between">
          <div className="h-8 w-24 rounded bg-muted" />
          <div className="h-8 w-20 rounded bg-muted" />
        </div>
      </div>
    ))}
  </div>
);

export const ChatSkeleton: React.FC = () => (
  <div className="flex h-full flex-col">
    <div className="flex items-center gap-4 border-b p-4">
      <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
      <div className="h-4 w-40 rounded bg-muted animate-pulse" />
    </div>
    <div className="flex-1 space-y-4 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
          <div className="h-14 w-2/3 max-w-md rounded-lg bg-muted animate-pulse" />
        </div>
      ))}
    </div>
    <div className="border-t p-4">
      <div className="h-10 w-full rounded bg-muted animate-pulse" />
    </div>
  </div>
);

export const DashboardSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-lg border bg-card p-4">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="mt-4 h-7 w-20 rounded bg-muted" />
          <div className="mt-2 h-3 w-28 rounded bg-muted" />
        </div>
      ))}
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="animate-pulse rounded-lg border bg-card p-4 h-72" />
      <div className="animate-pulse rounded-lg border bg-card p-4 h-72" />
    </div>
  </div>
);


