import React from "react";

import Youtube from "react-youtube";
import ModuleLayout from "../components/modulelayout";

import tw from "tailwind.macro";

import SEO from "../components/seo";

import PDFSVg from "../images/pdf.inline.svg";

const VideoContainer = tw.div`flex items-center justify-center max-w-full`;
const FileContainer = tw.div`mt-20 md:mt-10 px-6`;
const FileCont = tw.div`my-8`;
const PDFIcon = tw(PDFSVg)`inline-block`;
const FileDescription = tw.span`font-normal ml-4`;

const File = ({ name, link }) => (
  <FileCont>
    <a href={link} download>
      <PDFIcon />
      <FileDescription>{name}</FileDescription>
    </a>
  </FileCont>
);

const Biologi = () => (
  <ModuleLayout name="Biologi">
    <SEO title="Biologi | BETIS 2020" />
    <VideoContainer>
      <Youtube videoId="f5-9gzEVo-0" opts={{ width: "640" }} />
    </VideoContainer>
    <FileContainer>
      <File name="Silabus Biologi" link="/documents/silabus.pdf" />
      <File name="Modul Biologi" link="/documents/silabus.pdf" />
      <File name="Latihan Soal Biologi" link="/documents/silabus.pdf" />
    </FileContainer>
  </ModuleLayout>
);

export default Biologi;
