import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const Counter = () => {
    const [counts, setCounts] = useState({
        vehicles: 0,
        miles: 0,
        bookings: 0,
        pickups: 0,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounts({
                vehicles: 50,
                miles: 1000,
                bookings: 10,
                pickups: 50,
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const counterData = [
        {
            id: 1,
            icon: "icon-car",
            count: counts.vehicles,
            suffix: "+",
            text: "Vehicle fleet",
            animation: "fadeInLeft",
            delay: "100ms",
        },
        {
            id: 2,
            icon: "icon-mileage",
            count: counts.miles,
            suffix: "+",
            text: "Miles of drive",
            animation: "fadeInLeft",
            delay: "200ms",
        },
        {
            id: 3,
            icon: "icon-range",
            count: counts.bookings,
            suffix: "+",
            text: "Booking reserved",
            animation: "fadeInRight",
            delay: "300ms",
        },
        {
            id: 4,
            icon: "icon-pin-2",
            count: counts.pickups,
            suffix: "+",
            text: "Pickup & drop",
            animation: "fadeInRight",
            delay: "400ms",
        },
    ];

    return (
        <section className="counter-two">
            <div className="container">
                <div className="counter-two__inner">
                    <ul className="list-unstyled counter-two__list">
                        {counterData.map((item) => (
                            <li
                                key={item.id}
                                className={`wow ${item.animation}`}
                                data-wow-delay={item.delay}
                                data-wow-duration="1500ms"
                            >
                                <div className="counter-two__single">
                                    <div className="counter-two__shape-1"></div>
                                    <div className="counter-two__shape-2"></div>
                                    <div className="counter-two__single-inner">
                                        <div className="counter-two__icon">
                                            <span className={item.icon}></span>
                                        </div>
                                        <div className="counter-two__count-box">
                                            <h3 className="odometer">
                                                <Odometer value={item.count} format="d" duration={1000} />
                                            </h3>
                                            <span>{item.suffix}</span>
                                        </div>
                                        <p className="counter-two__count-text">{item.text}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Counter;
