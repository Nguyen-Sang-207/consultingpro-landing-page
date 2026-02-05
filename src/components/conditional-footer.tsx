"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ConditionalFooter() {
    const pathname = usePathname();

    // Don't show footer on contact page or if we are in a sub-route of contact
    if (pathname === "/contact") {
        return null;
    }

    return <Footer />;
}
