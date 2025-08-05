"use client";

import type { Dispatch, SetStateAction } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type ModeToggleProps = {
  mode: "requester" | "provider";
  setMode: Dispatch<SetStateAction<"requester" | "provider">>;
};

export function ModeToggle({ mode, setMode }: ModeToggleProps) {
  const isProviderMode = mode === 'provider';

  const handleToggle = (checked: boolean) => {
    setMode(checked ? 'provider' : 'requester');
  }

  return (
    <div className="flex items-center space-x-2 bg-muted p-1 rounded-lg">
      <Label htmlFor="mode-toggle" className={`px-3 py-1 text-sm rounded-md transition-colors ${!isProviderMode ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>
        Requester
      </Label>
      <Switch id="mode-toggle" checked={isProviderMode} onCheckedChange={handleToggle} />
      <Label htmlFor="mode-toggle" className={`px-3 py-1 text-sm rounded-md transition-colors ${isProviderMode ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>
        Provider
      </Label>
    </div>
  );
}
