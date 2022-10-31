import image_one from "../../../assets/images/one.jpg";
import image_two from "../../../assets/images/two.jpg";
import image_three from "../../../assets/images/three.jpg";
import image_four from "../../../assets/images/four.jpg";
import image_five from "../../../assets/images/five.jpg";
import image_six from "../../../assets/images/six.jpg";
import image_seven from "../../../assets/images/seven.jpg";
import image_eight from "../../../assets/images/eight.jpg";
import image_nine from "../../../assets/images/nine.jpg";
import image_ten from "../../../assets/images/ten.jpg";

export interface IDbProducts {
  readonly id: number;
  readonly img: string;
  readonly description: string;
  readonly price: number;
  units: number;
}

export const dbProducts: Array<IDbProducts> = [
  {
    id: 1,
    img: image_one,
    description: "Relógio Masculino Diesel DZ4360",
    price: 2349.9,
    units: 1,
  },
  {
    id: 2,
    img: image_two,
    description: "Relógio Masculino Tommy Hilfiger 179177",
    price: 6128,
    units: 1,
  },
  {
    id: 3,
    img: image_three,
    description: "Relógio Masculino Tommy Hilfiger 1791615",
    price: 1476,
    units: 1,
  },
  {
    id: 4,
    img: image_four,
    description: "Relógio Masculino Tommy Hilfiger 179165",
    price: 2429,
    units: 1,
  },
  {
    id: 5,
    img: image_five,
    description: "Relógio Masculino Hugo Boss 1513816",
    price: 1998.8,
    units: 1,
  },
  {
    id: 6,
    img: image_six,
    description: "Relógio Masculino Hugo Boss 1513837",
    price: 2355.75,
    units: 1,
  },
  {
    id: 7,
    img: image_seven,
    description: "Relógio Masculino Hugo Boss 1513805",
    price: 1959,
    units: 1,
  },
  {
    id: 8,
    img: image_eight,
    description: "Relógio Masculino Diesel DZ4318",
    price: 3895,
    units: 1,
  },
  {
    id: 9,
    img: image_nine,
    description: "Relógio Masculino Diesel DZ4338",
    price: 2399.55,
    units: 1,
  },
  {
    id: 10,
    img: image_ten,
    description: "Relógio Masculino Diesel DZ4282",
    price: 3049,
    units: 1,
  },
];
