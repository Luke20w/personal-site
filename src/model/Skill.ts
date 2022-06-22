export default class Skill {
  name: string;
  proficiency: Proficiency;
  category: Category;
  icon: string;

  constructor(name: string, proficiency: Proficiency, category: Category, icon: string) {
    this.name = name;
    this.proficiency = proficiency;
    this.category = category;
    this.icon = icon;
  }
}

export enum Proficiency {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
}

export enum Category {
  Development = "Development",
  Design = "Design",
  Hardware = "Hardware",
}
