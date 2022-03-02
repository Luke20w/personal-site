export default class Project {
  title: string;
  description: string;
  skills: Skill[];

  constructor(title: string, description: string, skills: Skill[]) {
    this.title = title;
    this.description = description;
    this.skills = skills;
  }
}

export class Skill {
  name: string;
  level: SkillLevel;
  icon: string;
  color: string;

  constructor(name: string, level: SkillLevel, icon: string, color: string) {
    this.name = name;
    this.level = level;
    this.icon = icon;
    this.color = color;
  }
}

export enum SkillLevel {
  Beginner = "Novice",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
}
