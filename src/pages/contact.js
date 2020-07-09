import React from "react";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <ContactSection
      bg="midnight"
      textColor="rose"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Contact Us"
      subtitle=""
      buttonText="Send message"
      buttonColor="light"
      showNameField={true}
      inputSize="md"
    ></ContactSection>
  );
}

export default ContactPage;
