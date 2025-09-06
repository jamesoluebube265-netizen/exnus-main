'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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
      <div className="p-2 border rounded-lg bg-white/80 backdrop-blur-sm shadow-lg text-black">
        <p className="label font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="hsl(var(--border))" fill="none" />
      <circle cx={ex} cy={ey} r={2} fill="hsl(var(--border))" stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-xs">{`${name} ${value}%`}</text>
    </g>
  );
};


export function TokenomicsDiagram() {
  return (
    <div className="relative w-full text-black font-sans">
        <h3 className="text-center font-bold text-lg mb-6 text-accent">Token Allocation Overview</h3>
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 120, bottom: 20, left: 120 }}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{fontSize: "14px", paddingTop: '20px'}}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
