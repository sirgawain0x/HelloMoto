import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <DashboardSection
      bg="midnight"
      textColor="rose"
      size="md"
      title="Dashboard"
      subtitle=""
    ></DashboardSection>
  );
}

export default requireAuth(DashboardPage);
