import { FiChevronRight, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

import "./AnnouncementBar.css";

const announcements = [
    "Welcome to Jwandoon — Shop smarter, live better",
    "Mega Sale — Enjoy up to 40% off selected items",
    "Fresh arrivals are here — Discover something new",
];

export default function AnnouncementBar() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((previous) =>
                (previous + 1) % announcements.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextAnnouncement = () => {
        setCurrent((previous) =>
            (previous + 1) % announcements.length
        );
    };

    if (!visible) return null;

    return (
        <div
            className="announcement"
            role="region"
            aria-label="Store announcements"
        >
            <div className="announcement__content">

                <button
                    type="button"
                    className="announcement__arrow"
                    onClick={nextAnnouncement}
                    aria-label="Show next announcement"
                >
                    <FiChevronRight />
                </button>

                <div
                    className="announcement__message"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <p
                        key={current}
                        className="announcement__text"
                    >
                        {announcements[current]}
                    </p>
                </div>

                <button
                    type="button"
                    className="announcement__close"
                    onClick={() => setVisible(false)}
                    aria-label="Close announcement bar"
                >
                    <FiX />
                </button>

            </div>
        </div>
    );
}