const cardData = [
  {
    "name": "Virat Kohli",
    "team": "RCB",
    "img": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/imported/2023-05/959871db-1e2c-48ff-af1c-07fa55780550/Untitled_design__7_.jpg",
    "runs": 8661,
    "batAvg": 39.55,
    "batSR": 132.86,
    "highScore": 113,
    "wickets": 4,
    "bowlAvg": 92,
    "bowlER": 8.8,
    "bestBowling": "2/25"
  },
  {
    "name": "Glenn Maxwell",
    "team": "RCB",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/327700/327786.jpg",
    "runs": 2819,
    "batAvg": 23.89,
    "batSR": 155.15,
    "highScore": 95,
    "wickets": 41,
    "bowlAvg": 34.46,
    "bowlER": 8.3,
    "bestBowling": "2/15"
  },
  {
    "name": "Mohammed Siraj",
    "team": "RCB",
    "img": "https://images.thequint.com/thequint%2F2023-04%2Fabecc4fe-5614-4f29-a46b-3effb713db26%2F_AI_2010.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200",
    "runs": 112,
    "batAvg": 11.2,
    "batSR": 91.06,
    "highScore": 14,
    "wickets": 109,
    "bowlAvg": 30.72,
    "bowlER": 8.74,
    "bestBowling": "4/17"
  },
  {
    "name": "Faf Du Plessis",
    "team": "RCB",
    "img": "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-99386688/99386688.jpg",
    "runs": 4773,
    "batAvg": 35.1,
    "batSR": 135.79,
    "highScore": 96,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 16,
    "bestBowling": "0/16"
  },
  {
    "name": "Harshal Patel",
    "team": "RCB",
    "img": "https://www.kreedon.com/wp-content/uploads/2021/10/1600x960_218196-patel.jpg",
    "runs": 270,
    "batAvg": 9.31,
    "batSR": 117.91,
    "highScore": 36,
    "wickets": 151,
    "bowlAvg": 23.7,
    "bowlER": 8.86,
    "bestBowling": "5/27"
  },
  {
    "name": "Rishabh Pant",
    "team": "DC",
    "img": "https://www.sportzcraazy.com/wp-content/uploads/2022/04/Rishabh-Pant.jpg",
    "runs": 3553,
    "batAvg": 34.16,
    "batSR": 147.62,
    "highScore": 128,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "David Warner",
    "team": "DC",
    "img": "https://www.thestatesman.com/wp-content/uploads/2023/03/Untitled-design-47-2.jpg",
    "runs": 6565,
    "batAvg": 40.52,
    "batSR": 139.78,
    "highScore": 126,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/2"
  },
  {
    "name": "Axar Patel",
    "team": "DC",
    "img": "https://images.news18.com/ibnlive/uploads/2023/04/dc_mi_axar.png",
    "runs": 1916,
    "batAvg": 22.02,
    "batSR": 133.99,
    "highScore": 66,
    "wickets": 128,
    "bowlAvg": 31.61,
    "bowlER": 7.35,
    "bestBowling": "4/21"
  },
  {
    "name": "Kuldeep Yadav",
    "team": "DC",
    "img": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202204/kuldeep_yadav_dc_win-sixteen_nine.jpg?size=948:533",
    "runs": 201,
    "batAvg": 13.4,
    "batSR": 86.64,
    "highScore": 35,
    "wickets": 102,
    "bowlAvg": 26.95,
    "bowlER": 8.04,
    "bestBowling": "4/14"
  },
  {
    "name": "Prithvi Shaw",
    "team": "DC",
    "img": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/09/prithvi-shaw-1601091388.jpg",
    "runs": 1892,
    "batAvg": 23.95,
    "batSR": 147.47,
    "highScore": 99,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Sunil Narine",
    "team": "KKR",
    "img": "https://cricketaddictor.com/wp-content/uploads/2021/08/Sunil-Narine.jpg",
    "runs": 1780,
    "batAvg": 17.62,
    "batSR": 166.52,
    "highScore": 109,
    "wickets": 192,
    "bowlAvg": 25.64,
    "bowlER": 6.8,
    "bestBowling": "5/19"
  },
  {
    "name": "Andre Russell",
    "team": "KKR",
    "img": "https://english.cdn.zeenews.com/sites/default/files/2023/04/29/1192144-russell-1.png",
    "runs": 2651,
    "batAvg": 28.2,
    "batSR": 174.18,
    "highScore": 88,
    "wickets": 123,
    "bowlAvg": 23.28,
    "bowlER": 9.51,
    "bestBowling": "5/15"
  },
  {
    "name": "Shreyas Iyer",
    "team": "KKR",
    "img": "https://www.mykhel.com/img/2022/03/shreyas-iyer-kkr-captain-1648662361.jpg",
    "runs": 3731,
    "batAvg": 34.23,
    "batSR": 133.35,
    "highScore": 97,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 7,
    "bestBowling": "0/7"
  },
  {
    "name": "Nitish Rana",
    "team": "KKR",
    "img": "https://cricketaddictor.com/wp-content/uploads/2023/05/Nitish-Rana-1.jpg",
    "runs": 2853,
    "batAvg": 27.7,
    "batSR": 136.77,
    "highScore": 87,
    "wickets": 10,
    "bowlAvg": 27,
    "bowlER": 8.44,
    "bestBowling": "2/11"
  },
  {
    "name": "Shardul Thakur",
    "team": "KKR",
    "img": "https://images.thequint.com/thequint%2F2023-04%2Fae1c6c64-7fdf-42b4-bc5d-fa96d694724b%2FSPCS5316.JPG",
    "runs": 325,
    "batAvg": 11.61,
    "batSR": 139.49,
    "highScore": 68,
    "wickets": 107,
    "bowlAvg": 30.32,
    "bowlER": 9.4,
    "bestBowling": "4/34"
  },
  {
    "name": "Rohit Sharma",
    "team": "MI",
    "img": "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/05/13/Pictures/cricket-t20-ind-ipl-mumbai-chennai-final_cf91239e-7590-11e9-9ebe-bd8a57c16f3e.jpg",
    "runs": 7046,
    "batAvg": 29.73,
    "batSR": 132.1,
    "highScore": 109,
    "wickets": 15,
    "bowlAvg": 30.2,
    "bowlER": 8.02,
    "bestBowling": "4/6"
  },
  {
    "name": "Jasprit Bumrah",
    "team": "MI",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/339700/339742.6.jpg",
    "runs": 68,
    "batAvg": 9.71,
    "batSR": 86.08,
    "highScore": 16,
    "wickets": 183,
    "bowlAvg": 22.03,
    "bowlER": 7.25,
    "bestBowling": "5/10"
  },
  {
    "name": "Suryakumar Yadav",
    "team": "MI",
    "img": "https://s3images.zee5.com/wp-content/uploads/2023/04/ANI-20230423072931.jpg",
    "runs": 4311,
    "batAvg": 35.05,
    "batSR": 148.66,
    "highScore": 103,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 8,
    "bestBowling": "0/8"
  },
  {
    "name": "Piyush Chawla",
    "team": "MI",
    "img": "https://images.indianexpress.com/2023/04/Untitled-design-8-4.jpg",
    "runs": 624,
    "batAvg": 11.14,
    "batSR": 110.84,
    "highScore": 24,
    "wickets": 192,
    "bowlAvg": 26.6,
    "bowlER": 7.96,
    "bestBowling": "4/17"
  },
  {
    "name": "Ishan Kishan",
    "team": "MI",
    "img": "https://s01.sgp1.cdn.digitaloceanspaces.com/article/148274-xcexkcwzia-1601354739.jpg",
    "runs": 2998,
    "batAvg": 29.11,
    "batSR": 137.65,
    "highScore": 106,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/4"
  },
  {
    "name": "KL Rahul",
    "team": "LSG",
    "img": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/KL_Rahul_hundred_PTI_1200x768.jpeg?VersionId=LlJFezdqcotwIsgovd.OhuAxjdFleCQx",
    "runs": 5222,
    "batAvg": 46.21,
    "batSR": 136.03,
    "highScore": 132,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Krunal Pandya",
    "team": "LSG",
    "img": "https://www.hindustantimes.com/ht-img/img/2023/05/20/550x309/PTI05-20-2023-000496A-0_1684611793705_1684611828894.jpg",
    "runs": 1748,
    "batAvg": 21.85,
    "batSR": 132.43,
    "highScore": 86,
    "wickets": 93,
    "bowlAvg": 32.1,
    "bowlER": 7.47,
    "bestBowling": "4/45"
  },
  {
    "name": "Quinton DeKock",
    "team": "LSG",
    "img": "https://images.hindustantimes.com/img/2022/05/18/1600x900/de_kock_bcci_1652898277812_1652898283368.jpg",
    "runs": 3309,
    "batAvg": 30.64,
    "batSR": 134.03,
    "highScore": 140,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Deepak Hooda",
    "team": "LSG",
    "img": "https://images.hindustantimes.com/img/2022/04/28/550x309/PTI04-04-2022-000267B-0_1651144875014_1651144894361.jpg",
    "runs": 1496,
    "batAvg": 17.6,
    "batSR": 127.65,
    "highScore": 64,
    "wickets": 10,
    "bowlAvg": 54.6,
    "bowlER": 8.64,
    "bestBowling": "2/16"
  },
  {
    "name": "Nicholas Pooran",
    "team": "LSG",
    "img": "https://static.toiimg.com/photo/msid-99388197/99388197.jpg",
    "runs": 2293,
    "batAvg": 34.22,
    "batSR": 168.98,
    "highScore": 87,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Bhuvneshwar Kumar",
    "team": "SRH",
    "img": "https://cricketaddictor.com/wp-content/uploads/2021/05/Bhuvneshwar-Kumar-5.jpg",
    "runs": 320,
    "batAvg": 8.42,
    "batSR": 91.17,
    "highScore": 27,
    "wickets": 198,
    "bowlAvg": 27.33,
    "bowlER": 7.69,
    "bestBowling": "5/19"
  },
  {
    "name": "Washington Sundar",
    "team": "SRH",
    "img": "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-99807335/99807335.jpg",
    "runs": 511,
    "batAvg": 15.97,
    "batSR": 126.18,
    "highScore": 49,
    "wickets": 39,
    "bowlAvg": 36.82,
    "bowlER": 7.7,
    "bestBowling": "3/16"
  },
  {
    "name": "Mayank Agarwal",
    "team": "SRH",
    "img": "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/04/02/6538b8a12736512ab6000f5405e9a90d.jpg?fit=2000%2C1423&quality=80&zoom=1&ssl=1?v=1680440769",
    "runs": 2760,
    "batAvg": 23,
    "batSR": 133.73,
    "highScore": 106,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Rahul Tripathi",
    "team": "SRH",
    "img": "https://images.hindustantimes.com/img/2022/05/17/550x309/PTI05-17-2022-000240A-0_1652811508373_1652811534693.jpg",
    "runs": 2291,
    "batAvg": 26.03,
    "batSR": 137.85,
    "highScore": 93,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 12,
    "bestBowling": "0/12"
  },
  {
    "name": "Abhishek Sharma",
    "team": "SRH",
    "img": "https://images.news18.com/ibnlive/uploads/2021/12/1180954_1296x7291.jpg",
    "runs": 1815,
    "batAvg": 27.09,
    "batSR": 162.93,
    "highScore": 141,
    "wickets": 11,
    "bowlAvg": 45.55,
    "bowlER": 8.95,
    "bestBowling": "2/4"
  },
  {
    "name": "Hardik Pandya",
    "team": "GT",
    "img": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202204/hardik_pandya_bowling2-sixteen_nine.jpg?size=948:533",
    "runs": 2749,
    "batAvg": 28.34,
    "batSR": 146.93,
    "highScore": 91,
    "wickets": 78,
    "bowlAvg": 31.95,
    "bowlER": 9.18,
    "bestBowling": "5/36"
  },
  {
    "name": "Rashid Khan",
    "team": "GT",
    "img": "https://s01.sgp1.cdn.digitaloceanspaces.com/article/175096-fxbfcpmcmq-1653905974.jpg",
    "runs": 585,
    "batAvg": 13.93,
    "batSR": 160.28,
    "highScore": 79,
    "wickets": 158,
    "bowlAvg": 23.84,
    "bowlER": 7.09,
    "bestBowling": "4/24"
  },
  {
    "name": "Shubhman Gill",
    "team": "GT",
    "img": "https://c.ndtvimg.com/2023-05/kg1mq5rg_shubman-gill-bcci_625x300_22_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    "runs": 2790,
    "batAvg": 37.7,
    "batSR": 134.07,
    "highScore": 129,
    "wickets": 0,
    "bowlAvg": null,
    "bowlER": null,
    "bestBowling": null
  },
  {
    "name": "Mohammad Shami",
    "team": "GT",
    "img": "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-99151455/99151455.jpg",
    "runs": 74,
    "batAvg": 5.69,
    "batSR": 93.67,
    "highScore": 21,
    "wickets": 127,
    "bowlAvg": 26.87,
    "bowlER": 8.44,
    "bestBowling": "4/11"
  },
  {
    "name": "David Miller",
    "team": "GT",
    "img": "https://c.ndtvimg.com/2022-05/mk7gmn7o_david-miller-bcciipl_625x300_25_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    "runs": 3077,
    "batAvg": 35.78,
    "batSR": 138.61,
    "highScore": 101,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Shikhar Dhawan",
    "team": "PBKS",
    "img": "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/4/10/w900X450/Shikhar_Dhawan_PTI.jpg?w=400&dpr=2.6",
    "runs": 6768,
    "batAvg": 35.07,
    "batSR": 127.13,
    "highScore": 106,
    "wickets": 4,
    "bowlAvg": 16.5,
    "bowlER": 8.25,
    "bestBowling": "1/7"
  },
  {
    "name": "Sam Curran",
    "team": "PBKS",
    "img": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ropv2l73kzeboc2a_1682009128.jpeg",
    "runs": 997,
    "batAvg": 24.93,
    "batSR": 136.39,
    "highScore": 88,
    "wickets": 59,
    "bowlAvg": 34.46,
    "bowlER": 9.74,
    "bestBowling": "4/11"
  },
  {
    "name": "Arshdeep Singh",
    "team": "PBKS",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/45948868-3453-4426-9b92-5b40c8f649f6/b13004e0-9ecd-41a5-acf1-94d55cd4f91a/1280x720/match/image.jpg",
    "runs": 31,
    "batAvg": 5.17,
    "batSR": 67.4,
    "highScore": 10,
    "wickets": 97,
    "bowlAvg": 26.49,
    "bowlER": 9,
    "bestBowling": "5/32"
  },
  {
    "name": "Kagiso Rabada",
    "team": "PBKS",
    "img": "https://www.hindustantimes.com/ht-img/img/2023/04/04/1600x900/ANI-20220425280-0_1651644341842_1680629468718_1680629468718.jpg",
    "runs": 215,
    "batAvg": 11.94,
    "batSR": 106.97,
    "highScore": 44,
    "wickets": 119,
    "bowlAvg": 22.96,
    "bowlER": 8.62,
    "bestBowling": "4/21"
  },
  {
    "name": "Liam Livingstone",
    "team": "PBKS",
    "img": "https://images.hindustantimes.com/img/2022/05/16/550x309/PTI05-16-2022-000221A-0_1652716207024_1652716224802.jpg",
    "runs": 1051,
    "batAvg": 26.28,
    "batSR": 158.77,
    "highScore": 94,
    "wickets": 13,
    "bowlAvg": 36.08,
    "bowlER": 9.02,
    "bestBowling": "3/27"
  },
  {
    "name": "MS Dhoni",
    "team": "CSK",
    "img": "https://pbs.twimg.com/media/EjV-3SWU0AApaJT.jpg",
    "runs": 5439,
    "batAvg": 38.3,
    "batSR": 137.46,
    "highScore": 84,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Ravindra Jadeja",
    "team": "CSK",
    "img": "https://images.hindustantimes.com/img/2021/04/26/1600x900/20210425176L_1619404051869_1619404065842.jpg",
    "runs": 3260,
    "batAvg": 27.86,
    "batSR": 130.25,
    "highScore": 77,
    "wickets": 170,
    "bowlAvg": 30.52,
    "bowlER": 7.67,
    "bestBowling": "5/16"
  },
  {
    "name": "Deepak Chahar",
    "team": "CSK",
    "img": "https://assets.telegraphindia.com/telegraph/2021/Apr/1618685004_18spodc_3c.jpg",
    "runs": 117,
    "batAvg": 14.63,
    "batSR": 139.29,
    "highScore": 39,
    "wickets": 88,
    "bowlAvg": 29.51,
    "bowlER": 8.14,
    "bestBowling": "4/13"
  },
  {
    "name": "Ruturaj Gaikwad",
    "team": "CSK",
    "img": "https://c.ndtvimg.com/2020-10/jpth52po_ruturaj-gaikwad-bcciipl_625x300_30_October_20.jpg",
    "runs": 2502,
    "batAvg": 40.35,
    "batSR": 137.48,
    "highScore": 108,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Ajinkya Rahane",
    "team": "CSK",
    "img": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/ajinkyarahanecskipl2023-sixteen_nine.jpg?VersionId=K5GBsYuq_y3Kfsea9UDlLCVXZ0xNFAoW&size=690:388",
    "runs": 5032,
    "batAvg": 30.5,
    "batSR": 125.02,
    "highScore": 105,
    "wickets": 1,
    "bowlAvg": 5,
    "bowlER": 5,
    "bestBowling": "1/5"
  },
  {
    "name": "Yuzi Chahal",
    "team": "RR",
    "img": "https://s01.sgp1.cdn.digitaloceanspaces.com/article/173238-rlfxrcbxpd-1650346967.jpg",
    "runs": 37,
    "batAvg": 5.29,
    "batSR": 43.02,
    "highScore": 8,
    "wickets": 187,
    "bowlAvg": 21.69,
    "bowlER": 7.67,
    "bestBowling": "5/40"
  },
  {
    "name": "R Ashwin",
    "team": "RR",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/ac525da8-e7a5-49fc-a9ae-bdc4359d25e7/fec153ee-b331-46b2-bc7a-2f5f07b762ef/1280x720/match/image.jpg",
    "runs": 833,
    "batAvg": 13.02,
    "batSR": 118.16,
    "highScore": 50,
    "wickets": 187,
    "bowlAvg": 30.22,
    "bowlER": 7.2,
    "bestBowling": "4/34"
  },
  {
    "name": "Jos Buttler",
    "team": "RR",
    "img": "https://sportscafe.in/img/es3/articles/Cricket_1/jos_buttler_scoop_rr_vs_kkr_ipl2020_iplt20.jpg",
    "runs": 4120,
    "batAvg": 40,
    "batSR": 149.39,
    "highScore": 124,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Sanju Samson",
    "team": "RR",
    "img": "https://english.mathrubhumi.com/image/contentid/policy:1.7556245:1653885863/539FE898-473C-44A4-9BF7-EDD3784717CB.jpg?$p=f7be7e5&f=16x10&w=856&q=0.8",
    "runs": 4704,
    "batAvg": 30.75,
    "batSR": 139.05,
    "highScore": 119,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Trent Boult",
    "team": "RR",
    "img": "https://i0.wp.com/crictoday.com/wp-content/uploads/2022/04/trent-boult.png?fit=1200%2C675&ssl=1",
    "runs": 85,
    "batAvg": 9.44,
    "batSR": 104.94,
    "highScore": 17,
    "wickets": 143,
    "bowlAvg": 26.2,
    "bowlER": 8.38,
    "bestBowling": "4/18"
  },
  {
    "name": "Dinesh Karthik",
    "team": "RCB",
    "img": "https://www.hindustantimes.com/ht-img/img/2023/04/27/1600x900/PTI04-26-2023-000426A-0_1682582966132_1682583007334.jpg",
    "runs": 4516,
    "batAvg": 25.81,
    "batSR": 132.71,
    "highScore": 97,
    "wickets": 0,
    "bowlAvg": null,
    "bowlER": null,
    "bestBowling": null
  },
  {
    "name": "AB De Villiers",
    "team": "RCB",
    "img": "https://wallpapers.com/images/hd/ab-de-villiers-rcb-t20i-series-2b1y6a6ne1acswib.jpg",
    "runs": 5162,
    "batAvg": 39.71,
    "batSR": 151.69,
    "highScore": 133,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Wanindu Hasaranga",
    "team": "RCB",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/4c6cc4d7-1d03-486c-af02-ce569091427c/95408434-50f2-4d30-9eb4-af7840887ef7/1280x720/match/image.jpg",
    "runs": 81,
    "batAvg": 5.4,
    "batSR": 92.05,
    "highScore": 18,
    "wickets": 46,
    "bowlAvg": 24.33,
    "bowlER": 8.41,
    "bestBowling": "5/18"
  },
  {
    "name": "Karn Sharma",
    "team": "RCB",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/c49ed900-f704-4784-bc49-8935281fab92/71c6a4ff-1401-4562-a68a-72828605e7b4/1280x720/match/image.jpg",
    "runs": 352,
    "batAvg": 13.54,
    "batSR": 119.33,
    "highScore": 39,
    "wickets": 83,
    "bowlAvg": 26.69,
    "bowlER": 8.38,
    "bestBowling": "4/16"
  },
  {
    "name": "Shahbaz Ahmed",
    "team": "RCB",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/efe054aa-15a9-4e96-9d27-eb2c2ba14b0e/70ef0097-ac3c-4a37-b56e-432f954dcd48/1280x720/match/image.jpg",
    "runs": 545,
    "batAvg": 18.79,
    "batSR": 121.66,
    "highScore": 59,
    "wickets": 22,
    "bowlAvg": 42.68,
    "bowlER": 9.58,
    "bestBowling": "3/7"
  },
  {
    "name": "Tilak Varma",
    "team": "MI",
    "img": "https://staticg.sportskeeda.com/editor/2022/11/03cd9-16698080422151-1920.jpg",
    "runs": 1499,
    "batAvg": 37.48,
    "batSR": 144.42,
    "highScore": 84,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 7.64,
    "bestBowling": "0/6"
  },
  {
    "name": "Keiron Pollard",
    "team": "MI",
    "img": "https://static.toiimg.com/thumb/imgsize-23456,msid-46988832,width-600,resizemode-4/46988832.jpg",
    "runs": 3412,
    "batAvg": 28.67,
    "batSR": 147.32,
    "highScore": 87,
    "wickets": 69,
    "bowlAvg": 31.59,
    "bowlER": 8.79,
    "bestBowling": "4/44"
  },
  {
    "name": "Tim David",
    "team": "MI",
    "img": "https://m.cricbuzz.com/a/img/v1/600x400/i1/c306980/tim-david-scored-an-unbeaten-14-ball-45.jpg",
    "runs": 846,
    "batAvg": 32.54,
    "batSR": 173.37,
    "highScore": 50,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Jofra Archer",
    "team": "MI",
    "img": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/jofra_archer-sixteen_nine.jpeg?VersionId=L.gfRyNcpQPNCtbhnAjrKPAxQ8qeURmL",
    "runs": 262,
    "batAvg": 13.79,
    "batSR": 147.2,
    "highScore": 30,
    "wickets": 59,
    "bowlAvg": 27.15,
    "bowlER": 7.89,
    "bestBowling": "3/15"
  },
  {
    "name": "Lasith Malinga",
    "team": "MI",
    "img": "https://images.hindustantimes.com/img/2022/03/11/550x309/malinga-getty_1631623433998_1646988148876.jpg",
    "runs": 88,
    "batAvg": 5.5,
    "batSR": 88.89,
    "highScore": 17,
    "wickets": 170,
    "bowlAvg": 19.79,
    "bowlER": 7.14,
    "bestBowling": "5/13"
  },
  {
    "name": "Varun Chakravarthy",
    "team": "KKR",
    "img": "https://images.hindustantimes.com/img/2021/10/17/1600x900/Varun_Chakravarthy_1633443289011_1634470155052.jpg",
    "runs": 26,
    "batAvg": 6.5,
    "batSR": 55.32,
    "highScore": 10,
    "wickets": 100,
    "bowlAvg": 23.85,
    "bowlER": 7.58,
    "bestBowling": "5/20"
  },
  {
    "name": "Umesh Yadav",
    "team": "KKR",
    "img": "https://crictoday.com/wp-content/uploads/2023/03/umesh-yadav-IPL-2022.jpg",
    "runs": 208,
    "batAvg": 9.9,
    "batSR": 103.49,
    "highScore": 24,
    "wickets": 144,
    "bowlAvg": 29.98,
    "bowlER": 8.49,
    "bestBowling": "4/23"
  },
  {
    "name": "Rinku Singh",
    "team": "KKR",
    "img": "https://s01.sgp1.cdn.digitaloceanspaces.com/article/190385-ouzvypbymi-1684654249.jpg",
    "runs": 1099,
    "batAvg": 30.53,
    "batSR": 145.18,
    "highScore": 67,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Venkatesh Iyer",
    "team": "KKR",
    "img": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/337500/337588.4.jpg",
    "runs": 1468,
    "batAvg": 29.96,
    "batSR": 137.33,
    "highScore": 104,
    "wickets": 3,
    "bowlAvg": 47.67,
    "bowlER": 10.59,
    "bestBowling": "2/29"
  },
  {
    "name": "Tim Southee",
    "team": "KKR",
    "img": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/04/image-11-1649931341.jpg",
    "runs": 120,
    "batAvg": 9.23,
    "batSR": 112.15,
    "highScore": 36,
    "wickets": 47,
    "bowlAvg": 37.06,
    "bowlER": 8.67,
    "bestBowling": "3/20"
  },
  {
    "name": "Kane Williamson",
    "team": "GT",
    "img": "https://www.india.com/wp-content/uploads/2023/03/Kane-Williamson-GT.jpg",
    "runs": 2128,
    "batAvg": 35.47,
    "batSR": 125.62,
    "highScore": 89,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 10.33,
    "bestBowling": "0/7"
  },
  {
    "name": "Mohit Sharma",
    "team": "GT",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/358600/358606.6.jpg",
    "runs": 125,
    "batAvg": 6.94,
    "batSR": 91.92,
    "highScore": 21,
    "wickets": 134,
    "bowlAvg": 26.22,
    "bowlER": 8.77,
    "bestBowling": "5/10"
  },
  {
    "name": "Rahul Tewatia",
    "team": "GT",
    "img": "https://images.hindustantimes.com/img/2022/04/28/550x309/PTI04-27-2022-000262B-0_1651149321290_1651149330792.jpg",
    "runs": 1112,
    "batAvg": 23.17,
    "batSR": 137.12,
    "highScore": 53,
    "wickets": 32,
    "bowlAvg": 34.72,
    "bowlER": 7.91,
    "bestBowling": "3/18"
  },
  {
    "name": "Wriddhiman Saha",
    "team": "GT",
    "img": "https://images.indianexpress.com/2023/04/wriddhiman-saha.jpg",
    "runs": 2934,
    "batAvg": 24.25,
    "batSR": 127.57,
    "highScore": 115,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Vijay Shankar",
    "team": "GT",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/8a849b07-0346-491f-83e8-8b35ad727f06/4a04c8ed-ff1e-4aa4-9e97-eecb29b98610/1280x720/match/image.jpg",
    "runs": 1233,
    "batAvg": 26.23,
    "batSR": 129.79,
    "highScore": 69,
    "wickets": 9,
    "bowlAvg": 38.22,
    "bowlER": 8.67,
    "bestBowling": "2/19"
  },
  {
    "name": "Yashasvi Jaiswal",
    "team": "RR",
    "img": "https://th-i.thgim.com/public/incoming/if0jrj/article66873242.ece/alternates/LANDSCAPE_1200/IMG_TH20JAISWAL_2_1_FDB8H83G.jpg",
    "runs": 2166,
    "batAvg": 34.38,
    "batSR": 152.86,
    "highScore": 124,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/6"
  },
  {
    "name": "Riyan Parag",
    "team": "RR",
    "img": "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2020/10/Screenshot_2020_10_11_at_7_19_54_PM.png?fit=1071%2C628&ssl=1",
    "runs": 1566,
    "batAvg": 26.1,
    "batSR": 141.85,
    "highScore": 95,
    "wickets": 7,
    "bowlAvg": 68.14,
    "bowlER": 9.7,
    "bestBowling": "1/7"
  },
  {
    "name": "Shimron Hetmyer",
    "team": "RR",
    "img": "https://www.thestatesman.com/wp-content/uploads/2022/05/shim.jpeg",
    "runs": 1482,
    "batAvg": 29.06,
    "batSR": 151.85,
    "highScore": 75,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Sandeep Sharma",
    "team": "RR",
    "img": "https://english.cdn.zeenews.com/sites/default/files/2023/04/15/1184109-untitled-design-2023-04-15t104542.264.png",
    "runs": 60,
    "batAvg": 10,
    "batSR": 80,
    "highScore": 9,
    "wickets": 146,
    "bowlAvg": 27.88,
    "bowlER": 8.03,
    "bestBowling": "5/18"
  },
  {
    "name": "Jason Holder",
    "team": "RR",
    "img": "https://www.hindustantimes.com/ht-img/img/2023/05/04/1600x900/CRICKET-IND-IPL-T20-LUCKNOW-RAJASTHAN-14_1683226460430_1683226479007.jpg",
    "runs": 259,
    "batAvg": 12.33,
    "batSR": 123.34,
    "highScore": 47,
    "wickets": 53,
    "bowlAvg": 27.57,
    "bowlER": 8.81,
    "bestBowling": "4/52"
  },
  {
    "name": "Ravi Bishnoi",
    "team": "LSG",
    "img": "https://www.mykhel.com/img/2023/04/ravi-bishnoi-csk-vs-lsg-ipl-2023-1680538808.jpg",
    "runs": 45,
    "batAvg": 4.5,
    "batSR": 68.19,
    "highScore": 13,
    "wickets": 72,
    "bowlAvg": 31.07,
    "bowlER": 8.22,
    "bestBowling": "3/24"
  },
  {
    "name": "Avesh Khan",
    "team": "LSG",
    "img": "https://www.livemint.com/lm-img/img/2023/04/11/1600x900/PTI04-10-2023-000257B-0_1681225306120_1681225306120_1681225331142_1681225331142.jpg",
    "runs": 62,
    "batAvg": 20.67,
    "batSR": 167.57,
    "highScore": 19,
    "wickets": 87,
    "bowlAvg": 28.29,
    "bowlER": 9.12,
    "bestBowling": "4/24"
  },
  {
    "name": "Amit Mishra",
    "team": "LSG",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/357600/357677.6.jpg",
    "runs": 381,
    "batAvg": 11.91,
    "batSR": 90.94,
    "highScore": 31,
    "wickets": 174,
    "bowlAvg": 23.82,
    "bowlER": 7.38,
    "bestBowling": "5/17"
  },
  {
    "name": "Marcus Stoinis",
    "team": "LSG",
    "img": "https://cricketaddictor.com/wp-content/uploads/2023/04/Marcus-Stoinis-.jpg",
    "runs": 2026,
    "batAvg": 28.14,
    "batSR": 144.72,
    "highScore": 124,
    "wickets": 44,
    "bowlAvg": 32.93,
    "bowlER": 9.79,
    "bestBowling": "4/15"
  },
  {
    "name": "Prerak Mankad",
    "team": "LSG",
    "img": "https://www.livemint.com/lm-img/img/2023/05/13/1600x900/Prerak_Mankad_1683986227486_1683986227632.jpg",
    "runs": 97,
    "batAvg": 32.33,
    "batSR": 132.88,
    "highScore": 64,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "DJ Bravo",
    "team": "CSK",
    "img": "https://images.hindustantimes.com/img/2022/12/02/550x309/bravo-ipl-csk-ipl_1669971307700_1669971313149_1669971313149.jpg",
    "runs": 1560,
    "batAvg": 22.61,
    "batSR": 129.57,
    "highScore": 70,
    "wickets": 183,
    "bowlAvg": 23.83,
    "bowlER": 8.39,
    "bestBowling": "4/22"
  },
  {
    "name": "Suresh Raina",
    "team": "CSK",
    "img": "https://www.india.com/wp-content/uploads/2022/05/Suresh-Raina.jpg",
    "runs": 5528,
    "batAvg": 32.52,
    "batSR": 136.74,
    "highScore": 100,
    "wickets": 25,
    "bowlAvg": 44.72,
    "bowlER": 7.39,
    "bestBowling": "2/0"
  },
  {
    "name": "Moeen Ali",
    "team": "CSK",
    "img": "https://static.toiimg.com/thumb/msid-90387586,width-1280,height-720,resizemode-4/90387586.jpg",
    "runs": 1167,
    "batAvg": 22.02,
    "batSR": 139.77,
    "highScore": 93,
    "wickets": 41,
    "bowlAvg": 25.1,
    "bowlER": 7.23,
    "bestBowling": "4/26"
  },
  {
    "name": "Ambati Rayudu",
    "team": "CSK",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/320800/320864.4.jpg",
    "runs": 4348,
    "batAvg": 28.05,
    "batSR": 127.55,
    "highScore": 100,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Shivam Dube",
    "team": "CSK",
    "img": "https://images.hindustantimes.com/img/2022/04/01/1600x900/dube-bowling-csk_1648817810831_1648817816358.jpg",
    "runs": 1859,
    "batAvg": 30.48,
    "batSR": 143.67,
    "highScore": 95,
    "wickets": 5,
    "bowlAvg": 42.6,
    "bowlER": 10.31,
    "bestBowling": "2/15"
  },
  {
    "name": "Chris Gayle",
    "team": "PBKS",
    "img": "https://imgnew.outlookindia.com/public/uploads/articles/2020/10/14/Gayle-KXIP.jpg",
    "runs": 4965,
    "batAvg": 39.72,
    "batSR": 148.97,
    "highScore": 175,
    "wickets": 18,
    "bowlAvg": 40.5,
    "bowlER": 7.9,
    "bestBowling": "3/21"
  },
  {
    "name": "Rahul Chahar",
    "team": "PBKS",
    "img": "https://hindi.crictracker.com/wp-content/uploads/2022/04/Rahul-Chahar-1.png",
    "runs": 129,
    "batAvg": 8.06,
    "batSR": 104.04,
    "highScore": 25,
    "wickets": 75,
    "bowlAvg": 28.67,
    "bowlER": 7.72,
    "bestBowling": "4/27"
  },
  {
    "name": "Shahrukh Khan",
    "team": "PBKS",
    "img": "https://images1.livehindustan.com/uploadimage/library/2021/10/02/16_9/16_9_1/shahrukh_khan_1633152493.jpg",
    "runs": 732,
    "batAvg": 21.53,
    "batSR": 149.09,
    "highScore": 58,
    "wickets": 1,
    "bowlAvg": 28,
    "bowlER": 9.33,
    "bestBowling": "1/13"
  },
  {
    "name": "Jitesh Sharma",
    "team": "PBKS",
    "img": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/339200/339220.3.jpg",
    "runs": 991,
    "batAvg": 25.41,
    "batSR": 157.06,
    "highScore": 85,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Jonny Bairstow",
    "team": "PBKS",
    "img": "https://static.toiimg.com/thumb/msid-91557569,width-1280,height-720,resizemode-4/91557569.jpg",
    "runs": 1674,
    "batAvg": 34.88,
    "batSR": 146.08,
    "highScore": 114,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Manish Pandey",
    "team": "DC",
    "img": "https://img.ap7am.com/bimg/cr-20230415en643ab8509d655.jpg",
    "runs": 3942,
    "batAvg": 29.42,
    "batSR": 121.52,
    "highScore": 114,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Mitchell Marsh",
    "team": "DC",
    "img": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/mitchell_marsh_ap-sixteen_nine.jpg?VersionId=t8n_8oc..sAGRw0QGCcMPqyWDaNJCLhh&size=690:388",
    "runs": 1292,
    "batAvg": 27.49,
    "batSR": 142.93,
    "highScore": 117,
    "wickets": 37,
    "bowlAvg": 21.49,
    "bowlER": 8.52,
    "bestBowling": "4/25"
  },
  {
    "name": "Anrich Nortje",
    "team": "DC",
    "img": "https://static.india.com/wp-content/uploads/2023/05/Collage-Maker-06-May-2023-02-01-PM-8232.jpg",
    "runs": 49,
    "batAvg": 8.17,
    "batSR": 100,
    "highScore": 23,
    "wickets": 61,
    "bowlAvg": 27.16,
    "bowlER": 9.07,
    "bestBowling": "3/33"
  },
  {
    "name": "Mustafizur Rahman",
    "team": "DC",
    "img": "https://cdn-wp.thesportsrush.com/2022/04/b670508f-josh-inglis-16.jpg?w=3840&q=60",
    "runs": 13,
    "batAvg": 6.5,
    "batSR": 54.17,
    "highScore": 8,
    "wickets": 65,
    "bowlAvg": 28.45,
    "bowlER": 8.13,
    "bestBowling": "4/29"
  },
  {
    "name": "Sarfraz Khan",
    "team": "DC",
    "img": "https://images.firstpost.com/wp-content/uploads/2022/05/Sarfaraz-Ahmed-PBKS-DC-IPL-2022-Sportzpics-640.jpg",
    "runs": 585,
    "batAvg": 22.5,
    "batSR": 130.58,
    "highScore": 67,
    "wickets": 0,
    "bowlAvg": null,
    "bowlER": null,
    "bestBowling": null
  },
  {
    "name": "Umran Malik",
    "team": "SRH",
    "img": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/umran_malik_2-sixteen_nine.jpg?VersionId=Xmbld4PGFQdgzd6ufcZIEzmBdAOuua5G",
    "runs": 23,
    "batAvg": 11.5,
    "batSR": 143.75,
    "highScore": 19,
    "wickets": 29,
    "bowlAvg": 26.62,
    "bowlER": 9.4,
    "bestBowling": "5/25"
  },
  {
    "name": "T Natarajan",
    "team": "SRH",
    "img": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/natarajan-ipl-1618672375.jpg",
    "runs": 3,
    "batAvg": 0,
    "batSR": 60,
    "highScore": 3,
    "wickets": 67,
    "bowlAvg": 30.12,
    "bowlER": 8.94,
    "bestBowling": "4/19"
  },
  {
    "name": "Heinrich Klaasen",
    "team": "SRH",
    "img": "https://static.toiimg.com/photo/msid-100336421/100336421.jpg",
    "runs": 1480,
    "batAvg": 40,
    "batSR": 169.73,
    "highScore": 105,
    "wickets": 0,
    "bowlAvg": 0,
    "bowlER": 0,
    "bestBowling": "0/0/-"
  },
  {
    "name": "Aiden Markram",
    "team": "SRH",
    "img": "https://www.sacricketmag.com/wp-content/uploads/2023/05/Aiden-Markram-catch-IPL-4-May-2023.jpg",
    "runs": 1440,
    "batAvg": 31.3,
    "batSR": 135.09,
    "highScore": 68,
    "wickets": 6,
    "bowlAvg": 45.67,
    "bowlER": 8.79,
    "bestBowling": "2/30"
  },
  {
    "name": "Marco Jansen",
    "team": "SRH",
    "img": "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/59fd5e32-7c70-4ad1-a095-67653a852a01/1f288d1f-f4bc-4125-89ad-54dad910d1b0/1280x720/match/image.jpg",
    "runs": 141,
    "batAvg": 12.82,
    "batSR": 109.31,
    "highScore": 34,
    "wickets": 36,
    "bowlAvg": 31.92,
    "bowlER": 9.41,
    "bestBowling": "3/17"
  }
];
export default cardData;
