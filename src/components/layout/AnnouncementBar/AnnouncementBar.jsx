import { FiChevronRight, FiX } from "react-icons/fi";
import { useState } from "react";

import "./AnnouncementBar.css";

const announcements = [
    "Welcome to Jwandoon — Shop smarter, live better",
    "Mega Sale — Up to 40% Off",
    "New Arrivals Are Here — Explore Now",
];

export default function AnnouncementBar() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    const nextAnnouncement = () => {
        setCurrent((prev) => (prev + 1) % announcements.length);
    };

    if (!visible) return null;

    return (
        <div className="announcement">
            <div className="announcement__content">

                <button
                    className="announcement__arrow"
                    onClick={nextAnnouncement}
                    aria-label="Next announcement"
                >
                    <FiChevronRight />
                </button>

                <p key={current} className="announcement__text">
                    {announcements[current]}
                </p>

                <button
                    className="announcement__close"
                    onClick={() => setVisible(false)}
                    aria-label="Close announcement"
                >
                    <FiX />
                </button>

            </div>
        </div>
    );
}