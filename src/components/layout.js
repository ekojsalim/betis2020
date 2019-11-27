import React from "react";
import tw from "tailwind.macro";

import Sidebar from "./sidebar";
import Navbar from "./navbar";

const PageContainer = tw.div`h-screen flex flex-col`;

const MainContent = tw.main`relative flex flex-auto flex-col-reverse md:flex-row`;
const ContentContainer = tw.div`font-sans text-2xl tracking-wide text-primary w-full h-full md:w-5/6 flex items-center justify-center flex-wrap`;

const Layout = ({ children, showResponsiveBottomNavigation }) => (
  <PageContainer>
    <Navbar />
    <MainContent>
      <Sidebar showResponsiveBottomNavigation={showResponsiveBottomNavigation}/>
      <ContentContainer>{children}</ContentContainer>
    </MainContent>
  </PageContainer>
);

export default Layout;
