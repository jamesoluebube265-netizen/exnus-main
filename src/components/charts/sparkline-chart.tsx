'use client'
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

interface SparklineChartProps {
    data: { value: number }[];
    color?: string;
}

export function SparklineChart({ data, color = 'hsl(var(--primary))' }: SparklineChartProps) {
    const minValue = Math.min(...data.map(d => d.value));
    const maxValue = Math.max(...data.map(d => d.value));
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <YAxis hide domain={[minValue, maxValue]} />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke={color}
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
