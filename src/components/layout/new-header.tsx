'use client';
import { Search, Gift, Bell, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewHeaderProps {
    onMenuClick: () => void;
}

export default function NewHeader({ onMenuClick }: NewHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:px-6">
            <Button variant="outline" size="icon" className="md:hidden" onClick={onMenuClick}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="relative hidden flex-1 md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 sm:w-full md:w-1/3"
                />
            </div>
            <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
                <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    <span>Refer & earn up to 200 USD</span>
                </Button>
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
