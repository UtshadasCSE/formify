import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formify - Create, Customize, Collect – Seamlessly!",
  description: "Formify – Effortless Form Building, Simplified",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body className={`${inter.className} antialiased max-w-7xl mx-auto`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
