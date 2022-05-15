export default class Skill {
  name: string;
  proficiency: Proficiency;
  icon: string;

  constructor(name: string, level: Proficiency, icon: string) {
    this.name = name;
    this.proficiency = level;
    this.icon = icon;
  }
}

export enum Proficiency {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
}
