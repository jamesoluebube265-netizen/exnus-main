
'use client';

import { useState, useMemo } from "react";
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
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const generateMockData = (count: number) => {
    const data = [];
    const baseCoins = [
        { name: 'Bitcoin', ticker: 'BTC', price: 68123.45, change: 2.5, marketCap: 1.34e12 },
        { name: 'Ethereum', ticker: 'ETH', price: 3456.78, change: -1.2, marketCap: 415.2e9 },
        { name: 'Solana', ticker: 'SOL', price: 165.21, change: 5.8, marketCap: 76.1e9 },
        { name: 'Cardano', ticker: 'ADA', price: 0.45, change: 0.5, marketCap: 16.2e9 },
        { name: 'Ripple', ticker: 'XRP', price: 0.52, change: -0.8, marketCap: 28.9e9 },
        { name: 'Dogecoin', ticker: 'DOGE', price: 0.15, change: 10.2, marketCap: 21.7e9 },
        { name: 'Avalanche', ticker: 'AVAX', price: 35.6, change: -3.1, marketCap: 14.1e9 },
        { name: 'Polkadot', ticker: 'DOT', price: 7.15, change: 1.5, marketCap: 10.2e9 },
        { name: 'Chainlink', ticker: 'LINK', price: 18.5, change: 4.2, marketCap: 11.1e9 },
        { name: 'Polygon', ticker: 'MATIC', price: 0.75, change: -0.5, marketCap: 7.5e9 },
    ];

    for (let i = 0; i < count; i++) {
        const base = baseCoins[i % baseCoins.length];
        const randomFactor = 1 + (Math.random() - 0.5) * 0.2; // +/- 10%
        data.push({
            name: `${base.name}${i >= baseCoins.length ? ` ${Math.floor(i / baseCoins.length)}` : ''}`,
            ticker: `${base.ticker}${i >= baseCoins.length ? `${Math.floor(i / baseCoins.length)}` : ''}`,
            price: base.price * randomFactor,
            change: (Math.random() - 0.5) * 20, // -10% to 10%
            marketCap: (base.marketCap * randomFactor).toExponential(2).replace('e+', 'e'),
            chartData: Array.from({ length: 7 }, () => base.price * (1 + (Math.random() - 0.5) * 0.1)),
        });
    }
    return data;
};

const formatMarketCap = (marketCapStr: string) => {
    const num = parseFloat(marketCapStr);
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return num.toString();
};

const mockData = generateMockData(100);
const ITEMS_PER_PAGE = 20;

export default function MarketTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return mockData.slice(startIndex, endIndex);
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px] pl-6">Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>24h Change</TableHead>
                            <TableHead>Market Cap</TableHead>
                            <TableHead className="text-right pr-6">7-Day Chart</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((coin) => (
                            <TableRow key={coin.ticker}>
                                <TableCell className="font-medium pl-6">
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
                                <TableCell>${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                                <TableCell>
                                    <Badge variant={coin.change >= 0 ? "default" : "destructive"} className={coin.change >= 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}>
                                        {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                                    </Badge>
                                </TableCell>
                                <TableCell>${formatMarketCap(coin.marketCap)}</TableCell>
                                <TableCell className="text-right pr-6">
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
            <div className="flex items-center justify-center gap-4 py-8">
                <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                </Button>
                <span className="text-sm text-foreground/80">
                    Page {currentPage} of {totalPages}
                </span>
                <Button variant="outline" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                </Button>
            </div>
        </div>
    )
}
