
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-background/80 border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#home"
          className="font-mono text-xl font-medium tracking-tight hover:text-accent transition-colors"
        >
          design<span className="text-accent">.</span>engineer
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-accent text-white hover:bg-accent/80">Get in Touch</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col pt-20 p-6 transition-transform duration-300 ease-in-out md:hidden z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-accent text-white hover:bg-accent/80 mt-4 w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView();
            }}
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
