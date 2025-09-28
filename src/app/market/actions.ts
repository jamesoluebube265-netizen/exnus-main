
'use server';

import 'dotenv/config';
import type { CoinData } from "@/components/sections/market-table";

const EXN_CONTRACT_ADDRESS = "7hRdxndD54xoWmjyXDtBWNYeeUANdhTZMxk1iguZ6fFJ";

async function getExnTokenData(): Promise<CoinData | null> {
    const url = `https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${EXN_CONTRACT_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });
        if (!response.ok) {
            console.error(`Failed to fetch EXN token data: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        const exnData = data[EXN_CONTRACT_ADDRESS.toLowerCase()];

        if (!exnData) return null;

        const exnCoinData: CoinData = {
            id: 'exnus-protocol',
            symbol: 'EXN',
            name: 'Exnus Protocol',
            image: 'https://i.imgur.com/2Y0bBqF.jpeg', 
            current_price: exnData.usd,
            price_change_percentage_24h: exnData.usd_24h_change,
            market_cap: exnData.usd_market_cap,
            total_volume: exnData.usd_24h_vol,
            high_24h: exnData.usd, // Simple API doesn't provide high/low
            low_24h: exnData.usd, // Simple API doesn't provide high/low
            sparkline_in_7d: {
                price: Array(168).fill(exnData.usd) // Placeholder sparkline
            },
        };
        return exnCoinData;

    } catch (error) {
        console.error("Error fetching EXN token data:", error);
        return null;
    }
}


export async function getMarketData(): Promise<CoinData[]> {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h`;

    try {
        const [exnTokenData, marketListData] = await Promise.all([
            getExnTokenData(),
            fetch(url, { next: { revalidate: 60 } }).then(res => {
                if (!res.ok) {
                     let errorDetails = 'Unknown error';
                    try {
                        const errorData = res.json();
                        errorDetails = JSON.stringify(errorData);
                    } catch (e) {
                        errorDetails = res.statusText;
                    }
                    throw new Error(`Failed to fetch from CoinGecko: ${res.status} ${res.statusText} - ${errorDetails}`);
                }
                return res.json();
            })
        ]);

        const otherCoins = marketListData.filter((coin: CoinData) => coin.id !== 'exnus-protocol');

        const combinedData = exnTokenData ? [exnTokenData, ...otherCoins] : otherCoins;
        
        return combinedData;

    } catch (error) {
        console.error("Error fetching market data from CoinGecko:", error);
        throw error;
    }
}
