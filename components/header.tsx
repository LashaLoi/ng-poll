"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ToggleButton } from "@/core/theme/toggle-button";
import { ArrowRightToLine } from "lucide-react";

export function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation: { name: string; href: string }[] = [
    // { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Services", href: "/services" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  NG
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">POLL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <Button size="icon" data-testid="login-button">
                <ArrowRightToLine />
              </Button>
            </Link>
            <ToggleButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex justify-between items-center  border-border/40">
              <Link href="/auth">
                <Button size="icon" className="mr-2" data-testid="login-button">
                  <ArrowRightToLine />
                </Button>
              </Link>
              <ToggleButton />
            </div>
          </div>
          {/* <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div> */}
        </div>

        {/* Mobile Navigation */}
        {/* <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-border/40">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-border/40">
              <Link href="/auth">
                <Button className="justify-start">Войти</Button>
              </Link>
              <ToggleButton />
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
