import "./globals.css";
import { Inter } from "next/font/google";
import { ClientContextProviders } from "@/lib/ClientContextProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientContextProviders>
        <body className={inter.className}>{children}</body>
      </ClientContextProviders>
    </html>
  );
}
