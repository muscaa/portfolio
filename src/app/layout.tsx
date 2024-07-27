import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import * as Config from "./Config";

import "./styles/main.css";
import "atropos/css";

const font = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: Config.userInfo.shortName + "'s Portfolio",
    description: "Built by " + Config.userInfo.nickName,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={font.className}>
                {children}
            </body>
        </html>
    );
}
