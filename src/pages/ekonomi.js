import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ModuleLayout from "../components/modulelayout";

import tw from "tailwind.macro";

import SEO from "../components/seo";

const Image = tw(Img)`w-full md:w-1/2`

const LessonContainer = tw.div`flex w-full justify-center flex-wrap`;
const LessonText = tw.p`font-sans flex-auto mt-6`;
const ImageContainer = tw.div`w-full flex justify-center items-center`;

const Ekonomi = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ekonomi-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <ModuleLayout name="Ekonomi">
      <SEO title="Ekonomi | BETIS 2020" />
      <LessonContainer>
        <ImageContainer>
          <Image fluid={data.file.childImageSharp.fluid} />
        </ImageContainer>
        <LessonText>Kurva di atas adalah kurva <i>supply</i> dan <i>demand</i>.</LessonText>
      </LessonContainer>
    </ModuleLayout>
  );
};

export default Ekonomi;
