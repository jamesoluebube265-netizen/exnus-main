
'use client';

import { useState, useMemo, useEffect } from "react";
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
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DetailedCoinChart } from "../charts/detailed-coin-chart";
import { getMarketData } from "@/app/market/actions";
import Image from "next/image";
import { Input } from "../ui/input";

const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(2)}M`;
    return marketCap.toString();
};

const ITEMS_PER_PAGE = 20;

export interface CoinData {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    sparkline_in_7d: {
        price: number[];
    };
    price_history?: { date: string, price: number }[];
}


export default function MarketTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [marketData, setMarketData] = useState<CoinData[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<CoinData | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getMarketData();
                setMarketData(data);
            } catch (error) {
                console.error("Failed to fetch market data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredData = useMemo(() => {
        return marketData.filter(coin =>
            coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [marketData, searchQuery]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredData.slice(startIndex, endIndex);
    }, [currentPage, filteredData]);
    
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleRowClick = async (coin: CoinData) => {
        const priceHistory = coin.sparkline_in_7d.price.map((price, index) => {
            const date = new Date();
            date.setDate(date.getDate() - (coin.sparkline_in_7d.price.length - 1 - index));
            return {
                date: date.toISOString().split('T')[0],
                price: price,
            };
        });
        setSelectedCoin({ ...coin, price_history: priceHistory });
    };

    if (loading) {
        return <div className="text-center py-10">Loading market data...</div>;
    }

    return (
        <Dialog>
            <div className="w-full">
                <div className="mb-4 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search for a cryptocurrency..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-sm pl-10"
                    />
                </div>
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
                                <DialogTrigger asChild key={coin.id}>
                                    <TableRow onClick={() => handleRowClick(coin)} className="cursor-pointer">
                                        <TableCell className="font-medium pl-6">
                                            <div className="flex items-center gap-3">
                                                <Image src={coin.image} alt={coin.name} width={24} height={24} className="w-6 h-6 rounded-full" />
                                                <div>
                                                    {coin.name}
                                                    <span className="text-muted-foreground ml-2">{coin.symbol.toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                                        <TableCell>
                                            <Badge variant={coin.price_change_percentage_24h >= 0 ? "default" : "destructive"} className={coin.price_change_percentage_24h >= 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}>
                                                {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                                            </Badge>
                                        </TableCell>
                                        <TableCell>${formatMarketCap(coin.market_cap)}</TableCell>
                                        <TableCell className="text-right pr-6">
                                            <div className="h-10 w-32 ml-auto">
                                                <SparklineChart 
                                                    data={coin.sparkline_in_7d.price.map((val: number) => ({ value: val }))} 
                                                    color={coin.price_change_percentage_24h >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </DialogTrigger>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {totalPages > 1 && (
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
                )}
            </div>
            {selectedCoin && (
                <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedCoin.name} ({selectedCoin.symbol.toUpperCase()}) Price Chart</DialogTitle>
                    </DialogHeader>
                    <div className="h-[400px] w-full pt-4">
                        <DetailedCoinChart data={selectedCoin.price_history || []} />
                    </div>
                </DialogContent>
            )}
        </Dialog>
    )
}
