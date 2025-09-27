'use client';
import { Search, Bell, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { navLinks, type NavLink } from "@/lib/nav-links.tsx";
import { usePathname } from "next/navigation";

interface NewHeaderProps {
    onMenuClick: () => void;
}

export default function NewHeader({ onMenuClick }: NewHeaderProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<NavLink[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

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
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:px-6">
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
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}
