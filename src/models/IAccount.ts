export interface IAccount {
  accountid: string;
  email: string;
  authToken: string;
  creationDate: string;
  [key: string]: string;
}
