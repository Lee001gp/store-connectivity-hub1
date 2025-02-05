
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, User } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <span className="text-xl font-semibold">ConnectMall</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Malls</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Stores</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Events</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Deals</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
