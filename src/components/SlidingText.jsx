import React from "react";

const SlidingText = () => {
    const textItems = [
        { label: "Premium", icon: "icon-jeep" },
        { label: "Rates", icon: "icon-cuv" },
        { label: "Car", icon: "icon-jeep" },
        { label: "Rental", icon: "icon-cuv" },
        { label: "Worldwide", icon: "icon-jeep" },
        { label: "Affordable", icon: "icon-cuv" },
    ];

    return (
        <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled marquee_mode">
                    {textItems.map((item, index) => (
                        <li key={index}>
                            <h2
                                data-hover={item.label}
                                className="sliding-text__title"
                            >
                                {item.label} <span className={item.icon}></span>
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SlidingText;
