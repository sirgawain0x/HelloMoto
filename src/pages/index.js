import React from "react";
import VideoSection from "./../components/VideoSection";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <VideoSection
        bg="midnight"
        textColor="rose"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
        embedUrl="https://player.vimeo.com/video/373247183?title=0&byline=0&portrait=0"
      />
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="The All-New Motorola RAZR"
        subtitle="Immerse yourself into a modern and innovative lifestyle. "
        buttonText="Buy Now"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        bg="midnight"
        textColor="rose"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        bg="light"
        textColor="midnight"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        bg="midnight"
        textColor="rose"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <CtaSection
        bg="primary"
        textColor="rose"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default IndexPage;
