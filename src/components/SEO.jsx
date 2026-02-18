import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, type = 'website', image, keywords }) => {
    const siteName = 'Peepul Tree School';
    const defaultDescription = 'Peepul Tree School in Palakkad, Kerala offers nature-centric holistic education. Admissions open for Playgroup, Nursery, and Kindergarten (CBSE integrated).';
    const defaultImage = 'https://peepultreeschool.com/og-image.jpg'; // Ideally this should be a real URL
    const siteUrl = 'https://peepultreeschool.com'; // Replace with actual domain

    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || "Peepul Tree School, Palakkad School, Kindergarten Palakkad, Best School in Palakkad, Nature School Kerala, CBSE School Palakkad, Montessori Palakkad"} />
            <link rel="canonical" href={canonical || siteUrl} />

            {/* Open Graph Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={canonical || siteUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="IN-KL" />
            <meta name="geo.placename" content="Palakkad" />
            <meta name="geo.position" content="10.7466;76.6348" />
            <meta name="ICBM" content="10.7466, 76.6348" />

            {/* Performance & Appearance */}
            <meta name="theme-color" content="#4caf50" /> {/* Primary Green */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preconnect" href="https://images.unsplash.com" />
            <link rel="dns-prefetch" href="https://images.unsplash.com" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string
};

export default SEO;
