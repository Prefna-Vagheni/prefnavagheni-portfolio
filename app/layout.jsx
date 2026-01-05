import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from './_components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Prefna Portfolio | Full Stack Engineer',
  description: 'Engineering excellence in every commit.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <div className="relative flex flex-col min-h-screen">{children}</div>

          <footer className="py-10 text-center font-mono text-[10px] opacity-20">
            SYSTEM_STATUS: OPERATIONAL // PORTFOLIO_V1.0
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
