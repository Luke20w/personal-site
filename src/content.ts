import { Project, Skill, Exprience, Recognition } from "./model";
import { Proficiency } from "./model/Skill";

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
  amplify: new Skill("AWS Amplify", Proficiency.Advanced, "ion:logo-amplify"),
  android: new Skill("Android Studio", Proficiency.Advanced, "ant-design:android-filled"),
  appsync: new Skill("AWS AppSync", Proficiency.Advanced, "bxl:aws"),
  apigateway: new Skill("AWS API Gateway", Proficiency.Advanced, "bxl:aws"),
  c: new Skill("C/C++", Proficiency.Intermediate, "bxl:c-plus-plus"),
  cognito: new Skill("AWS Cognito", Proficiency.Advanced, "bxl:aws"),
  cloudfront: new Skill("AWS CloudFront", Proficiency.Advanced, "bxl:aws"),
  cloudwatch: new Skill("AWS CloudWatch", Proficiency.Advanced, "bxl:aws"),
  dynamob: new Skill("AWS DynamoDB", Proficiency.Advanced, "simple-icons:amazondynamodb"),
  ec2: new Skill("AWS EC2", Proficiency.Advanced, "bxl:aws"),
  figma: new Skill("Figma", Proficiency.Advanced, "gg:figma"),
  git: new Skill("Git", Proficiency.Advanced, "cib:git"),
  graphql: new Skill("GraphQL", Proficiency.Advanced, "akar-icons:graphql-fill"),
  hls: new Skill("HLS Video Streaming", Proficiency.Advanced, "ic:baseline-hls"),
  iam: new Skill("AWS IAM", Proficiency.Advanced, "bxl:aws"),
  illustrator: new Skill("Adobe Illustrator", Proficiency.Intermediate, "file-icons:adobe-illustrator"),
  java: new Skill("Java", Proficiency.Advanced, "la:java"),
  javascript: new Skill("JavaScript", Proficiency.Expert, "cib:javascript"),
  lambda: new Skill("AWS Lambda", Proficiency.Advanced, "mdi:lambda"),
  mediaconvert: new Skill("AWS MediaConvert", Proficiency.Advanced, "bxl:aws"),
  mips: new Skill("MIPS ISA", Proficiency.Intermediate, "file-icons:assembly-generic"),
  mongodb: new Skill("MongoDB", Proficiency.Advanced, "bxl:mongodb"),
  node: new Skill("Node JS", Proficiency.Expert, "akar-icons:node-fill"),
  python: new Skill("Python", Proficiency.Intermediate, "akar-icons:python-fill"),
  photoshop: new Skill("Adobe Photoshop", Proficiency.Intermediate, "file-icons:adobe-photoshop"),
  premiere: new Skill("Adobe Premiere", Proficiency.Intermediate, "file-icons:adobe-premiere"),
  react: new Skill("React", Proficiency.Expert, "akar-icons:react-fill"),
  rfid: new Skill("RFID Read/Write", Proficiency.Intermediate, "wpf:rfid-tag"),
  rekognition: new Skill("AWS Rekognition", Proficiency.Advanced, "bxl:aws"),
  reactNative: new Skill("React Native", Proficiency.Expert, "akar-icons:react-fill"),
  s3: new Skill("AWS S3", Proficiency.Advanced, "simple-icons:amazons3"),
  swift: new Skill("Swift", Proficiency.Advanced, "fa6-brands:swift"),
  typescript: new Skill("TypeScript", Proficiency.Expert, "cib:typescript"),
};

export const projects = [
  new Project({
    title: "Project 2",
    description: "Lorem dolore in fugiat et duis amet consequat amet adipisicing. Do voluptate officia eiusmod sit.",
    skills: [skills.react, skills.node, skills.typescript, skills.javascript, skills.git, skills.reactNative],
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
