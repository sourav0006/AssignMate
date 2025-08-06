
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
            <div>
                <Label htmlFor="theme" className="font-semibold">Theme</Label>
                <p className="text-sm text-muted-foreground">Select your preferred theme.</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted p-1">
                <Button 
                    variant={theme === 'light' ? 'default' : 'ghost'} 
                    size="sm"
                    onClick={() => setTheme('light')}
                    className={cn("gap-2", theme === 'light' && "bg-background text-foreground shadow-sm")}
                >
                    <Sun className="h-4 w-4" />
                    Light
                </Button>
                 <Button 
                    variant={theme === 'dark' ? 'default' : 'ghost'}
                    size="sm" 
                    onClick={() => setTheme('dark')}
                    className={cn("gap-2", theme === 'dark' && "bg-background text-foreground shadow-sm")}
                >
                    <Moon className="h-4 w-4" />
                    Dark
                </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
