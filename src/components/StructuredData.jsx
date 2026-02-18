import { Helmet } from 'react-helmet-async';
import { schoolData } from '../data/schoolData';

const StructuredData = () => {
    const { name, location, contact, hero } = schoolData;
    const siteUrl = 'https://peepultreeschool.com';

    const schoolSchema = {
        "@context": "https://schema.org",
        "@type": ["EducationalOrganization", "Preschool", "School"],
        "name": name,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`, // Update if logo path is different
        "image": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop",
        "description": hero.subTagline,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kovil Road, Opposite Ashok Leyland Service Centre, Vadakumuri, Kannadi-I",
            "addressLocality": "Palakkad",
            "addressRegion": "Kerala",
            "postalCode": "678701",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.7358, // Precise coordinates based on address usually helpful
            "longitude": 76.6575
        },
        "telephone": contact.phone,
        "email": contact.email,
        "sameAs": [
            contact.instagram,
            contact.facebook,
            contact.googleLocation
        ],
        "priceRange": "$$", // Required for some LocalBusiness schemas, optional for School but good to have
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "15:30"
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Programs",
                "item": `${siteUrl}/#programs`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": `${siteUrl}/#contact`
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": schoolData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schoolSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
