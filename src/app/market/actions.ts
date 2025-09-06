'use server';

import 'dotenv/config';
import type { CoinData } from "@/components/sections/market-table";

export async function getMarketData(): Promise<CoinData[]> {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });
        
        if (!response.ok) {
            let errorDetails = 'Unknown error';
            try {
                const errorData = await response.json();
                errorDetails = errorData.error || JSON.stringify(errorData);
            } catch (e) {
                errorDetails = response.statusText;
            }
            throw new Error(`Failed to fetch from CoinGecko: ${response.status} ${response.statusText} - ${errorDetails}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching market data from CoinGecko:", error);
        // Re-throw the error to be handled by the caller
        throw error;
    }
}
