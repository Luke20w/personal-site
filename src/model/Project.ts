import Skill from "./Skill";

export default class Project {
  title: string;
  description: string;
  skills: Skill[];
  images?: string[];

  constructor(arg: ProjectArgument) {
    this.title = arg.title;
    this.description = arg.description;
    this.skills = arg.skills;
    this.images = arg.images;
  }
}

export type ProjectArgument = {
  title: string;
  description: string;
  skills: Skill[];
  images?: string[];
};
