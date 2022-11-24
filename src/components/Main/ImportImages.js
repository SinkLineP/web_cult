import BirthOfVenus from "./Images/BirthOfVenus.png";
import LastSupper from "./Images/LastSupper.png";
import TheCreationOfAdam from "./Images/TheCreationOfAdam.png";
import AnatomyLesson from "./Images/AnatomyLesson.png";

export const cardOptions = [
  {
    src: BirthOfVenus,
    alt: "Рождение Венеры",
    title: "«Рождение Венеры»",
    author: "Сандро Боттичелли",
    salePrice: 2000000,
    price: 1000000,
    statusItem: "no-sold",
  },
  {
    src: LastSupper,
    alt: "Тайная вечеря",
    title: "«Тайная вечеря»",
    author: "Леонардо да Винчи",
    salePrice: 0,
    price: 1000000,
    statusItem: "no-sold",
  },
  {
    src: TheCreationOfAdam,
    alt: "Сотворение Адама",
    title: "«Сотворение Адама»",
    author: "Микеланджело",
    salePrice: 6000000,
    price: 5000000,
    statusItem: "no-sold",
  },
  {
    src: AnatomyLesson,
    alt: "Урок анатомии",
    title: "«Урок анатомии»",
    author: "Рембрандт",
    salePrice: 0,
    price: 1000000,
    statusItem: "sold",
  }
]