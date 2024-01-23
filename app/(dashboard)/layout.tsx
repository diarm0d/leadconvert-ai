import React from "react";
import DashboardNavbar from "@/components/ui/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
