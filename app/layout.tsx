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
    href: 'dashboard',
    disabled: false,
  },
  {
    title: 'Tickets',
    href: 'tickets',
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="mx-10 lg:mx-24 z-40 bg-background">
            <div className="flex h-20 items-center justify-between py-6">
              <MainNav items={routes} />
              <ModeToggle />
            </div>
          </header>
          <main className="m-10 md:m-16 lg:m-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
