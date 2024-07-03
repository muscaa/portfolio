import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: "Musca's Portfolio",
    description: "Built using Next.js and React",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                {children}
            </body>
        </html>
    );
}
