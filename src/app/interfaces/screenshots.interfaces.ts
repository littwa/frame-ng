export interface ICreateScreenshotsList {
  name: string;
}

export interface IScreenshotsList {
  name: string;
  public_id_screenshots: string[];
  screenshots: any[];
  author: any;
  created: any;
}

export interface IScreenshot {
  name: string;
  description: string;
  type: any; // EScreenshotType
  url: string;
  public_id: string;
  essential: false;
  data: { [key: string]: any };
  created: Date;
}
