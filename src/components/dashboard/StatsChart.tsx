"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  total: {
    label: "Total",
  },
};

export function StatsChart({ title, yAxisLabel }: { title: string, yAxisLabel: string }) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setChartData([
      { month: "January", total: Math.floor(Math.random() * 2000) + 500 },
      { month: "February", total: Math.floor(Math.random() * 2000) + 500 },
      { month: "March", total: Math.floor(Math.random() * 2000) + 500 },
      { month: "April", total: Math.floor(Math.random() * 2000) + 500 },
      { month: "May", total: Math.floor(Math.random() * 2000) + 500 },
      { month: "June", total: Math.floor(Math.random() * 2000) + 500 },
    ]);
  }, []);


  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        {isClient ? (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value}`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        ) : (
          <div className="min-h-[200px] w-full flex items-center justify-center">Loading chart...</div>
        )}
      </CardContent>
    </Card>
  )
}
