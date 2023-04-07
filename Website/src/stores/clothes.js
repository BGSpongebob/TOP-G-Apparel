import { defineStore } from 'pinia'

export const useClothesStore = defineStore('clothes', () => {
  const ages = {
    "adults": "Възръстни",
    "kids": "Деца"
  }
  const genders = {
    "men": "Мъже",
    "women": "Жени",
    "unisex": "Унисекс"
  }
  const clothes_sizes = [
    "XS", "S", "M", "L", "XL", "XXL" 
  ]
  const shoe_sizes = {
    "men": [
      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48
    ],
    "women": [
      34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44
    ],
    "kids": [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ]
  }
  const brands = [
    "Nike", "Adidas", "Puma", "New Balance", "Umbro", "Teodor"
  ]
  const categories = {
    "t-shirts": "Тениски", 
    "shirts": "Ризи", 
    "jeans": "Дънки",
    "jackets": "Якета"
  }
  const clothes = [
    {
      "id": 1,
      "name": "NEW BALANCE ТЕНИСКА Accelerate Short Sleeve",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "New Balance",
      "sizes": [
        "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/MT23222-MIB_w_800_800px.jpg"
      ],
      "price": 35.99,
      "quantity": 10
    },
    {
      "id": 2,
      "name": "UMBRO ТЕНИСКА BIG LOGO COTTON TEE",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Umbro",
      "sizes": [
        "S", "M"
      ],
      "images": [
        "/images/clothes/UMA223M801-3C_w_800_800px.jpg"
      ],
      "price": 17.99,
      "quantity": 10
    },
    {
      "id": 3,
      "name": "NIKE ТЕНИСКА CFC M NK SWSH CL TEE",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Nike",
      "sizes": [
        "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/DM8557-252_w_800_800px.jpg"
      ],
      "price": 47.99,
      "quantity": 10
    },
    {
      "id": 4,
      "name": "СИНЯ ВТАЛЕНА РИЗА МЕЛАНЖ",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Teodor",
      "sizes": [
        "S", "XL"
      ],
      "images": [
        "/images/clothes/kdg08875.jpg",
        "/images/clothes/001-sinya-vtalena-riza-melanzh-44458-56779_1.jpg",
      ],
      "price": 62.99,
      "quantity": 10
    },
    {
      "id": 5,
      "name": "СИЛНО ВТАЛЕНА СТРЕЧ РИЗА БОРДО",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Teodor",
      "sizes": [
        "S", "M", "L"
      ],
      "images": [
        "/images/clothes/001-silno-vtalena-strech-riza-bordo-44473-57336_1.jpg",
        "/images/clothes/002-silno-vtalena-strech-riza-bordo-44473-13214_1.jpg"
      ],
      "price": 69.99,
      "quantity": 10
    },
    {
      "id": 6,
      "name": "СРЕДНО СИНИ ДЪНКИ СЪС ШИРИТ И БРОДЕРИЯ ЛОГО",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Teodor",
      "sizes": [
        30, 32, 33, 34, 36, 38, 40
      ],
      "images": [
        "/images/clothes/KDG00676_1_1.jpg",
        "/images/clothes/KDG00675_1_1.jpg",
      ],
      "price": 129.99,
      "quantity": 10
    },
    {
      "id": 7,
      "name": "СИЛНО ВТАЛЕНИ СИВИ ДЪНКИ С МЕТАЛНО ЛОГО",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Teodor",
      "sizes": [
        29, 30, 32, 33, 34, 36
      ],
      "images": [
        "/images/clothes/KDG00023_1.jpg",
        "/images/clothes/KDG00022_1_1.jpg",
      ],
      "price": 149.99,
      "quantity": 10
    },
    {
      "id": 8,
      "name": "Мъжко яке. Ombre Leather",
      "gender": "men",
      "age": "adults",
      "category": "",
      "brand": "Ombre",
      "sizes": [
        "S", "M", "L"
      ],
      "images": [
        "/images/clothes/13-cb-6d87af01120247_6.jpg",
        "/images/clothes/13-76-a384cfb2120247_5.jpg"
      ],
      "price": 101.14,
      "quantity": 10
    },
    {
      "id": 9,
      "name": "LUSSARI ТЕНИСКА BASIC LOUNGE TSHIRT",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "Ombre",
      "sizes": [
        "XS", "S", "M", "L"
      ],
      "images": [
        "/images/clothes/SSA231F801-60_w_800_800px.jpg",
        "/images/clothes/SSA231F801-60_1_w_800_800px.jpg"
      ],
      "price": 34.99,
      "quantity": 10
    },
    {
      "id": 10,
      "name": "Тениска Calvin Klein Jeans",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "Calvin Klein",
      "sizes": [
        "XSS", "XS", "S", "M", "L", "XL", "XL"
      ],
      "images": [
        "/images/clothes/722330437b12967c138a87aa99d4f881.png",
        "/images/clothes/8bc0cb27e08d52e0fab12e219ef93118.png"
      ],
      "price": 34.99,
      "quantity": 10
    },
  ]

  return { ages, genders, clothes_sizes, shoe_sizes, brands, categories, clothes }
})
