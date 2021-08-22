export class Message {
    content?: string;
    alert?: Alert;


}

export enum Alert {
    Red,
    Green,
    Orange,
    Blue
  }