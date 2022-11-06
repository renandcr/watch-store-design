import IMAGE_ONE from "../../../assets/images/carousel/modelo-relogio-um.png";
import IMAGE_FOUR from "../../../assets/images/carousel/modelo-relogio-quatro.jpg";
import IMAGE_FIVE from "../../../assets/images/carousel/modelo-relogio-cinco.jpg";
import IMAGE_EIGHT from "../../../assets/images/carousel/modelo-relogio-onze.webp";
import IMAGE_NINE from "../../../assets/images/carousel/modelo-relogio-doze.webp";
import IMAGE_THIRTEEN from "../../../assets/images/carousel/modelo-relogio-dezessete.jpg";
import IMAGE_FIFTEEN from "../../../assets/images/carousel/modelo-relogio-dezenove.webp";
import IMAGE_SIXTEEN from "../../../assets/images/carousel/modelo-relogio-vinte.jpg";
import IMAGE_EIGHTEEN from "../../../assets/images/carousel/modelo-relogio-vinteDois.jpg";

export interface IDbImages {
  image: string;
}

export const dbImages: Array<IDbImages> = [
  { image: IMAGE_SIXTEEN },
  { image: IMAGE_ONE },
  { image: IMAGE_FIVE },
  { image: IMAGE_FOUR },
  { image: IMAGE_EIGHTEEN },
  { image: IMAGE_THIRTEEN },
  { image: IMAGE_EIGHT },
  { image: IMAGE_FIFTEEN },
  { image: IMAGE_NINE },
];

const handleDragStart = (e: any) => e.preventDefault();

export const items = [
  <div className="slide-image-container">
    <img
      src={dbImages[1].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
    <img
      src={dbImages[2].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
  </div>,
  <div className="slide-image-container">
    <img
      src={dbImages[4].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
    <img
      src={dbImages[7].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
  </div>,
  <div className="slide-image-container">
    <img
      className="whole-image"
      src={dbImages[0].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
  </div>,
  <div className="slide-image-container">
    <img
      src={dbImages[5].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
    <img
      src={dbImages[6].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
  </div>,
  <div className="slide-image-container">
    <img
      src={dbImages[3].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
    <img
      src={dbImages[8].image}
      onDragStart={handleDragStart}
      alt="Imagem ilustrativa de um modelo usando relógio"
    />
  </div>,
];
