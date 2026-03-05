/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    //basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    //assetPrefix: process.env.NODE_ENV === "production" ? "https://muscaa.github.io/portfolio/" : "",
    basePath: "",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://musca.dev/" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
