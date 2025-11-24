// src/JSLoader.jsx
import { useEffect } from "react";

const jsFiles = [
    "/assets/js/jquery-3.6.0.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/jarallax.min.js",
    "/assets/js/swiper.min.js",
    "/assets/js/wow.js",
    "/assets/js/aos.js",
    "/assets/js/gsap/gsap.js",
    "/assets/js/gsap/ScrollTrigger.js",
    "/assets/js/script.js", // your theme main script (depends on above)
];

export default function JSLoader({ children }) {
    useEffect(() => {
        const appended = [];

        const load = (src) =>
            new Promise((resolve, reject) => {
                // avoid duplicate
                if (document.querySelector(`script[src="${src}"]`)) return resolve();
                const s = document.createElement("script");
                s.src = src;
                s.async = false; // preserve execution order
                s.defer = false;
                s.onload = () => resolve();
                s.onerror = () => reject(new Error("Failed to load " + src));
                document.body.appendChild(s);
                appended.push(s);
            });

        // Load sequentially to preserve dependencies (jQuery -> plugins -> script.js)
        (async () => {
            for (const f of jsFiles) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    await load(f);
                } catch (e) {
                    // log and continue — good for debugging
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            }
        })();

        return () => {
            // optional cleanup on unmount (remove scripts we appended)
            appended.forEach((s) => s.remove());
        };
    }, []);

    return children;
}
