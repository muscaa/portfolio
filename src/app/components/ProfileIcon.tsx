import React from "react";
import Image from "next/image";

export default function ProfileIcon({ className }: { className?: string }) {
    return (
        <Image src="profile_32x32.png" width={32} height={32} alt="Profile" className={`rounded-full ${className}`} />
    );
}
