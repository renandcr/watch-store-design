import image_one from "../../../assets/images/cards/one.jpg";
import image_two from "../../../assets/images/cards/two.jpg";
import image_three from "../../../assets/images/cards/three.jpg";
import image_four from "../../../assets/images/cards/four.jpg";
import image_five from "../../../assets/images/cards/five.jpg";
import image_six from "../../../assets/images/cards/six.jpg";
import image_seven from "../../../assets/images/cards/seven.jpg";
import image_eight from "../../../assets/images/cards/eight.jpg";
import image_nine from "../../../assets/images/cards/nine.jpg";
import image_ten from "../../../assets/images/cards/ten.jpg";
import image_eleven from "../../../assets/images/cards/eleven.webp";
import image_twelve from "../../../assets/images/cards/twelve.webp";
import image_thirteen from "../../../assets/images/cards/thirteen.webp";
import image_fourteen from "../../../assets/images/cards/fourteen.webp";
import image_fifteen from "../../../assets/images/cards/fifteen.webp";
import image_sixteen from "../../../assets/images/cards/sixteen.webp";
import image_seventeen from "../../../assets/images/cards/seventeen.webp";
import image_eighteen from "../../../assets/images/cards/eighteen.webp";
import image_nineteen from "../../../assets/images/cards/nineteen.webp";
import image_twenty from "../../../assets/images/cards/twenty.webp";

export interface IDbProducts {
  readonly id: number;
  readonly img: string;
  readonly description: string;
  readonly price: number;
  units: number;
  genre: string;
}

export const dbProducts: Array<IDbProducts> = [
  {
    id: 1,
    img: image_one,
    description: "Relógio Masculino Diesel DZ4360",
    price: 2349.9,
    units: 1,
    genre: "male",
  },
  {
    id: 2,
    img: image_two,
    description: "Relógio Masculino Tommy Hilfiger 179177",
    price: 6128,
    units: 1,
    genre: "male",
  },
  {
    id: 3,
    img: image_three,
    description: "Relógio Masculino Tommy Hilfiger 1791615",
    price: 1476,
    units: 1,
    genre: "male",
  },
  {
    id: 4,
    img: image_four,
    description: "Relógio Masculino Tommy Hilfiger 179165",
    price: 2429,
    units: 1,
    genre: "male",
  },
  {
    id: 5,
    img: image_five,
    description: "Relógio Masculino Hugo Boss 1513816",
    price: 1998.8,
    units: 1,
    genre: "male",
  },
  {
    id: 6,
    img: image_six,
    description: "Relógio Masculino Hugo Boss 1513837",
    price: 2355.75,
    units: 1,
    genre: "male",
  },
  {
    id: 7,
    img: image_seven,
    description: "Relógio Masculino Hugo Boss 1513805",
    price: 1959,
    units: 1,
    genre: "male",
  },
  {
    id: 8,
    img: image_eight,
    description: "Relógio Masculino Diesel DZ4318",
    price: 3895,
    units: 1,
    genre: "male",
  },
  {
    id: 9,
    img: image_nine,
    description: "Relógio Masculino Diesel DZ4338",
    price: 2399.55,
    units: 1,
    genre: "male",
  },
  {
    id: 10,
    img: image_ten,
    description: "Relógio Masculino Diesel DZ4282",
    price: 3049,
    units: 1,
    genre: "male",
  },

  /******Female******/

  {
    id: 11,
    img: image_eleven,
    description: "Relógio Lacoste Feminino Borracha Brana 2001244",
    price: 890,
    units: 1,
    genre: "female",
  },
  {
    id: 12,
    img: image_twelve,
    description: "Relógio Tommy Hilfiger Feminino Aço 1782554",
    price: 1790,
    units: 1,
    genre: "female",
  },
  {
    id: 13,
    img: image_thirteen,
    description: "Relógio MVMT Feminino Couro Cinza 28000219-D",
    price: 799,
    units: 1,
    genre: "female",
  },
  {
    id: 14,
    img: image_fourteen,
    description: "Relógio Tommy Hilfiger Feminino Aço Rosé 1782514",
    price: 2490.75,
    units: 1,
    genre: "female",
  },
  {
    id: 15,
    img: image_fifteen,
    description:
      "Relógio Tommy Hilfiger Feminino Aço Prateado e Dourado 1782524",
    price: 3890.9,
    units: 1,
    genre: "female",
  },
  {
    id: 16,
    img: image_sixteen,
    description: "Relógio Boss Feminino Aço Dourado 1502677",
    price: 3280.9,
    units: 1,
    genre: "female",
  },
  {
    id: 17,
    img: image_seventeen,
    description: "Relógio Guess Feminino Aço Dourado GW0402L2 03 ATM",
    price: 4280.9,
    units: 1,
    genre: "female",
  },
  {
    id: 18,
    img: image_eighteen,
    description: "Relógio Calvin Klein Feminino Aço Rosé 25200125",
    price: 1090,
    units: 1,
    genre: "female",
  },
  {
    id: 19,
    img: image_nineteen,
    description: "Relógio Tommy Hilfiger Feminino Aço Prateado e Rosé 1782298",
    price: 2390.8,
    units: 1,
    genre: "female",
  },
  {
    id: 20,
    img: image_twenty,
    description: "Relógio Lacoste Feminino Couro Bordô 2001256",
    price: 990,
    units: 1,
    genre: "female",
  },
];
