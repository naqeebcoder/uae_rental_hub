// Home.jsx
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TopBanner from "../components/TopBanner";
import SlidingText from "../components/SlidingText";
import MainSlider from "../components/MainSlider";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import InterestedAsCompany from "../components/InterestedAsCompany";
import RentalProcess from "../components/RentalProcess";
import AppVideo from "../components/AppVideo";
import WhyChooseUs from "../components/WhyChooseUs";
import FeatureOne from "../components/FeatureOne";
import OurPremiumDrivers from "../components/OurPremiumDrivers";
import OurAppSection from "../components/OurAppSection";
import TestimonialTwo from "../components/TestimonialTwo";
import LetsTalk from "../components/LetsTalk";
import Counter from "../components/Counter";
import Faq from "../components/Faq";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <MainSlider />
            <AboutUs />
            {/* <TopBanner /> */}
            <OurServices />
            <InterestedAsCompany />
            <RentalProcess />
            {/* <AppVideo /> */}
            <LetsTalk />
            <WhyChooseUs />
            <OurAppSection />
            <Counter />
            <OurPremiumDrivers />
            <TestimonialTwo />
            {/* <Faq /> */}
            <Footer />
        </>
    );
};

export default Home;
