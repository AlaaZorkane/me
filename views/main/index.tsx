import { VscGithub, VscRefresh, VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import {
  MainContainer,
  MainName,
  MainOccupation,
  ResetButton,
  SocialLinks,
} from "./styles";
import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import { viewAtom, Views } from "~/store/layout";
import { container, item } from "./variants";
import LogoOrchestrator from "~/components/logo-orchestrator/index";
import React from "react";
import { logoAtom, LogoType } from "~/store/logo";

const links = [
  {
    name: "Github",
    url: "https://github.com/AlaaZorkane",
    icon: VscGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AlaaZorkane",
    icon: VscTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alaazorkane",
    icon: FaLinkedinIn,
  },
];

function MainView() {
  const setView = useSetAtom(viewAtom);
  const setType = useSetAtom(logoAtom);

  React.useEffect(() => {
    setType(LogoType.Letter);
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <LogoOrchestrator />
      <MainName variants={item}>alaa zorkane</MainName>
      <MainOccupation variants={item}>blockchain r & d</MainOccupation>
      <SocialLinks>
        {links.map((link) => (
          <motion.a
            key={link.name}
            variants={item}
            whileHover={{ scale: 1.1, color: "#FEFCAD" }}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.icon(null)}
          </motion.a>
        ))}
      </SocialLinks>

      <ResetButton
        whileHover={{ backgroundColor: "rgba(0, 0, 0)", rotate: 90 }}
        onClick={() => setView(Views.Entry)}
      >
        <VscRefresh />
      </ResetButton>
    </MainContainer>
  );
}

export default MainView;
