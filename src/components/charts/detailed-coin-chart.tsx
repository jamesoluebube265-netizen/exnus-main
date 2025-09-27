'use client';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DetailedCoinChartProps {
    data: { date: string, price: number }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-lg bg-background/80 backdrop-blur-sm shadow-lg text-foreground">
        <p className="label font-bold">{new Date(label).toLocaleDateString()}</p>
        <p className="intro text-primary">{`Price : $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

export function DetailedCoinChart({ data }: DetailedCoinChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                <XAxis 
                    dataKey="date" 
                    tickFormatter={(tick) => new Date(tick).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                />
                <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '14px', color: 'hsl(var(--foreground))' }} />
                <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                    name="Price (USD)"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
