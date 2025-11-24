import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// Core CSS
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom-animate.css";
import "./assets/css/swiper.min.css";
import "./assets/css/font-awesome-all.css";
import "./assets/css/jarallax.css";
import "./assets/css/jquery.magnific-popup.css";
import "./assets/css/flaticon.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/aos.css";
import "./assets/css/odometer.min.css";
import "./assets/css/timePicker.css";

// Module CSS
import "./assets/css/module-css/slider.css";
import "./assets/css/module-css/footer.css";
import "./assets/css/module-css/sliding-text.css";
import "./assets/css/module-css/services.css";
import "./assets/css/module-css/about.css";
import "./assets/css/module-css/booking.css";
import "./assets/css/module-css/counter.css";
import "./assets/css/module-css/listing.css";
import "./assets/css/module-css/video.css";
import "./assets/css/module-css/pricing.css";
import "./assets/css/module-css/popular-car.css";
import "./assets/css/module-css/testimonial.css";
import "./assets/css/module-css/faq.css";
import "./assets/css/module-css/team.css";
import "./assets/css/module-css/call.css";
import "./assets/css/module-css/download-app.css";
import "./assets/css/module-css/brand.css";
import "./assets/css/module-css/blog.css";
import "./assets/css/module-css/lets-talk.css";
import "./assets/css/module-css/process.css";
import "./assets/css/module-css/why-choose.css";
import "./assets/css/module-css/gallery.css";
import "./assets/css/module-css/page-header.css";
import "./assets/css/module-css/contact.css";

// ✅ Template Styles (Missing before)
import "./assets/css/style.css";
import "./assets/css/responsive.css";


// Template Styles
import "./assets/css/style.css";
import "./assets/css/responsive.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);