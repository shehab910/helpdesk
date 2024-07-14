import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { NavItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HelpDesk',
  // description: '',
};

const routes: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    disabled: false,
  },
  {
    title: 'Tickets',
    href: '/tickets',
    disabled: false,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-[100vh] grid grid-rows-[auto_1fr] ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="z-40 bg-background px-8">
            <div className="max-w-screen-lg w-full mx-auto flex h-20 items-center justify-between py-6">
              <MainNav items={routes} />
              <div className="flex gap-4 items-center">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/shehab910/helpdesk"
                    target="_blank"
                  >
                    <Github />
                    <span className="sr-only">Github Repository</span>
                  </a>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </header>
          <main className="max-w-screen-lg w-full mx-auto px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
