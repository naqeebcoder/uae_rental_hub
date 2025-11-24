import React, { useState } from "react";
import sectionTitleShape from "../assets/images/shapes/section-title-tagline-shape-1.png";

// ✅ Import all team images from src/assets
import teamMain1 from "../assets/images/team/team-one-1-1.jpg";
import teamMain2 from "../assets/images/team/team-one-1-2.jpg";
import teamMain3 from "../assets/images/team/team-one-1-3.jpg";
import teamMain4 from "../assets/images/team/team-one-1-4.jpg";
import teamMain5 from "../assets/images/team/team-one-1-5.jpg";

import teamButton1 from "../assets/images/team/team-one-buttons-img-1-1.jpg";
import teamButton2 from "../assets/images/team/team-one-buttons-img-1-2.jpg";
import teamButton3 from "../assets/images/team/team-one-buttons-img-1-3.jpg";
import teamButton4 from "../assets/images/team/team-one-buttons-img-1-4.jpg";
import teamButton5 from "../assets/images/team/team-one-buttons-img-1-5.jpg";

// ✅ Team data (dynamically linked to imports)
const teamMembers = [
    {
        id: 1,
        name: "Jason Ray",
        role: "SR. Driver",
        years: "07",
        imageButton: teamButton4,
        imageMain: teamMain4,
    },
    {
        id: 2,
        name: "James Vince",
        role: "Customer Service Coordinator",
        years: "03",
        imageButton: teamButton5,
        imageMain: teamMain5,
    },
    {
        id: 3,
        name: "Olivia Grace",
        role: "SR. Driver",
        years: "05",
        imageButton: teamButton1,
        imageMain: teamMain1,
    },
    {
        id: 4,
        name: "Olivia Smith",
        role: "Premium Driver",
        years: "08",
        imageButton: teamButton2,
        imageMain: teamMain2,
    },
    {
        id: 5,
        name: "James Olivia",
        role: "JR. Driver",
        years: "04",
        imageButton: teamButton3,
        imageMain: teamMain3,
    },

];

const OurPremiumDrivers = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="team-one">
            <div className="team-one__shape-1"></div>
            <div className="team-one__shape-2"></div>
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        {/* <div className="section-title__tagline-shape">
                            <img src={sectionTitleShape} alt="shape" />
                        </div> */}
                        <span className="section-title__tagline">Our Drivers</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        Meet Our Premium Drivers
                    </h2>
                </div>

                {/* Team Section */}
                <div className="team-one__inner">
                    <div className="team-one__main-tab-box tabs-box">
                        <div className="row">
                            {/* Left side tabs */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="team-one__tab-buttons-box-one">
                                    <ul className="tab-buttons list-unstyled">
                                        {teamMembers.map((member) => (
                                            <li
                                                key={member.id}
                                                className={`tab-btn ${activeTab === member.id ? "active-btn" : ""}`}
                                                onClick={() => setActiveTab(member.id)}
                                            >
                                                <div className="team-one__buttons">
                                                    <div className="team-one__buttons-experience-years">
                                                        <div className="team-one__buttons-experience-years-count">
                                                            <h3>{member.years}</h3>
                                                        </div>
                                                        <p className="team-one__buttons-experience-years-text">
                                                            Years <br /> Experience
                                                        </p>
                                                    </div>
                                                    <div className="team-one__buttons-content-box">
                                                        <div className="team-one__buttons-img-box">
                                                            <div className="team-one__buttons-img">
                                                                <img src={member.imageButton} alt={member.name} />
                                                            </div>
                                                        </div>
                                                        <div className="team-one__buttons-content">
                                                            <div className="team-one__buttons-title-box">
                                                                <h4 className="team-one__buttons-title">
                                                                    <a href="driver-details.html">{member.name}</a>
                                                                </h4>
                                                                <p className="team-one__buttons-sub-title">
                                                                    {member.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right side content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="team-one__tabs-content-outer">
                                    <div className="tabs-content">
                                        {teamMembers.map((member) => (
                                            <div
                                                key={member.id}
                                                className={`tab ${activeTab === member.id ? "active-tab" : ""}`}
                                                id={`team-${member.id}`}
                                            >
                                                <div className="team-one__tabs-content-box">
                                                    <div className="team-one__img-box">
                                                        <div className="team-one__img">
                                                            <img src={member.imageMain} alt={member.name} />
                                                            <div className="team-one__social">
                                                                <a href="#">
                                                                    <span className="icon-facebook"></span>
                                                                </a>
                                                                <a href="#">
                                                                    <span className="icon-twitter"></span>
                                                                </a>
                                                                <a href="#">
                                                                    <span className="icon-instagram-1"></span>
                                                                </a>
                                                                <a href="#">
                                                                    <span className="icon-instagram"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End right side */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPremiumDrivers;
