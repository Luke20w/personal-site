export default class Recognition {
  title: string;
  description: string;
  image?: string;
  links?: RecognitionLink[];

  constructor(arg: RecognitionArgument) {
    this.title = arg.title;
    this.description = arg.description;
    this.image = arg.image;
    this.links = arg.links;
  }
}

export type RecognitionArgument = {
  title: string;
  description: string;
  image?: string;
  links?: RecognitionLink[];
};

export class RecognitionLink {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
