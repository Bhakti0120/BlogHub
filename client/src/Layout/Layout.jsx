import Appsidebar from "@/components/Appsidebar";
import Topbar from "@/components/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
      <Topbar />
      <Appsidebar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
