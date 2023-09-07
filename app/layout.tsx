import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Xynapse Texhnologies",
  description: "A Digital Solution Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={cn(poppins.className, "dark:bg-slate-950")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="xynapse-tech"
        >
          <Navbar />
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#E8F5E9",
                  color: "#1B5E20",
                },
              },
              error: {
                style: {
                  background: "#FFEBEE",
                  color: "#80393C",
                },
              },
            }}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
