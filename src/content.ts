import Project, { Skill, Proficiency } from "./model/Project";
import { Exprience, Recognition } from "./model";

import image from "./assets/images/Shy.jpg";
import Link from "./ui/theme/overrides/Link";
import { RecognitionLink } from "./model/Recognition";

export const social = [
  {
    icon: "akar-icons:github-fill",
    url: "https://github.com/Luke20w",
  },
  {
    icon: "akar-icons:linkedin-box-fill",
    url: "https://www.linkedin.com/in/luke-weidner-a1880019a/",
  },
  {
    icon: "akar-icons:instagram-fill",
    url: "https://www.instagram.com/luke20w/",
  },
  {
    icon: "akar-icons:snapchat-fill",
    url: "https://www.snapchat.com/add/luke20w?share_id=NjdCQ0Iw&locale=en_US",
  },
];

export const skills = {
  react: new Skill("React", Proficiency.Advanced, "akar-icons:react-fill", "#1a73e8"),
  node: new Skill("Node", Proficiency.Advanced, "akar-icons:node-fill", "#8ab437"),
  typescript: new Skill("TypeScript", Proficiency.Advanced, "cib:typescript", "#007acc"),
  javascript: new Skill("JavaScript", Proficiency.Advanced, "cib:javascript", "#f0db4f"),
  git: new Skill("Git", Proficiency.Advanced, "cib:git", "#f05032"),
  aws: new Skill("AWS", Proficiency.Advanced, "bxl:aws", "#e34f26"),
  reactNative: new Skill("React Native", Proficiency.Advanced, "akar-icons:react-fill", "#61dafb"),
};

export const projects = [
  new Project({
    title: "Project 2",
    description: "Lorem dolore in fugiat et duis amet consequat amet adipisicing. Do voluptate officia eiusmod sit.",
    skills: [
      skills.react,
      skills.node,
      skills.typescript,
      skills.javascript,
      skills.git,
      skills.aws,
      skills.reactNative,
    ],
    images: [image],
  }),
];

export const recognitions = [
  new Recognition({
    title: "CDO Magazine",
    description:
      "I had the opportunity to inteview with CDO Magazine and talk about my career journey and strategies I use",
    links: [
      new RecognitionLink(
        "Approaches to Complex Problems",
        "https://www.cdomagazine.tech/comspark/topics/digital_transformation/kleo-chief-technology-officer-approaches-to-complex-problems/video_f4d7c6df-d34c-5318-a1af-e0d6c09a16a6.html"
      ),
      new RecognitionLink(
        "Balancing Commercial and Strategic Priorities",
        "https://www.cdomagazine.tech/comspark/topics/leadership/kleo-chief-technology-officer-balancing-commercial-and-strategic-priorities/video_06a15f14-de1f-58ed-9c8f-acda5a8109c6.html"
      ),
      new RecognitionLink(
        "Reinforcing Data Management and Engineering Architecture",
        "https://www.cdomagazine.tech/comspark/topics/leadership/kleo-chief-technology-officer-reinforcing-data-management-and-engineering-architecture/video_c7149c0a-07ec-5f9d-a169-355a71bfeeb3.html"
      ),
      new RecognitionLink(
        "Guiding the Younger Generation of Data Science Specialists",
        "https://www.cdomagazine.tech/cdo_magazine/topics/leadership/kleo-chief-technology-officer-guiding-the-younger-generation-of-data-science-specialists/video_e2a6430a-6d25-55ad-b9b7-eb84dcdcb141.html"
      ),
    ],
  }),
];

export const experience = [
  new Exprience({
    company: "Kleo",
    title: "Chief Technology Officer",
    location: "Cincinnati, OH",
    time: "November 2020 - Present",
    points: ["Leading the development of the Kleo platform"],
  }),
];
