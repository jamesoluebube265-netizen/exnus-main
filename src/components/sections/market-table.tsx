'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SparklineChart } from "@/components/charts/sparkline-chart";
import { Badge } from "@/components/ui/badge";

const mockData = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    price: 68123.45,
    change: 2.5,
    marketCap: '1.34T',
    chartData: [67000, 67200, 67100, 67500, 67300, 67800, 68123.45],
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
    price: 3456.78,
    change: -1.2,
    marketCap: '415.2B',
    chartData: [3500, 3480, 3490, 3470, 3460, 3450, 3456.78],
  },
  {
    name: 'Solana',
    ticker: 'SOL',
    price: 165.21,
    change: 5.8,
    marketCap: '76.1B',
    chartData: [155, 158, 157, 160, 162, 164, 165.21],
  },
  {
    name: 'Cardano',
    ticker: 'ADA',
    price: 0.45,
    change: 0.5,
    marketCap: '16.2B',
    chartData: [0.44, 0.445, 0.442, 0.448, 0.451, 0.45, 0.45],
  },
  {
    name: 'Ripple',
    ticker: 'XRP',
    price: 0.52,
    change: -0.8,
    marketCap: '28.9B',
    chartData: [0.53, 0.528, 0.525, 0.526, 0.522, 0.521, 0.52],
  },
  {
    name: 'Dogecoin',
    ticker: 'DOGE',
    price: 0.15,
    change: 10.2,
    marketCap: '21.7B',
    chartData: [0.13, 0.135, 0.14, 0.142, 0.145, 0.148, 0.15],
  },
];

export default function MarketTable() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>24h Change</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead className="text-right">7-Day Chart</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockData.map((coin) => (
                        <TableRow key={coin.ticker}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                                        {coin.ticker.charAt(0)}
                                    </div>
                                    <div>
                                        {coin.name}
                                        <span className="text-muted-foreground ml-2">{coin.ticker}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>${coin.price.toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant={coin.change >= 0 ? "default" : "destructive"} className={coin.change >= 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}>
                                    {coin.change > 0 ? '+' : ''}{coin.change}%
                                </Badge>
                            </TableCell>
                            <TableCell>${coin.marketCap}</TableCell>
                            <TableCell className="text-right">
                                <div className="h-10 w-32 ml-auto">
                                    <SparklineChart 
                                        data={coin.chartData.map(val => ({ value: val }))} 
                                        color={coin.change >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
