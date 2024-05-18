import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { NavItem } from '@/types';

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
              <ModeToggle />
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
