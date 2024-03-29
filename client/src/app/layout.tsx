import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trx",
  description: "Trx test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        {/* <QueryClientProvider client={queryClient}> */}
        {children}
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
