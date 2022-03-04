export default class Exprience {
  company: string;
  title: string;
  location: string;
  time: string;
  points: string[];

  constructor(arg: ExprienceArgument) {
    this.company = arg.company;
    this.title = arg.title;
    this.location = arg.location;
    this.time = arg.time;
    this.points = arg.points;
  }
}

export type ExprienceArgument = {
  company: string;
  title: string;
  location: string;
  time: string;
  points: string[];
};
