import Skill from "./Skill";

export default class Project {
  title: string;
  shortDescription: string;
  longDescription?: string;
  skills: Skill[];
  images?: string[];
  videos?: string[];
  type: "personal" | "professional";

  constructor(arg: ProjectArgument) {
    this.title = arg.title;
    this.shortDescription = arg.shortDescription;
    this.longDescription = arg.longDescription;
    this.skills = arg.skills;
    this.images = arg.images;
    this.videos = arg.videos;
    this.type = arg.type;
  }
}

export type ProjectArgument = {
  title: string;
  shortDescription: string;
  longDescription?: string;
  skills: Skill[];
  images?: string[];
  videos?: string[];
  type: "personal" | "professional";
};
