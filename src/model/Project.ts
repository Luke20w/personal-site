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

export class Skill {
  name: string;
  level: Proficiency;
  icon: string;
  color: string;

  constructor(name: string, level: Proficiency, icon: string, color: string) {
    this.name = name;
    this.level = level;
    this.icon = icon;
    this.color = color;
  }
}

export enum Proficiency {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
}
