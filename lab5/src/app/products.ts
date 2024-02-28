
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image:string[];
  link: string;
  rating: number;
  sum: number,
  cnt: number,
  category:string,
  like:number,
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large','https://object.pscloud.io/cms/cms/Photo/img_0_77_3123_8_1.jpg','https://object.pscloud.io/cms/cms/Photo/img_0_77_3123_10_1.jpg'],
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h99/hbf/64083553681438.jpg?format=gallery-medium','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI2LUiCDkojK_uybSOClUVfgFZOISG-MJPj0jYEDi9P2lM0B04','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe3Ichy0uQrGQk9nGpJE9URzb2ZQQNX2xYdF45mcnPAiC4jT8o'],
    link:'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-sinii-100657852/',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 3,
    name: 'Iphone Se',
    price: 299,
    description: 'Смартфон Apple iPhone SE 2022 64Gb черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYI4ECBgHOb7dnWL_oFUEc1TC8LqWGDOIJAS_ZjMbBCppRBDCn', ],
    link:'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  }, 
  {
    id: 4,
    name: 'Applephone',
    price: 255,
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693010535312'],
    link:'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 5,
    name: 'Xiaomis',
    price: 255,
    description: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
  id: 6,
  name: 'Apple iPhone 11',
  price: 1000,
  description: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
  image:['https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium'],
  link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
  rating:0, 
  sum: 0,
  cnt: 0,
  category:'phone',
  like:0
},
  {
    id: 7,
    name: 'Apple MacBook',
    price: 255,
    description: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },  {
    id: 8,
    name: 'Ноутбук HP ',
    price: 255,
    description: 'Ноутбук HP 15s-fq0017ci 9R257EA темно-серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 9,
    name: 'Lenovo IdeaPad 3',
    price: 255,
    description:'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 10,
    name: 'ASUS TUF Gaming ',
    price: 255,
    description: 'Ноутбук ASUS TUF Gaming F15 FX507ZC4-HN143 черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-large'],
    link:'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 11,
    name: 'Ноутбук Chuwi',
    price: 255,
    description: 'Ноутбук Chuwi GemiBook XPro 8G/256G серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc4/h7e/81272592072734.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/chuwi-gemibook-xpro-8g-256g-seryi-110855868/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 12,
    name: 'Ноутбук Chuwi ',
    price: 255,
    description: 'Ноутбук Chuwi GemiBook Plus 16G/512G GemiBook Plus 16G/512G серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hb5/h4b/84250325155870.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/chuwi-gemibook-plus-16g-512g-gemibook-plus-16g-512g-seryi-113974603/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 13,
    name: 'Телевизор LG ',
    price: 255,
    description: 'Телевизор LG 43UP76006LC 109 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h39/h73/64332873957406.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/lg-43up76006lc-109-sm-chernyi-101585668/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },
  {
    id: 14,
    name: 'Телевизор Yasin',
    price: 255,
    description: 'Телевизор Yasin 43G11 109 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/had/h96/68005513363486.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },  {
    id: 15,
    name: 'Телевизор Xiaomi',
    price: 255,
    description: 'Телевизор Xiaomi Mi TV A2 L55M7-EARU 140 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h66/h8c/68739062366238.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/xiaomi-mi-tv-a2-l55m7-earu-140-sm-chernyi-108790626/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },
  {
    id: 16,
    name: 'Телевизор LG',
    price: 1005,
    description: 'Телевизор LG 43LM5772PLA 109 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-large'],
    link:'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },
  {
    id: 17,
    name: 'Телевизор TCL',
    price: 905,
    description: 'Телевизор TCL 55P635 140 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h69/h74/66277655248926.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },
  {
    id: 18,
    name: 'Телевизор Samsung',
    price: 255,
    description: 'Телевизор Samsung UE55AU7100UXCE 140 см черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hcc/hea/64098823536670.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/samsung-ue55au7100uxce-140-sm-chernyi-101625121/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'TV',
    like:0,
  },
  {
    id: 19,
    name: 'Стиральная машина LG',
    price: 255,
    description: 'Стиральная машина LG F2J3NS0W белый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  }, {
    id: 20,
    name: 'Стиральная машина LG',
    price: 255,
    description: 'Стиральная машина LG F2J3NS0W белый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/ha7/haa/63752577843230.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/midea-mfn60-s1003-slim-belyi-100689168/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  }, {
    id: 21,
    name: 'Морозильник Leadbros',
    price: 255,
    description: 'Морозильник Leadbros BC/BD-217AT 217 л белый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h9d/h20/64348814868510.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/leadbros-bc-bd-217at-217-l-belyi-105632244/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  },{
    id: 22,
    name: 'Морозильник Leadbros',
    price: 255,
    description: 'Морозильник Almagreen BDBC 350 350 л серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h33/h5a/63898673053726.jpg?format=gallery-large'],
    link:'https://kaspi.kz/shop/p/almagreen-bdbc-350-350-l-seryi-102580193/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  },
  {
    id: 23,
    name: 'Морозильник Haier',
    price: 255,
    description: 'Морозильник Haier HCE200R 197 л белый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hf9/h71/80978627952670.jpg?format=gallery-large'],
    link:'https://kaspi.kz/shop/p/haier-hce200r-197-l-belyi-110605636/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  },
  {
    id: 24,
    name: 'Вытяжка Hansa',
    price: 255,
    description: 'Вытяжка Hansa OTP6233BH черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h7c/h4d/64032683261982.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/hansa-otp6233bh-chernyi-100571156/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'Home',
    like:0,
  },
];
