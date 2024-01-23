import React from "react";
import LandingLayoutNavBar  from "./components/LandingPageNavBar"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
        <LandingLayoutNavBar />
        <div className="flex-gorw">{children}</div>
    </section>
  )
};

export default LandingLayout;
