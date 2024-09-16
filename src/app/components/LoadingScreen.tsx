import React from "react";
import { useState, useEffect } from "react";
import PartyParrot from "../svg/PartyParrot";
import * as Tracker from "../Tracker";

export default function LoadingScreen({ loading }: { loading: boolean }) {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (loading) return;

        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen == null) return;

        loadingScreen.style.opacity = "0";
        loadingScreen.style.scale = "2";
        
        setTimeout(() => {
            Tracker.onEnter();

            loadingScreen.style.display = "none";
            setVisible(false);
        }, 500);
    }, [ loading ]);

    if (!visible) return <></>;
    return (
        <div id="loading-screen" className="fixed inset-0 transition-all duration-500 ease-in-out bg-background-1 z-50">
            <div className="flex flex-col w-full h-full justify-center items-center">
                <PartyParrot className="w-64 h-64" />
                <h2 className="font-bold p-16">Loading...</h2>
            </div>
        </div>
    );
}
