"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import FeatureCardSeventeen from '@/components/sections/feature/FeatureCardSeventeen';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import MetricCardFive from '@/components/sections/metrics/MetricCardFive';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Camera, CheckCircle, Concierge, Dumbbell, Gift, Heart, Home, Mail, Sparkles, Spa, Star, TrendingUp, Utensils, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="noiseDiagonalGradient"
      cardStyle="glass-outline-light"
      primaryButtonStyle="outline"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Coastal Luxury"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101225956-q84qg2tr.jpg"
          logoAlt="Coastal Luxury Hotel Logo"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Experiences", id: "testimonials" },
            { name: "About", id: "about" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
          className="bg-white/80 backdrop-blur-sm shadow-sm"
          navItemClassName="text-sm font-medium"
          buttonClassName="px-6 py-2 rounded-lg"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero" className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <HeroSplitGlobeKpi
            title="Experience Coastal Luxury"
            description="Wake up to ocean views, world-class amenities, and unparalleled service at our beachfront sanctuary."
            tag="Luxury Resort"
            tagIcon={Waves}
            kpis={[
              { value: "50+", label: "Years of Excellence" },
              { value: "99%", label: "Guest Satisfaction" },
              { value: "5★", label: "Award Winning" }
            ]}
            buttons={[
              { text: "Explore Rooms", href: "rooms" },
              { text: "View Gallery", href: "#" }
            ]}
            globePosition="right"
            ariaLabel="Hero section for luxury hotel"
            className="relative overflow-hidden"
            containerClassName="max-w-7xl mx-auto"
            titleClassName="text-5xl md:text-6xl font-light"
            descriptionClassName="text-lg md:text-xl opacity-90"
            tagClassName="text-sm font-medium"
          />
        </div>
      </div>

      <div id="rooms" data-section="rooms" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ProductCardSeven
            title="Our Room Collection"
            description="Choose from our carefully curated selection of oceanfront suites, each designed for ultimate comfort and relaxation."
            tag="Premium Accommodations"
            tagIcon={Home}
            products={[
              {
                id: "1",
                name: "Oceanfront Suite",
                price: "$450/night",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101227416-bbl5yxbe.jpg",
                imageAlt: "Oceanfront Suite with balcony view"
              },
              {
                id: "2",
                name: "Deluxe Room",
                price: "$350/night",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101228106-jo8t0x70.jpg",
                imageAlt: "Deluxe Room with ocean view"
              },
              {
                id: "3",
                name: "Penthouse Retreat",
                price: "$750/night",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101228997-7330hjc7.jpg",
                imageAlt: "Penthouse with panoramic views"
              }
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            containerStyle="card"
            textboxLayout="default"
            useInvertedBackground="noInvert"
            buttons={[
              { text: "Book Now", href: "contact" }
            ]}
          />
        </div>
      </div>

      <div id="amenities" data-section="amenities" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FeatureCardSeventeen
            title="World-Class Amenities"
            description="Indulge in luxury facilities designed to enhance your stay and create unforgettable memories."
            tag="Premium Services"
            tagIcon={Sparkles}
            features={[
              { id: "1", icon: Waves, text: "Infinity Pool" },
              { id: "2", icon: Utensils, text: "Fine Dining" },
              { id: "3", icon: Spa, text: "Spa & Wellness" },
              { id: "4", icon: Dumbbell, text: "Fitness Center" },
              { id: "5", icon: Camera, text: "Ocean Activities" },
              { id: "6", icon: Concierge, text: "24/7 Concierge" }
            ]}
            animationType="slide-up"
            variant="card"
            useUncappedRounding={false}
            useSplitLayout={false}
            textboxLayout="default"
            useInvertedBackground="noInvert"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="py-20 md:py-32 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AboutShowcase
            title="A Legacy of Excellence"
            description="For over 50 years, we've been creating transformative experiences for guests from around the world. Our commitment to luxury, sustainability, and personalized service sets us apart."
            tag="Our Story"
            tagIcon={Heart}
            leftItem={{
              title: "Stunning Architecture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101234967-a9bbj2ak.jpg"
            }}
            rightItem={{
              title: "Sophisticated Interiors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101235974-ixmx7w66.jpg"
            }}
            centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101229669-j3czqzns.jpg"
            centerImageAlt="Luxury spa and wellness center"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground="noInvert"
            useCappedBorderRadius={true}
            buttons={[
              { text: "Learn More", href: "#" }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TestimonialCardEleven
            title="Guest Experiences"
            description="Hear from travelers who have made memories at our resort"
            tag="Reviews"
            tagIcon={Star}
            testimonials={[
              {
                id: "1",
                nameTitle: "Sarah Mitchell, Luxury Travel Blogger",
                quote: "The oceanfront view from our suite was absolutely breathtaking. Every detail was meticulously curated for comfort and elegance. The staff's attention to service was exceptional.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101231746-yxegiyrv.jpg",
                imageAlt: "Sarah Mitchell"
              },
              {
                id: "2",
                nameTitle: "James Richardson, CEO",
                quote: "The perfect blend of relaxation and productivity. The penthouse suite offered everything I needed for work, with stunning views that made business travel feel like a vacation.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101232482-9kc8uka2.jpg",
                imageAlt: "James Richardson"
              },
              {
                id: "3",
                nameTitle: "Emma & Michael Chen, Honeymooners",
                quote: "Our honeymoon was absolutely magical. The romantic ambiance, champagne on the balcony at sunset, and the spa treatments made this an unforgettable experience.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101233188-53xfvm9h.jpg",
                imageAlt: "Emma and Michael Chen"
              },
              {
                id: "4",
                nameTitle: "Dr. Patricia Johnson, Travel Enthusiast",
                quote: "I've stayed in luxury hotels worldwide, and this resort ranks at the top. The wellness programs are scientifically designed, and the staff genuinely cares about your wellbeing.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101233975-ud19s1tz.jpg",
                imageAlt: "Dr. Patricia Johnson"
              }
            ]}
            textboxLayout="default"
            useInvertedBackground="noInvert"
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <PricingCardNine
            title="Flexible Booking Plans"
            description="Choose the perfect plan for your beach getaway with our flexible booking options"
            tag="Special Offers"
            tagIcon={Gift}
            plans={[
              {
                id: "weekend",
                title: "Weekend Escape",
                price: "$899",
                period: "2 nights",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101227416-bbl5yxbe.jpg",
                imageAlt: "Weekend package",
                button: {
                  text: "Book Weekend",
                  href: "contact"
                },
                features: [
                  "Deluxe Ocean View Room",
                  "Complimentary spa credit $100",
                  "Gourmet breakfast daily",
                  "Sunset beach tour"
                ]
              },
              {
                id: "week",
                title: "Summer Retreat",
                price: "$2,450",
                period: "7 nights",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765101228106-jo8t0x70.jpg",
                imageAlt: "Week long package",
                button: {
                  text: "Book Week",
                  href: "contact"
                },
                features: [
                  "Suite upgrade",
                  "Unlimited spa access",
                  "All meals included",
                  "Private beach cabana",
                  "Water sports activities"
                ]
              }
            ]}
            animationType="slide-up"
            variant="card"
            textboxLayout="default"
            useInvertedBackground="noInvert"
          />
        </div>
      </div>

      <div id="metrics" data-section="metrics" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <MetricCardFive
            title="By The Numbers"
            description=""
            tag="Our Impact"
            tagIcon={TrendingUp}
            metrics={[
              {
                id: "1",
                value: "50K+",
                description: "Guests welcomed each year to our beachfront paradise"
              },
              {
                id: "2",
                value: "150+",
                description: "Awards and recognitions for luxury and service excellence"
              },
              {
                id: "3",
                value: "99.8%",
                description: "Guest satisfaction rating across all accommodations"
              },
              {
                id: "4",
                value: "24/7",
                description: "Premium concierge service for all your requests"
              }
            ]}
            animationType="slide-up"
            variant="border"
            textboxLayout="default"
            useInvertedBackground="noInvert"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="py-20 md:py-32 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <ContactCenter
            tag="Reservations"
            title="Ready to Book Your Stay?"
            description="Get exclusive offers, early access to new suites, and travel inspiration delivered to your inbox."
            tagIcon={Mail}
            inputPlaceholder="Enter your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            useInvertedBackground="noInvert"
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Coastal Luxury"
          logoAlt="Coastal Luxury Hotel"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}