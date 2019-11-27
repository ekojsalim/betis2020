import React from "react";
import { Link } from "gatsby";

import tw from "tailwind.macro";
import Layout from "../components/layout";

const ModuleContainer = tw.div`h-full w-full p-6`;
const ModuleHead = tw.p`font-medium text-3xl ml-4 mb-4 md:ml-0 md:text-3xl`;

const BackContainer = tw.div`md:hidden flex items-center mb-6 ml-3 cursor-pointer`;
const BackIcon = tw.svg`inline-block`;
const BackText = tw.span`font-normal ml-4 text-xl`;

const ModuleLayout = ({name, children}) => (
  <Layout showResponsiveBottomNavigation={false}>
    <ModuleContainer>
      <BackContainer>
        <Link to="/">
          <BackIcon
            width="19"
            height="27"
            viewBox="0 0 19 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.147869 13.6245L18.8004 1.1466L18.5442 26.4771L0.147869 13.6245Z"
              fill="#024059"
            />
          </BackIcon>
          <BackText>Kembali</BackText>
        </Link>
      </BackContainer>
      <ModuleHead>{name}</ModuleHead>
        {children}
    </ModuleContainer>
  </Layout>
);

export default ModuleLayout;
