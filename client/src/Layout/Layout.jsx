import Appsidebar from "@/components/Appsidebar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
      <Topbar />
      <Appsidebar />
      <main className="w-full">
        <div className=" w-full min-h-[calc(100vh-45px)]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
