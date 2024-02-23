import airforceOneImage from "./assets/airforce-one.png";
import airforceOneImage2 from "./assets/airforce-one-2.png";
import airforceOneImage3 from "./assets/airforce-one-3.png";
import airforceOneImage4 from "./assets/airforce-one-4.png";
import productOneImage from "./assets/image-product-1.jpg";
import productTwoImage from "./assets/image-product-2.jpg";
import productThreeImage from "./assets/image-product-3.jpg";
import productFourImage from "./assets/image-product-4.jpg";
import nikeLowDunkImage from "./assets/nike-low-dunk.png";
import nikeLowDunkImage2 from "./assets/nike-low-dunk-2.png";
import nikeProImage from "./assets/nike-pro.png";
import nikeProImage1 from "./assets/nike-pro-1.png";
import nikeProImage2 from "./assets/nike-pro-2.png";
import nikeProImage3 from "./assets/nike-pro-3.png";
import nikeSuperImage from "./assets/nike-super.png";
import nikeSuperImage2 from "./assets/nike-super-2.png";
import nikeSuperImage3 from "./assets/nike-super-3.png";
import nikeSuperImage4 from "./assets/nike-super-4.png";
import offwhiteImage from "./assets/offwhite.png";
import offwhiteImage1 from "./assets/offwhite-1.png";
import offwhiteImage2 from "./assets/offwhite-2.png";
import offwhiteImage3 from "./assets/offwhite-3.png";
import dgImage from "./assets/d&g.png";
import dgImage2 from "./assets/d&g-2.png";
import dgImage3 from "./assets/d&g-3.png";
import dgImage4 from "./assets/d&g-4.png";

const shoeProducts = [
  {
    id: "p1",
    image: productOneImage,
    title: "Fall Limited ",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$300.00",
    otherImages: [
      productOneImage,
      productTwoImage,
      productThreeImage,
      productFourImage,
    ],
  },
  {
    id: "p2",
    image: airforceOneImage,
    title: "Air Force 1",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$125.00",
    otherImages: [
      airforceOneImage,
      airforceOneImage2,
      airforceOneImage3,
      airforceOneImage4,
    ],
  },
  {
    id: "p3",
    image: nikeLowDunkImage,
    title: "Nike Low Dunk",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$195.00",
    otherImages: [nikeLowDunkImage, nikeLowDunkImage2],
  },
  {
    id: "p4",
    image: nikeProImage,
    title: "Nike Pro",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$200.00",
    otherImages: [nikeProImage, nikeProImage1, nikeProImage2, nikeProImage3],
  },
  {
    id: "p5",
    image: nikeSuperImage,
    title: "Nike Super",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$124.00",
    otherImages: [
      nikeSuperImage,
      nikeSuperImage2,
      nikeSuperImage3,
      nikeSuperImage4,
    ],
  },
  {
    id: "p6",
    image: offwhiteImage,
    title: "Offwhite ",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$198.00",
    otherImages: [
      offwhiteImage,
      offwhiteImage1,
      offwhiteImage2,
      offwhiteImage3,
    ],
  },
  {
    id: "p7",
    image: dgImage,
    title: "D&G",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    price: "$250.00",
    discount: "50%",

    discountedPrice: "$220.00",
    otherImages: [dgImage, dgImage2, dgImage3, dgImage4],
  },
];

export default shoeProducts;
