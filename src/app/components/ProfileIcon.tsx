import React from "react";
import Image from "next/image";

export default function ProfileIcon({ className }: { className?: string }) {
    return (
        <Image src="profile_64x64.png" width={32} height={32} alt="Profile" className={`rounded-full ${className}`} />
    );
}
