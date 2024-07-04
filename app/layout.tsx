import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nor Coffee",
  description: "Specialized in European designer goods, espresso and pour over. Located in Victoria , BC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className='relative max-w-7xl flex flex-col gap-2 p-2'>
          <Navbar/>
        <Container className=''>{children}</Container>
        </Container>
        </body>
    </html>
  );
}
