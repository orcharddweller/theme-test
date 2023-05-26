"use client";

import { ThemeProvider } from "next-themes";

export interface ClientContextProvidersProps {
  children: React.ReactNode;
}

export const ClientContextProviders = ({
  children,
}: ClientContextProvidersProps) => <ThemeProvider>{children}</ThemeProvider>;
