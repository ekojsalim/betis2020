import React, { useState } from "react";
import { Link } from "gatsby";

import tw from "tailwind.macro";
import styled from "@emotion/styled";

const SidebarContainer = styled.aside`
  ${tw`bg-accent w-full p-12 px-16 md:pl-6 md:w-1/5 md:pt-6 md:pl-6 md:top-0 md:left-0 md:static md:h-full z-10`}
  height: 50vh;
  ${props => (props.showBottom ? `` : tw`hidden md:block`)}
`;
const SidebarHeading = tw.span`text-3xl font-medium text-primary my-3 md:my-1`;

const SidebarList = tw.ul`flex flex-wrap mt-6 md:mt-3`;
const SidebarItem = tw.li`mr-3 my-3 flex items-center cursor-pointer flex-wrap w-full`;
const SidebarItemText = tw.span`text-primary text-2xl ml-3 font-medium`;
const SidebarContent = styled.div`
${tw`flex flex-wrap w-full ml-16`}
  display: ${props => (props.open ? `flex` : `none`)};
`;
const SidebarLink = tw(
  Link
)`font-sans text-2xl mt-3 text-primary w-full tracking-wide`;

const LinkIcon = styled.svg`
${tw`w-5`}
transform: ${props => (props.open ? `rotate(90deg)` : `none`)}
`;

const SidebarLinkHead = ({ title, linkList }) => {
  const [setted, set] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = ({ isCurrent }) => {
    if (isCurrent && !setted) {
      set(true);
      setOpen(true);
    }
  };
  return (
    <SidebarItem>
      <LinkIcon
        viewBox="0 0 30 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <path
          d="M29.2838 19.6828L0.841706 39.2528L0.72611 0.281874L29.2838 19.6828Z"
          fill="#024059"
        />
      </LinkIcon>
      <SidebarItemText onClick={() => setOpen(!open)}>{title}</SidebarItemText>
      <SidebarContent open={open}>
        {linkList.map((item, i) => {
          return (
            <SidebarLink to={item.link} getProps={isActive} key={item.desc + i}>
              {item.desc}
            </SidebarLink>
          );
        })}
      </SidebarContent>
    </SidebarItem>
  );
};

const Sidebar = ({ showResponsiveBottomNavigation: showBottom }) => {
  const saintekLinkList = [
    {
      desc: "Fisika",
      link: "/fisika"
    },
    {
      desc: "Biologi",
      link: "/biologi"
    }
  ];
  const soshumLinkList = [
    {
      desc: "Ekonomi",
      link: "/ekonomi"
    }
  ];
  return (
    <>
      <SidebarContainer showBottom={showBottom}>
        <SidebarHeading>Subjects</SidebarHeading>
        <SidebarList>
          <SidebarLinkHead title="Saintek" linkList={saintekLinkList} />
          <SidebarLinkHead title="Soshum" linkList={soshumLinkList} />
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
