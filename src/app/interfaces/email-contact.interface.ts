export interface EmailContact {
  name: string;
  company?: string;
  email: string;
  message: string;
}
export interface PostEmail {
  sender: string;
  textFromSender: string;
}
