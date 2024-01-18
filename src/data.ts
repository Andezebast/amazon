import { IAccount } from "./models/IAccount";
import { ICampaign } from "./models/ICampaign";
import { IProfile } from "./models/IProfile";

export const accounts: IAccount[] = [
  {
    accountid: "1",
    email: "andrey@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "20.10.1995",
  },
  {
    accountid: "2",
    email: "dima@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "25.05.1998",
  },
  {
    accountid: "3",
    email: "vasya@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "05.11.1992",
  },
  {
    accountid: "4",
    email: "sasha@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "28.06.1999",
  },
  {
    accountid: "5",
    email: "nikita@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "06.06.1995",
  },
  {
    accountid: "6",
    email: "igor@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "13.12.1994",
  },
  {
    accountid: "7",
    email: "anton@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "26.06.2001",
  },
  {
    accountid: "8",
    email: "oleg@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "27.02.2001",
  },
  {
    accountid: "9",
    email: "andrey@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "10.10.1996",
  },
  {
    accountid: "10",
    email: "sasha@gmail.com",
    authToken: "eyJhbGciOiJIUcI1NiIsInR5cCI6IkpXVCJ9",
    creationDate: "50.05.1992",
  },
];
/*----------------------------*/
export const profile: IProfile[] = [
  {
    profileid: "348",
    country: "Urkaine",
    marketplace: "Rozetka",
    accountid: "1",
  },
  {
    profileid: "876",
    country: "Urkaine",
    marketplace: "Allo",
    accountid: "1",
  },
  {
    profileid: "354",
    country: "Urkaine",
    marketplace: "Comfy",
    accountid: "1",
  },
  {
    profileid: "963",
    country: "Urkaine",
    marketplace: "Citrus",
    accountid: "1",
  },
  /*-------------------------*/
  {
    profileid: "348",
    country: "Urkaine",
    marketplace: "Rozetka",
    accountid: "2",
  },
  {
    profileid: "876",
    country: "Urkaine",
    marketplace: "Allo",
    accountid: "2",
  },
  {
    profileid: "354",
    country: "Urkaine",
    marketplace: "Comfy",
    accountid: "2",
  },
  /*-------------------------*/
  {
    profileid: "654",
    country: "Germany",
    marketplace: "Etsy",
    accountid: "3",
  },
  {
    profileid: "723",
    country: "Germany",
    marketplace: "Otto",
    accountid: "3",
  },
  {
    profileid: "319",
    country: "Germany",
    marketplace: "Ebay",
    accountid: "3",
  },
  {
    profileid: "734",
    country: "Germany",
    marketplace: "Amazon",
    accountid: "3",
  },
  /*-------------------------*/
  {
    profileid: "319",
    country: "Germany",
    marketplace: "Ebay",
    accountid: "4",
  },
  {
    profileid: "734",
    country: "Germany",
    marketplace: "Amazon",
    accountid: "4",
  },
  {
    profileid: "795",
    country: "Germany",
    marketplace: "About you",
    accountid: "4",
  },
  {
    profileid: "538",
    country: "Germany",
    marketplace: "Hood",
    accountid: "4",
  },
  {
    profileid: "201",
    country: "Germany",
    marketplace: "Avocadostore",
    accountid: "4",
  },
  /*-------------------------*/
  {
    profileid: "319",
    country: "USA",
    marketplace: "Ebay",
    accountid: "5",
  },
  {
    profileid: "734",
    country: "USA",
    marketplace: "Amazon",
    accountid: "5",
  },
  {
    profileid: "654",
    country: "USA",
    marketplace: "Etsy",
    accountid: "5",
  },
  /*-------------------------*/
  {
    profileid: "319",
    country: "USA",
    marketplace: "Ebay",
    accountid: "6",
  },
  {
    profileid: "734",
    country: "USA",
    marketplace: "Amazon",
    accountid: "6",
  },
  {
    profileid: "654",
    country: "USA",
    marketplace: "Etsy",
    accountid: "6",
  },
  {
    profileid: "610",
    country: "USA",
    marketplace: "Best Buy",
    accountid: "6",
  },
  {
    profileid: "192",
    country: "USA",
    marketplace: "Walmart",
    accountid: "6",
  },
  /*-------------------------*/
  {
    profileid: "734",
    country: "USA",
    marketplace: "Amazon",
    accountid: "7",
  },
  {
    profileid: "654",
    country: "USA",
    marketplace: "Etsy",
    accountid: "7",
  },
  {
    profileid: "610",
    country: "USA",
    marketplace: "Best Buy",
    accountid: "7",
  },
  /*-------------------------*/
  {
    profileid: "687",
    country: "Poland",
    marketplace: "Allegro",
    accountid: "8",
  },
  {
    profileid: "485",
    country: "Poland",
    marketplace: "Zalando",
    accountid: "8",
  },
  {
    profileid: "390",
    country: "Poland",
    marketplace: "Aliexpress",
    accountid: "8",
  },
  /*-------------------------*/
  {
    profileid: "687",
    country: "Poland",
    marketplace: "Allegro",
    accountid: "9",
  },
  {
    profileid: "485",
    country: "Poland",
    marketplace: "Zalando",
    accountid: "9",
  },
  {
    profileid: "390",
    country: "Poland",
    marketplace: "Aliexpress",
    accountid: "9",
  },
  {
    profileid: "464",
    country: "Poland",
    marketplace: "Olx",
    accountid: "9",
  },
  /*-------------------------*/
  {
    profileid: "687",
    country: "Poland",
    marketplace: "Allegro",
    accountid: "10",
  },
  {
    profileid: "485",
    country: "Poland",
    marketplace: "Zalando",
    accountid: "10",
  },
  {
    profileid: "390",
    country: "Poland",
    marketplace: "Aliexpress",
    accountid: "10",
  },
  {
    profileid: "464",
    country: "Poland",
    marketplace: "Olx",
    accountid: "10",
  },
];
/*----------------------------*/
export const campaign: ICampaign[] = [
  /*---------Rozetka---------*/
  {
    campaignid: "1512",
    clicks: 12,
    cost: 500,
    date: "10.05.2017",
    profileid: "348",
  },
  {
    campaignid: "1683",
    clicks: 55,
    cost: 600,
    date: "15.10.2019",
    profileid: "348",
  },
  {
    campaignid: "1835",
    clicks: 78,
    cost: 700,
    date: "24.07.2018",
    profileid: "348",
  },
  /*----------Allo----------*/
  {
    campaignid: "2912",
    clicks: 100,
    cost: 800,
    date: "08.08.2018",
    profileid: "876",
  },
  {
    campaignid: "2514",
    clicks: 70,
    cost: 950,
    date: "11.05.2017",
    profileid: "876",
  },
  /*----------Comfy----------*/
  {
    campaignid: "3812",
    clicks: 91,
    cost: 950,
    date: "20.08.2019",
    profileid: "354",
  },
  {
    campaignid: "3614",
    clicks: 40,
    cost: 350,
    date: "31.12.2017",
    profileid: "354",
  },
  /*----------Etsy----------*/
  {
    campaignid: "4324",
    clicks: 91,
    cost: 550,
    date: "20.08.2019",
    profileid: "354",
  },
  {
    campaignid: "4950",
    clicks: 80,
    cost: 750,
    date: "10.05.2019",
    profileid: "354",
  },
  {
    campaignid: "4760",
    clicks: 34,
    cost: 250,
    date: "27.06.2020",
    profileid: "354",
  },
  {
    campaignid: "4240",
    clicks: 25,
    cost: 160,
    date: "01.06.2021",
    profileid: "354",
  },
  /*----------Otto----------*/
  {
    campaignid: "5414",
    clicks: 88,
    cost: 860,
    date: "31.10.2019",
    profileid: "723",
  },
  /*----------Ebay----------*/
  {
    campaignid: "4512",
    clicks: 21,
    cost: 480,
    date: "01.08.2020",
    profileid: "319",
  },
  {
    campaignid: "4683",
    clicks: 59,
    cost: 670,
    date: "04.10.2019",
    profileid: "319",
  },
  {
    campaignid: "4835",
    clicks: 87,
    cost: 920,
    date: "07.07.2017",
    profileid: "319",
  },
  /*----------Amazon----------*/
  {
    campaignid: "5212",
    clicks: 85,
    cost: 480,
    date: "01.08.2020",
    profileid: "319",
  },
  {
    campaignid: "5689",
    clicks: 93,
    cost: 670,
    date: "04.10.2019",
    profileid: "319",
  },
  {
    campaignid: "5583",
    clicks: 14,
    cost: 920,
    date: "07.07.2017",
    profileid: "319",
  },
  {
    campaignid: "5358",
    clicks: 31,
    cost: 920,
    date: "05.11.2018",
    profileid: "319",
  },
  /*----------About you----------*/
  {
    campaignid: "6584",
    clicks: 14,
    cost: 920,
    date: "20.02.2020",
    profileid: "795",
  },
  {
    campaignid: "6778",
    clicks: 31,
    cost: 920,
    date: "27.01.2021",
    profileid: "795",
  },
  /*----------Hood----------*/
  {
    campaignid: "7123",
    clicks: 55,
    cost: 657,
    date: "23.05.2023",
    profileid: "538",
  },
  /*------Avocadostore------*/
  {
    campaignid: "8654",
    clicks: 112,
    cost: 580,
    date: "20.04.2022",
    profileid: "201",
  },
  {
    campaignid: "8374",
    clicks: 95,
    cost: 720,
    date: "30.11.2021",
    profileid: "201",
  },
  /*------Best Buy------*/
  {
    campaignid: "9697",
    clicks: 98,
    cost: 810,
    date: "03.05.2023",
    profileid: "610",
  },
  {
    campaignid: "9432",
    clicks: 120,
    cost: 999,
    date: "02.08.2022",
    profileid: "610",
  },
  /*------Walmart------*/
  {
    campaignid: "10522",
    clicks: 69,
    cost: 200,
    date: "05.11.2021",
    profileid: "192",
  },
  /*------Allegro------*/
  {
    campaignid: "11522",
    clicks: 67,
    cost: 598,
    date: "27.04.20210",
    profileid: "687",
  },
  /*------Zalando------*/
  {
    campaignid: "12697",
    clicks: 15,
    cost: 969,
    date: "03.05.2023",
    profileid: "485",
  },
  {
    campaignid: "12432",
    clicks: 24,
    cost: 650,
    date: "30.10.2022",
    profileid: "485",
  },
  {
    campaignid: "12996",
    clicks: 78,
    cost: 100,
    date: "02.08.2022",
    profileid: "485",
  },
  /*------Aliexpress------*/
  {
    campaignid: "13996",
    clicks: 99,
    cost: 123,
    date: "02.08.2017",
    profileid: "390",
  },
  /*------Olx------*/
  {
    campaignid: "14123",
    clicks: 87,
    cost: 123,
    date: "24.10.2021",
    profileid: "464",
  },
  {
    campaignid: "14950",
    clicks: 41,
    cost: 123,
    date: "24.11.2020",
    profileid: "464",
  },
];
