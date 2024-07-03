import React from "react";

export default function CheckAll({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="currentColor"
            stroke="currentColor"
            className={className}
        >
            <path d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 16 C 2 17.105 2.895 18 4 18 L 16 18 C 17.105 18 18 17.105 18 16 L 18 4 C 18 2.895 17.105 2 16 2 L 4 2 z M 14 6 C 14.256 6 14.512031 6.0979687 14.707031 6.2929688 C 15.097031 6.6829687 15.097031 7.3170312 14.707031 7.7070312 L 9.7070312 12.707031 C 9.3170313 13.098031 8.6829687 13.098031 8.2929688 12.707031 L 5.2929688 9.7070312 C 4.9029688 9.3170312 4.9029687 8.6829688 5.2929688 8.2929688 C 5.6829687 7.9029688 6.3170313 7.9029687 6.7070312 8.2929688 L 9 10.585938 L 13.292969 6.2929688 C 13.487969 6.0979687 13.744 6 14 6 z M 21 6 C 20.448 6 20 6.448 20 7 L 20 20 L 7 20 C 6.448 20 6 20.448 6 21 C 6 21.552 6.448 22 7 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 7 C 22 6.448 21.552 6 21 6 z" />
        </svg>
    );
}
