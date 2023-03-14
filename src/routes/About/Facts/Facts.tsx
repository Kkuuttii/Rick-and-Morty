import "./Facts.css";
import Carousel from "../../../components/Slider/Slider";
import FactCard from "../../../components/FactCard/FactCard";
import fact1 from "../../../images/facts/fact1.png";
import fact2 from "../../../images/facts/fact2.png";
import fact3 from "../../../images/facts/fact3.png";
import fact4 from "../../../images/facts/fact4.png";
import fact5 from "../../../images/facts/fact5.png";
import fact6 from "../../../images/facts/fact6.png";
import fact7 from "../../../images/facts/fact7.png";
import fact8 from "../../../images/facts/fact8.png";
import fact9 from "../../../images/facts/fact9.png";

import { factTexts } from "../../../constants/about";

const hotelCards = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    title: "Studio Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 50/Day",
    features: ["Free Wifi", "Free breakfast"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Deluxe Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 80/Day",
    features: ["Free Wifi", "Free breakfast"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "King Deluxe Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 150/Day",
    features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
];

function Facts() {
  const factImages = [
    fact1,
    fact2,
    fact3,
    fact4,
    fact5,
    fact6,
    fact7,
    fact8,
    fact9,
  ];

  let slidesCards = factTexts.map((item, index) => {
    return <FactCard text={item} image={factImages[index]} />;
  });

  return (
    <div className="facts" id="readmore">
      <h2>Fun facts</h2>
      <Carousel slides={slidesCards} {...hotelCards} className="facts-slider" />
    </div>
  );
}
export default Facts;
