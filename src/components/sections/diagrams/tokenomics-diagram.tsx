'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Staking Rewards', value: 77.2 },
  { name: 'Community Airdrop', value: 8 },
  { name: 'Liquidity Provision', value: 8 },
  { name: 'Team Allocation', value: 4 },
  { name: 'DAO Treasury', value: 2 },
  { name: 'Advisors Allocation', value: 0.8 },
];

const COLORS = ['hsl(var(--primary))', '#6b7280', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-lg bg-background/80 backdrop-blur-sm shadow-lg text-foreground">
        <p className="label font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const labelRadius = outerRadius + 30;
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  const sx = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
  const sy = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${x},${y}`} stroke="hsl(var(--muted-foreground))" fill="none" />
      <circle cx={x} cy={y} r={2} fill="hsl(var(--muted-foreground))" />
      <text x={x + (x > cx ? 1 : -1) * 8} y={y} textAnchor={textAnchor} fill="hsl(var(--foreground))" fontSize="12px" dominantBaseline="central">
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};


export function TokenomicsDiagram() {
  return (
    <div className="relative w-full font-sans">
        <h3 className="text-center font-bold text-lg mb-6 text-accent">Token Allocation Overview</h3>
        <div className="w-full h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={50}
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={2}
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
