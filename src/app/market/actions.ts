'use server';

import type { CoinData } from "@/components/sections/market-table";

export async function getMarketData(): Promise<CoinData[]> {
    const apiKey = process.env.COINGECKO_API_KEY;
    if (!apiKey) {
        throw new Error("CoinGecko API key not found.");
    }

    const url = `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h&x_cg_pro_api_key=${apiKey}`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to fetch from CoinGecko: ${response.statusText} - ${errorData.error || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching market data from CoinGecko:", error);
        throw error;
    }
}
