import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(
                hash.substring(1)
            );

            if (element) {
                requestAnimationFrame(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                });

                return;
            }
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname, search, hash]);

    return null;
}