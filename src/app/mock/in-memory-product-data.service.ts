import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {wishList} from "../model/wishList";


@Injectable()
export class InMemoryProductDataService implements InMemoryDbService {

  createDb() {
    let products = [
      {
        id: 1,
        name: 'Aspire Ultrabook Laptop',
        newPrice: 230.00,
        oldPrice: 241.00,
        discount: -5,
        rate: 4,
        img: "../assets/image/product/macbook_air_1-200x200.jpg",
        categoryId: 11,
        rewardPoints: 600,
        available: 'In Stock',
        tax: 95,
        code: 'product17',
        availableOptions: {color: ['red', 'pink', 'blue'], quantity: 2},
        brand: {id: 1, name: 'Asus'},

      },
      {
        id: 2,
        name: 'Strategies for Acquiring Your Own Laptop',
        newPrice: 1400.00,
        oldPrice: 1900.00,
        discount: 26,
        rate: 0,
        img: "../assets/image/product/macbook_pro_1-200x200.jpg",
        categoryId: 11,
        rewardPoints: 500,
        available: 'In Stock',
        tax: 95,
        code: 'product17',
        availableOptions: {color: ['red', 'green', 'blue'], quantity: 3},
        brand: {id: 2, name: 'Samsung'},
      },
      {
        id: 3,
        name: 'Laptop Silver black',
        newPrice: 1142.00,
        oldPrice: 1202.00,
        discount: 5,
        rate: 0,
        img: "../assets/image/product/macbook_air_1-200x200.jpg",
        categoryId: 11,
        rewardPoints: 700,
        available: 'In Stock',
        tax: 95,
        code: 'product17',
        availableOptions: {color: ['red', 'yellow', 'blue'], quantity: 1},
        brand: {id: 3, name: 'Apple'},
      },
      {
        id: 4,
        name: 'Ideapad Yoga 13-59341124 Laptop',
        newPrice: 2.00,
        oldPrice: 0,
        discount: 0,
        rate: 4,
        img: "../assets/image/product/macbook_1-200x200.jpg",
        categoryId: 11,
        rewardPoints: 400,
        available: 'In Stock',
        tax: 95,
        code: 'product17',
        availableOptions: {color: ['red', 'navy', 'blue'], quantity: 2},
        brand: {id: 3, name: 'apple'},
      },
      {
        id: 5,
        name: 'Hp Pavilion G6 2314ax Notebok Laptop',
        newPrice: 122,
        oldPrice: 0,
        discount: 0,
        rate: 0,
        img: "../assets/image/product/ipod_shuffle_1-200x200.jpg",
        categoryId: 11,
        rewardPoints: 200,
        available: 'In Stock',
        tax: 95,
        code: 'product18',
        availableOptions: {color: ['red', 'brwon', 'blue'], quantity: 2},
        brand: {id: 2, name: 'Samsung'},
      },
      {
        id: 6,
        name: 'Samsung Galaxy S4',
        newPrice: 62.00,
        oldPrice: 122.00,
        discount: 50,
        rate: 0,
        img: "../assets/image/product/ipod_touch_1-200x200.jpg",
        categoryId: 55,
        rewardPoints: 500,
        available: 'In Stock',
        tax: 95,
        code: 'product18',
        availableOptions: {color: ['red', 'black', 'blue'], quantity: 2},
        brand: {id: 3, name: 'Apple'},
      },
      {
        id: 7,
        name: 'Hair Care Cream for Men',
        newPrice: 134,
        oldPrice: 85,
        discount: 40,
        rate: 5,
        img: "../assets/image/product/iphone_6-200x200.jpg",
        categoryId: 22,
        rewardPoints: 400,
        available: 'In Stock',
        tax: 95,
        code: 'product16',
        availableOptions: {color: ['red', 'orange', 'blue'], quantity: 2},
        brand: {id: 2, name: 'Samsung'},
      },
      {
        id: 8,
        name: 'Hair Care Products',
        newPrice: 66.80,
        oldPrice: 90.80,
        discount: 27,
        rate: 1,
        img: "../assets/image/product/nikon_d300_5-200x200.jpg",
        categoryId: 22,
        rewardPoints: 100,
        available: 'In Stock',
        tax: 95,
        code: 'product15',
        availableOptions: {color: ['red', 'cream', 'blue'], quantity: 2},
        brand: {id: 3, name: 'Apple'},
      },
      {
        id: 9,
        name: 'Bed Head Foxy Curls Contour Cream',
        newPrice: 88,
        oldPrice: 0,
        discount: 0,
        rate: 0,
        img: "../assets/image/product/nikon_d300_4-200x200.jpg",
        categoryId: 22,
        rewardPoints: 50,
        available: 'In Stock',
        tax: 95,
        code: 'product9',
        availableOptions: {color: ['red', 'lightBlue', 'blue'], quantity: 2},
        brand: {id: 2, name: 'samsung'},
      },
      {
        id: 10,
        name: 'Shower Gel Perfume for Women',
        newPrice: 95.00,
        oldPrice: 99.00,
        discount: 40,
        rate: 0,
        img: "../assets/image/product/macbook_5-200x200.jpg",
        categoryId: 17,
        rewardPoints: 25,
        available: 'In Stock',
        tax: 95,
        code: 'product10',
        availableOptions: {color: ['red', 'lightGreen', 'blue'], quantity: 2},
        brand: {id: 3, name: 'apple'},
      },
      {
        id: 11,
        name: 'Perfumes for Women',
        newPrice: 85.0,
        oldPrice: 0,
        discount: 0,
        rate: 5,
        img: "../assets/image/product/macbook_4-200x200.jpg",
        categoryId: 17,
        rewardPoints: 35,
        available: 'In Stock',
        tax: 95,
        code: 'product11',
        availableOptions: {color: ['red', 'white', 'blue'], quantity: 2},
        brand: {id: 2, name: 'samsung'},
      },
      {
        id: 12,
        name: 'Make Up for Naturally Beautiful Better',
        newPrice: 123,
        oldPrice: 95,
        discount: 25,
        rate: 0,
        img: "../assets/image/product/macbook_3-200x200.jpg",
        categoryId: 17,
        rewardPoints: 55,
        available: 'In Stock',
        tax: 95,
        code: 'product12',
        availableOptions: {color: ['red', 'silver', 'blue'], quantity: 2},
        brand: {id: 3, name: 'apple'},
      },
      {
        id: 13,
        name: 'Pnina Tornai Perfume',
        newPrice: 110,
        oldPrice: 0,
        discount: 0,
        rate: 0,
        img: "../assets/image/product/macbook_2-200x200.jpg",
        categoryId: 17,
        rewardPoints: 65,
        available: 'In Stock',
        tax: 95,
        code: 'product13',
        availableOptions: {color: ['red', 'gray', 'blue'], quantity: 2},
        brand: {id: 2, name: 'samsung'},
      },
      {
        id: 14,
        name: 'Aspire Ultrabook Laptop',
        newPrice: 230.00,
        oldPrice: 241.00,
        discount: -5,
        rate: 4,
        img: "../assets/image/product/macbook_air_1-200x200.jpg",
        categoryId: 54,
        rewardPoints: 600,
        available: 'In Stock',
        tax: 95,
        code: 'product14',
        availableOptions: {color: ['red', 'pink', 'blue'], quantity: 2},
        brand: {id: 1, name: 'asus'},

      },
      {
        id: 15,
        name: 'IPod',
        newPrice: 230.00,
        oldPrice: 241.00,
        discount: -5,
        rate: 4,
        img: "../assets/image/product/ipod_classic_1-200x200.jpg",
        categoryId: 16,
        rewardPoints: 450,
        available: 'Pre-order',
        tax: 95,
        code: 'product15',
        availableOptions: {color: ['black', 'pink', 'blue'], quantity: 5},
        brand: {id: 3, name: 'Apple'},

      },
    ]

    let reviews = [
      {
        id: 1,
        author: 'harvey',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '20/01/2016',
        rate: 4,
        productId: 1
      },
      {
        id: 2,
        author: 'Andrson',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '20/02/2016',
        rate: 3,
        productId: 1
      },
      {
        id: 2,
        author: 'John',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '2018.02.21',
        rate: 2,
        productId: 2
      },
      {
        id: 3,
        author: 'Sara',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '2018.02.21',
        rate: 3,
        productId: 3
      },
      {
        id: 4,
        author: 'Anderson',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '2018.02.21',
        rate: 4,
        productId: 4
      },
      {
        id: 5,
        author: 'Tomas',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '2018.02.21',
        rate: 5,
        productId: 5
      },
      {
        id: 6,
        author: 'Anna',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: '2018.02.21',
        rate: 6,
        productId: 6
      },

    ];

    let thumbnails = [
      {
        id: 1,
        smallSrcImg: '../assets/image/product/macbook_air_1-350x350.jpg',
        bigSrcImg: '../assets/image/product/macbook_air_1-500x500.jpg',
        alt: 'Laptop Silver black',
        productId: 1
      },
      {
        id: 2,
        smallSrcImg: '../assets/image/product/macbook_air_2-350x350.jpg',
        bigSrcImg: '../assets/image/product/macbook_air_2-500x500.jpg',
        alt: 'Laptop Silver black',
        productId: 1
      },
      {
        id: 3,
        smallSrcImg: '../assets/image/product/macbook_air_3-350x350.jpg',
        bigSrcImg: '../assets/image/product/macbook_air_3-500x500.jpg',
        alt: 'Laptop Silver black',
        productId: 1
      },
      {
        id: 4,
        smallSrcImg: '../assets/image/product/macbook_air_4-350x350.jpg',
        bigSrcImg: '../assets/image/product/macbook_air_4-500x500.jpg',
        alt: 'Laptop Silver black',
        productId: 1
      },
      {id: 5, smallSrcImg: '', bigSrcImg: '', alt: 'product5', productId: 5},
      {id: 6, smallSrcImg: '', bigSrcImg: '', alt: 'product6', productId: 6}

    ];

    let categories = [
      {id: 1, parentId: 0, name: "Electronics"},
      {id: 11, parentId: 1, name: "Laptops"},
      {id: 12, parentId: 1, name: "Desktops"},
      {id: 13, parentId: 1, name: "Cameras"},
      {id: 14, parentId: 1, name: "Mobile"},
      {id: 15, parentId: 1, name: "TV & Home Audio"},
      {id: 16, parentId: 1, name: "MP3 Players"},

      {id: 2, parentId: 0, name: "Health & Beauty"},
      {id: 17, parentId: 58, name: "Perfumes"},
      {id: 18, parentId: 58, name: "Makeup"},
      {id: 19, parentId: 57, name: "Sun Care"},
      {id: 20, parentId: 57, name: "Skin Care"},
      {id: 21, parentId: 58, name: "Eye Care"},
      {id: 22, parentId: 58, name: "Hair Care"},

      {id: 3, parentId: 0, name: "Watches"},
      {id: 23, parentId: 3, name: "Men's Watches"},
      {id: 24, parentId: 3, name: "Women's Watches"},
      {id: 25, parentId: 3, name: "Kids' Watches"},
      {id: 26, parentId: 3, name: "Accessories"},


      {id: 4, parentId: 0, name: "Shoes"},
      {id: 27, parentId: 4, name: "Men"},
      {id: 28, parentId: 4, name: "Women"},
      {id: 29, parentId: 4, name: "Girls"},
      {id: 30, parentId: 4, name: "Boys"},
      {id: 31, parentId: 4, name: "Baby"},
      {id: 32, parentId: 4, name: "Accessories"},


      {id: 5, parentId: 0, name: "Clothing"},
      {id: 33, parentId: 5, name: "Men"},
      {id: 34, parentId: 5, name: "Women"},
      {id: 35, parentId: 5, name: "Girls"},
      {id: 36, parentId: 5, name: "Boys"},
      {id: 37, parentId: 5, name: "Baby"},
      {id: 38, parentId: 5, name: "Accessories"},


      {id: 6, parentId: 0, name: "Kids & Babies"},
      {id: 39, parentId: 6, name: "Toys"},
      {id: 40, parentId: 6, name: "Games"},
      {id: 41, parentId: 6, name: "Puzzles"},
      {id: 42, parentId: 6, name: "Hobbies"},
      {id: 43, parentId: 6, name: "Stollers"},


      {id: 7, parentId: 0, name: "Jewellery"},
      {id: 44, parentId: 7, name: "Silver"},
      {id: 45, parentId: 7, name: "Gold"},
      {id: 46, parentId: 7, name: "Diamond"},
      {id: 47, parentId: 7, name: "Pearl"},

      {id: 8, parentId: 0, name: "Home & Garden"},
      {id: 48, parentId: 8, name: "Bedding"},
      {id: 49, parentId: 8, name: "Food"},
      {id: 50, parentId: 8, name: "Furniture"},
      {id: 51, parentId: 8, name: "Kitchen"},
      {id: 52, parentId: 8, name: "Lighting"},
      {id: 53, parentId: 8, name: "Tools"},

      {id: 54, parentId: 11, name: "mini-Laptops"},
      {id: 55, parentId: 14, name: "Phones"},
      {id: 56, parentId: 14, name: "Accessories"},

      {id: 57, parentId: 2, name: "Men's healthy"},
      {id: 58, parentId: 2, name: "Women's healthy"},

    ];

    let users = [
      {id: -1, firstname: 'sepideh', lastname: 'masoumi', username: 'sepi', password: '123456'}
    ];
    let usersInfo=[
      {id:-1,guid:'',firstname:'sepideh',lastname:'masoumi',expirationDate:new Date()}
      ];

    let shoppingCart = [{
      id: 1, userId: -1, quantity: 2, product: {
        id: 13,
        name: 'Pnina Tornai Perfume',
        newPrice: 110,
        oldPrice: 0,
        discount: 0,
        rate: 0,
        img: "../assets/image/product/macbook_2-200x200.jpg",
        categoryId: 17,
        rewardPoints: 65,
        available: 'In Stock',
        tax: 95,
        code: 'product16',
        availableOptions: {color: ['red', 'gray', 'blue'], quantity: 2},
        brand: {id: 13, name: 'samsung'},
      }
    }];
    let wishlist = [

      {
        id: 1, userId: -1, date: new Date(), product: {
        id: 13,
        name: 'Pnina Tornai Perfume',
        newPrice: 110,
        oldPrice: 0,
        discount: 0,
        rate: 0,
        img: "../assets/image/product/macbook_2-200x200.jpg",
        categoryId: 17,
        rewardPoints: 65,
        available: 'In Stock',
        tax: 95,
        code: 'product16',
        availableOptions: {color: ['red', 'gray', 'blue'], quantity: 2},
        brand: {id: 13, name: 'samsung'},
      }
      }
    ];
    let countries = [
      {id: 1, title: 'Australia'},
      {id: 2, title: 'Canada'},
      {id: 3, title: 'Denmark'},
      {id: 4, title: 'French'},
      {id: 5, title: 'Germany'},
      {id: 6, title: 'India'},
      {id: 7, title: 'Iran'},
      {id: 8, title: 'Italy'},
      {id: 9, title: 'Japan'},
      {id: 10, title: 'Russian'},
      {id: 11, title: 'Taiwan'},
      {id: 12, title: 'Turkey'},
      {id: 13, title: 'United States'}
    ];
    let states = [
      {id: 1, countryId: 1, title: 'sydney'},
      {id: 2, countryId: 1, title: 'melbourn'},
      {id: 3, countryId: 1, title: 'adelaide'},
      {id: 4, countryId: 2, title: 'montreal'},
      {id: 5, countryId: 2, title: 'toronto'},
      {id: 6, countryId: 2, title: 'rich monhill'},
      {id: 7, countryId: 2, title: 'vaugn'},
      {id: 8, countryId: 2, title: 'quebec'},
      {id: 9, countryId: 3, title: 'kolding'},
      {id: 10, countryId: 3, title: 'viborg'},
      {id: 11, countryId: 4, title: 'paris'},
      {id: 12, countryId: 4, title: 'lyon'},
      {id: 13, countryId: 4, title: 'marseille'},
      {id: 14, countryId: 5, title: 'frankfurt'},
      {id: 15, countryId: 6, title: 'dehli'},
      {id: 16, countryId: 6, title: 'mumbai'},
      {id: 17, countryId: 6, title: 'pune'},
      {id: 18, countryId: 7, title: 'tehran'},
      {id: 19, countryId: 7, title: 'kish'},
      {id: 20, countryId: 7, title: 'chabahar'},
      {id: 21, countryId: 8, title: 'milan'},
      {id: 22, countryId: 9, title: 'Tokyo'},
      {id: 23, countryId: 10, title: 'moscow'},
      {id: 24, countryId: 11, title: 'taipei'},
      {id: 25, countryId: 12, title: 'Istanbul'},
      {id: 26, countryId: 12, title: 'ankara'},
      {id: 27, countryId: 12, title: 'izmir'},
      {id: 28, countryId: 13, title: 'LA'},
      {id: 29, countryId: 13, title: 'california'},
      {id: 30, countryId: 13, title: 'boston'}
    ];
    let taxes = [
      {id: 1, stateId: 1, amount: .01},
      {id: 1, stateId: 2, amount: .02},
      {id: 1, stateId: 3, amount: .03},
      {id: 1, stateId: 4, amount: .04},
      {id: 1, stateId: 5, amount: .05},
      {id: 1, stateId: 6, amount: .06},
      {id: 1, stateId: 7, amount: .07},
      {id: 1, stateId: 8, amount: .08},
      {id: 1, stateId: 9, amount: .09},
      {id: 1, stateId: 10, amount: .10},
      {id: 1, stateId: 11, amount: .11},
      {id: 1, stateId: 12, amount: .12},
      {id: 1, stateId: 13, amount: .13},
      {id: 1, stateId: 14, amount: .14},
      {id: 1, stateId: 15, amount: .15},
      {id: 1, stateId: 16, amount: .16},
      {id: 1, stateId: 17, amount: .17},
      {id: 1, stateId: 18, amount: .18},
      {id: 1, stateId: 19, amount: .19},
      {id: 1, stateId: 20, amount: .20},
      {id: 1, stateId: 21, amount: .21},
      {id: 1, stateId: 22, amount: .22},
      {id: 1, stateId: 23, amount: .23},
      {id: 1, stateId: 24, amount: .24},
      {id: 1, stateId: 25, amount: .25},
      {id: 1, stateId: 26, amount: .26},
      {id: 1, stateId: 27, amount: .27},
      {id: 1, stateId: 28, amount: .28},
      {id: 1, stateId: 29, amount: .29},
      {id: 1, stateId: 30, amount: .30}
    ];


    return {products, reviews, thumbnails, categories, users, shoppingCart, wishlist, countries, states, taxes,usersInfo};
  }

  constructor() {
  }

}
