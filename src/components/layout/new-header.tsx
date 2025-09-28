
'use client';
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { navLinks, type NavLink } from "@/lib/nav-links.tsx";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { getNews, NewsPost } from "@/app/admin/actions";
import { formatDistanceToNow, sub } from "date-fns";

interface NewHeaderProps {
    onMenuClick: () => void;
}

export default function NewHeader({ onMenuClick }: NewHeaderProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<NavLink[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [news, setNews] = useState<NewsPost[]>([]);
    const [hasRecentNews, setHasRecentNews] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            const newsItems = await getNews();
            setNews(newsItems);
            const twentyFourHoursAgo = sub(new Date(), { hours: 24 });
            const recentNews = newsItems.some(item => new Date(item.createdAt) > twentyFourHoursAgo);
            setHasRecentNews(recentNews);
        }
        fetchNews();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const results = navLinks.filter(link =>
                link.label.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    useEffect(() => {
        setSearchQuery('');
        setIsSearchFocused(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Button variant="outline" size="icon" className="md:hidden flex-shrink-0" onClick={onMenuClick}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="relative flex-1" ref={searchRef}>
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 sm:w-full md:w-1/3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                />
                {isSearchFocused && searchResults.length > 0 && (
                    <div className="absolute top-full mt-2 w-full md:w-1/3 rounded-md border bg-popover text-popover-foreground shadow-md">
                        <ul>
                            {searchResults.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="flex items-center gap-3 px-4 py-2 hover:bg-accent">
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex flex-shrink-0 items-center justify-end gap-2 md:gap-4">
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            {hasRecentNews && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Recent News</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {news.length > 0 ? (
                            news.slice(0, 5).map(item => (
                                <DropdownMenuItem key={item.id} asChild>
                                    <a href={`/news/${item.id}`} className="cursor-pointer">
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                                            </p>
                                        </div>
                                    </a>
                                </DropdownMenuItem>
                            ))
                        ) : (
                            <DropdownMenuItem disabled>No news yet.</DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
