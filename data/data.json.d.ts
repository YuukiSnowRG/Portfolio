export interface JsonData {
  "techs": {
    "id": string;
    "title": string;
    "description": string;
    "image": string;
  }[],
  "projects": {
    "id": string;
    "title": string;
    "link": string;
    "image": string;
  }[],
  "contacts": {
    "id": string;
    "title": string;
    "link": string;
    "image": string;
  }[];
}
