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
    "dresses": "Рокли",
    "jackets": "Якета"
  }
  const clothes = {
    1: {
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
    2: {
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
    3: {
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
    4: {
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
    5: {
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
    6: {
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
    7: {
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
    8: {
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
    9: {
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
    10: {
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
    11: {
      "name": "Дънки 'GREYS'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "LEVI'S",
      "sizes": [
        "24 x 30", "25 x 30", "25 x 32", "26 x 30", "26 x 32", "27 x 30", "27 x 32", "28 x 30"
      ],
      "images": [
        "/images/clothes/77129d508ab7b318adb18b1fbad6e933.png",
        "/images/clothes/10cc614c7501ac01447b2f7f5ea97a07.png"
      ],
      "price": 194.99,
      "quantity": 10
    },
    12: {
      "name": "Дънки 'VENEDA'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "ONLY",
      "sizes": [
        "S x 30", "S x 32", "S x 34", "M x 30", "M x 32", "L x 30", "L x 32", "XL x 30"
      ],
      "images": [
        "/images/clothes/84689af0ffc4fda190e4b239d1468da1.png",
        "/images/clothes/1b07e207539d85d95f2c1f3c62d5a9f1.png",
        "/images/clothes/ee6e03ca5366e9bb6033d1b98ee2c5f4.png"
      ],
      "price": 194.99,
      "quantity": 10
    },
    13: {
      "name": "Рокля 'Finna'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "YAS",
      "sizes": [
        "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/c51d41172949d3a2bb81fd0389c30597.png",
        "/images/clothes/f03e7b36ebd40cecb92b2b7476d96005.png",
        "/images/clothes/f72e34e49c1eb7183c836c8f28051c72.png"
      ],
      "price": 139.90,
      "quantity": 10
    },
    14: {
      "name": "Рокля тип риза 'BELLA'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "JDY",
      "sizes": [
        32, 34, 36, 38, 40, 42, 44
      ],
      "images": [
        "/images/clothes/690849da2e53764462516a54d07ead41.png",
        "/images/clothes/97bb66edaa27233335ecc94dfb89bec9.png",
        "/images/clothes/155ec167a3b1026876bcc8f948f95aa1.png"
      ],
      "price": 58.90,
      "quantity": 10
    },
    15: {
      "name": "Рокля 'ABIGAIL'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "ONLY",
      "sizes": [
        "XS", "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/d722e66945fb04d843f625e0b755e4ee.png",
        "/images/clothes/5df38da829e864fc38d7d9a6aaa2fcca.png",
        "/images/clothes/717294324754c7439b16f7fd19cb5c39.png"
      ],
      "price": 70.49,
      "quantity": 10
    },
    16: {
      "name": "Преходно яке 'Sophie'",
      "gender": "women",
      "age": "adults",
      "category": "",
      "brand": "YAS",
      "sizes": [
        "XS", "S", "M", "L", "XL", "XXL"
      ],
      "images": [
        "/images/clothes/82b4713a197ed12a67cbce7e2ee373ce.png",
        "/images/clothes/fc03f171c5a04d22973ec4eb61bcfb5e.png",
        "/images/clothes/f270f52deb8c3a241c773c47a77397e4.png"
      ],
      "price": 314.90,
      "quantity": 10
    },
    17: {
      "name": "Тениска 'FUTURA'",
      "gender": "men",
      "age": "kids",
      "category": "",
      "brand": "Nike",
      "sizes": [
        "XS", "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/914470535b76d73114231f65be22dc89.png",
        "/images/clothes/be4238f1a59f211392eba11e5c810f19.png",
      ],
      "price": 38.90,
      "quantity": 10
    },
    18: {
      "name": "Функционална тениска",
      "gender": "women",
      "age": "kids",
      "category": "",
      "brand": "Nike",
      "sizes": [
        "XS", "S", "M", "L", "XL"
      ],
      "images": [
        "/images/clothes/9e44bfeff3633559f426ffed09265675.png",
        "/images/clothes/f93149f00e606fec162f89d76b8232d8.png",
      ],
      "price": 37.90,
      "quantity": 10
    },
    19: {
      "name": "Дънки 'IZZA'",
      "gender": "men",
      "age": "kids",
      "category": "",
      "brand": "LMTD",
      "sizes": [
        "XS", "S", "M", "L"
      ],
      "images": [
        "/images/clothes/77f6800f44fc23ba6ddda36cd66df3f2.png",
        "/images/clothes/9525e268650f08ab1f9fd5e27ab5c482.png",
      ],
      "price": 69.90,
      "quantity": 10
    },
    20: {
      "name": "Дънки 'Bella'",
      "gender": "men",
      "age": "kids",
      "category": "",
      "brand": "Name It",
      "sizes": [
        116, 122, 128, 134, 140, 146, 152, 158, 164, 170, 176
      ],
      "images": [
        "/images/clothes/eacb5672684e3432c27bf3203dc9eb85.png",
        "/images/clothes/d53d7db902c7ba994588778ecc60d199.png",
      ],
      "price": 56.90,
      "quantity": 10
    }
  }

  function getItemById(id) {
    return clothes[id];
  }

  return { ages, genders, clothes_sizes, shoe_sizes, brands, categories, clothes, getItemById }
})
