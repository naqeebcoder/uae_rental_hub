import { Helmet } from "react-helmet-async";
import favicons from "../assets/images/favicons/apple-touch-icon.png";
import faviconIcon from "../assets/images/favicons/favicon-32x32.png";
import faviconIcons from "../assets/images/favicons/favicon-16x16.png";
import maniFest from "../assets/images/favicons/favicon-16x16.png";


const Header = () => {
    return (
        <Helmet>
            {/* Basic Meta */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vehicle Rental</title>
            <meta name="description" content="Rent cars, buses, and heavy vehicles easily" />

            {/* Favicons */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={favicons}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={faviconIcon}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={faviconIcons}
            />
            <link
                rel="manifest"
                href={maniFest}
            />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default Header;
