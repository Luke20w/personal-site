import { Button } from "@mui/material";

import { Project, Skill, Recognition, ContactOption } from "./model";
import { Category, Proficiency } from "./model/Skill";
import { RecognitionLink } from "./model/Recognition";

import crowdClipsLogo from "./assets/images/projects/crowdclips/logo.png";
import crowdClispWeb from "./assets/images/projects/crowdclips/web-panel.png";
import crowdClipsMobile from "./assets/images/projects/crowdclips/record-screen.png";

import infinityGames from "./assets/images/projects/games/infinity-games.png";
import drawItSS1 from "./assets/images/projects/games/draw-it-ss1.png";
import drawItSS2 from "./assets/images/projects/games/draw-it-ss2.png";
import blockBounce from "./assets/images/projects/games/block-bounce-icon.png";
import blockBounceSS from "./assets/images/projects/games/block-bounc-ss.png";
import colorShoot from "./assets/images/projects/games/color-shoot-icon.png";
import megaBounce from "./assets/images/projects/games/mega-bounce-icon.png";
import quadraJump from "./assets/images/projects/games/quadra-jump-icon.png";
import rotationRun from "./assets/images/projects/games/rotation-run-icon.png";
import spikeSmash from "./assets/images/projects/games/spike-smash-icon.png";

import rinterMockup from "./assets/images/projects/rinter/rinter-mockup.png";

import infinity1 from "./assets/images/projects/infinity-ui/ss1.png";
import infinity2 from "./assets/images/projects/infinity-ui/ss2.png";
import infinity3 from "./assets/images/projects/infinity-ui/ss3.png";
import infinity4 from "./assets/images/projects/infinity-ui/ss4.png";
import infinity5 from "./assets/images/projects/infinity-ui/ss5.png";

import cdoLogo from "./assets/images/recognition/cdo-logo.png";

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

// -- About me section
export const aboutMeHeader = {
  title: "Who am I?",
  subtitle: "That's a big question",
};
export const aboutMeContent = {
  beforeKleo: `I lived in a small town near Cincinnati, OH, called Fort Thomas, until I left for Georgia Tech in 2020. My passion for building things started when I was 11. I began making little mobile games for fun and that Christmas, I asked for an Apple Developer License. Thankfully, Santa came through for me. From then on I spent whatever time I had outside of school and sports building. Whenever I ran into a problem, I'd scour the internet for the answer and then go on until I found the next problem. Over the years I was able to learn a lot with this strategy and that's what makes me a huge believer in learning by doing.
                                
  In high school, I found another passion for turning my creations into businesses and I tried my hand at a few entrepreneurial endeavors, one of them which I've been working on to this day. I also did some freelance work, proving to myself again that diving into things I don't know is how I learn best.
  
  Now I  work at a language learning startup, `,
  afterKleo: `, managing our development team and study Computer Engineering at Georgia Tech. I also love competition, especially sports. I'm a massive Bengals and Reds (unfortunately) fan and I compete in Spikeball tournaments around Atlanta. That's about all I have for now but it's not at all comprehensive of who I am so let's have a conversation!`,
};
// -- Skills section
export const skillsHeader = {
  title: "Skills",
  subtitle: "I've had the opportunity to learn a lot along the way",
};

export const skills = {
  react: new Skill("React", Proficiency.Expert, Category.Development, "akar-icons:react-fill"),
  reactNative: new Skill("React Native", Proficiency.Expert, Category.Development, "akar-icons:react-fill"),
  typescript: new Skill("TypeScript", Proficiency.Expert, Category.Development, "cib:typescript"),
  javascript: new Skill("JavaScript", Proficiency.Expert, Category.Development, "cib:javascript"),
  aws: new Skill("AWS Suite", Proficiency.Expert, Category.Development, "bxl:aws"),
  clean: new Skill("Clean Architecture", Proficiency.Advanced, Category.Development, "ic:baseline-architecture"),
  figma: new Skill("Figma", Proficiency.Advanced, Category.Design, "gg:figma"),
  graphql: new Skill("GraphQL", Proficiency.Expert, Category.Development, "akar-icons:graphql-fill"),
  node: new Skill("Node JS", Proficiency.Expert, Category.Development, "akar-icons:node-fill"),
  mongodb: new Skill("MongoDB", Proficiency.Advanced, Category.Development, "bxl:mongodb"),
  git: new Skill("Git", Proficiency.Advanced, Category.Development, "cib:git"),
  hls: new Skill("HLS Video Streaming", Proficiency.Advanced, Category.Development, "ic:baseline-hls"),
  java: new Skill("Java", Proficiency.Advanced, Category.Development, "la:java"),
  python: new Skill("Python", Proficiency.Intermediate, Category.Development, "akar-icons:python-fill"),
  swift: new Skill("Swift/XCode", Proficiency.Advanced, Category.Development, "fa6-brands:swift"),
  android: new Skill("Android Studio", Proficiency.Intermediate, Category.Development, "ant-design:android-filled"),
  appStore: new Skill("iOS App Store Publishing", Proficiency.Intermediate, Category.Development, "cib:app-store-ios"),
  playStore: new Skill(
    "Google Play Store Publishing",
    Proficiency.Intermediate,
    Category.Development,
    "bxl:play-store"
  ),
  facialRecognition: new Skill(
    "Facial Recognition",
    Proficiency.Intermediate,
    Category.Development,
    "wpf:facial-recognition-scan"
  ),
  objectRecognition: new Skill(
    "Object Recognition",
    Proficiency.Intermediate,
    Category.Development,
    "ri:voice-recognition-line"
  ),
  speech: new Skill(
    "Speech Recognition",
    Proficiency.Advanced,
    Category.Development,
    "healthicons:speech-language-therapy"
  ),
  intent: new Skill(
    "Speech Intent Algorithm Design",
    Proficiency.Intermediate,
    Category.Development,
    "fluent:math-formula-16-filled"
  ),
  photoshop: new Skill("Adobe Photoshop", Proficiency.Intermediate, Category.Design, "file-icons:adobe-photoshop"),
  premiere: new Skill("Adobe Premiere", Proficiency.Intermediate, Category.Design, "file-icons:adobe-premiere"),
  illustrator: new Skill(
    "Adobe Illustrator",
    Proficiency.Intermediate,
    Category.Design,
    "file-icons:adobe-illustrator"
  ),
  webScraping: new Skill("Web Scraping", Proficiency.Intermediate, Category.Development, "mdi:web"),
  rfid: new Skill("RFID", Proficiency.Intermediate, Category.Hardware, "wpf:rfid-tag"),
  c: new Skill("C/C++", Proficiency.Intermediate, Category.Development, "bxl:c-plus-plus"),
  circuit: new Skill("Circuit Simulation", Proficiency.Intermediate, Category.Hardware, "codicon:circuit-board"),
  mips: new Skill("MIPS ISA", Proficiency.Intermediate, Category.Hardware, "file-icons:assembly-generic"),
};

// -- Projects section
export const projectsHeader = {
  title: "Projects",
  subtitle: "The way I do anything best is by diving right in - so projects are my thing",
};

export const projects = [
  new Project({
    title: "CrowdClips",
    shortDescription: "CrowdClips is a platform for crowd-sourcing video content for events",
    longDescription:
      "Users can record and submit videos on the mobile app. Then content supervisiors can access and look through all the videos in the web app. There, they can utilize a variety of data points from AI analysis of each video like facial expressions, object labels, and more to easily select the best videos. These videos can then be output to any data stream and played on the big screen at sporting events where. Organizations can even use the CrowdClips API to integrate CrowdClips submissions into their own apps. Georgia Tech, the Atlanta Falcons, and Mercedes Benz Stadium have shown interest in the platform 👀",
    skills: [
      skills.aws,
      skills.react,
      skills.reactNative,
      skills.node,
      skills.typescript,
      skills.facialRecognition,
      skills.objectRecognition,
      skills.hls,
      skills.graphql,
      skills.clean,
    ],
    images: [crowdClipsLogo, crowdClipsMobile, crowdClispWeb],
    videos: ["https://crowdclips-public.s3.us-east-2.amazonaws.com/clips-video.mp4"],
  }),
  new Project({
    title: "Mobile games",
    shortDescription: "10🔥 mobile games from mini platformers and shooters to strategy games and puzzles",
    longDescription: `When I was young, I spent a lot of time playing around with mobile game development and built out a game brand I called "Infinity Games". I loved watching other people's faces as they played the games I made`,
    skills: [skills.appStore, skills.playStore, skills.java],
    images: [
      infinityGames,
      drawItSS1,
      drawItSS2,
      blockBounce,
      blockBounceSS,
      colorShoot,
      megaBounce,
      quadraJump,
      rotationRun,
      spikeSmash,
    ],
  }),
  new Project({
    title: "Infinity UI",
    shortDescription: "A UI kit for React Native built for a few freelance projects",
    skills: [skills.reactNative, skills.javascript],
    images: [infinity1, infinity2, infinity3, infinity4, infinity5],
  }),
  new Project({
    title: "RiNTER",
    shortDescription: "Freelance real estate management and communication app wireframe",
    skills: [skills.figma, skills.photoshop, skills.illustrator],
    images: [rinterMockup],
  }),
  new Project({
    title: "Legislation Data Scraper",
    shortDescription:
      "Freelance web app built for education company Abre to scrape data from legislation websites and aggregate the latest education policies for 6 states into a single database",
    skills: [skills.node, skills.javascript, skills.webScraping, skills.mongodb],
  }),
  new Project({
    title: "Kleo",
    shortDescription:
      "Like any job, it's a big collection of projects. I've been working as Chief Technology Officer and now Director of Engineering since summer 2020. If you want to see more about Kleo or find out more about what I do there, you can check out our website or my resume in the contact section below",
    components: [
      <Button key={0} href="https://www.meetkleo.com" target="_blank" variant="contained">
        Our site
      </Button>,
    ],
    skills: [
      skills.speech,
      skills.intent,
      skills.hls,
      skills.aws,
      skills.graphql,
      skills.node,
      skills.react,
      skills.swift,
      skills.typescript,
      skills.clean,
    ],
  }),
  new Project({
    title: "This site!",
    shortDescription:
      "This site let's you know a little bit more about me than a resume would and as a bonus, I had tons to fun making it!",
    skills: [skills.react, skills.aws, skills.typescript],
  }),
];

// -- Recognition section
export const recognitionHeader = {
  title: "Recognition",
  subtitle: "I've been given the chance to share some of what I've learned",
};

export const recognitions = [
  new Recognition({
    title: "CDO Magazine",
    description: "Interviewed with CDO Magazine to talk about my career journey + strategies I've learned",
    image: cdoLogo,
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

// -- Contact section
export const contactHeader = {
  title: "Contact",
  subtitle: "I'm always open to new opportunities - so let's get in touch",
};

export const contactOptions = [
  new ContactOption("weidnerluke@gmail.com", "eva:email-outline"),
  new ContactOption("(513) 446 9378", "bi:phone"),
];
