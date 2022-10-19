export interface EmailContact {
  name: string;
  company?: string;
  email: string;
  message: string;
  phone: number;
  country: string;
}
export interface PostEmail {
  sender: string;
  textFromSender: string;
}
