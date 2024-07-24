import React from "react";
import Image from "next/image";

export default function Maxi({ className }: { className?: string }) {
    return (
        <Image src="maxi_32x32.png" width={32} height={32} alt="Maxi" className={className} />
    );
}
