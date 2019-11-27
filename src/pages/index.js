import React from "react";

import tw from "tailwind.macro";

import SEO from "../components/seo";
import Layout from "../components/layout";
const GreetingContainer = tw.div`p-5`;
const GreetingHead = tw.p`text-5xl leading-tight font-medium`;
const GreetingText = tw.p`hidden ml-1 text-3xl md:block`;

const IndexPage = () => (
  <Layout showResponsiveBottomNavigation={true}>
    <SEO title="BETIS 2020" />
    <GreetingContainer>
      <GreetingHead>Selamat datang di Situs BETIS 2020</GreetingHead>
      <GreetingText>Klik mata pelajaran di samping</GreetingText>
    </GreetingContainer>
  </Layout>
);

export default IndexPage;
