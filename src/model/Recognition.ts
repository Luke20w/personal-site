export default class Recognition {
  title: string;
  description: string;
  images?: string[];
  videos?: string[];
  links?: RecognitionLink[];

  constructor(arg: RecognitionArgument) {
    this.title = arg.title;
    this.description = arg.description;
    this.images = arg.images;
    this.videos = arg.videos;
    this.links = arg.links;
  }
}

export type RecognitionArgument = {
  title: string;
  description: string;
  images?: string[];
  videos?: string[];
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
