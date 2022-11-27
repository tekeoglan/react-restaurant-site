export interface ProductInterface {
  title: string;
  description: string;
  image: string;
  leftButtonType: string;
  color: string;
}

export type ProductsType = ProductInterface[];

export const products: ProductsType = [
  {
    title: "steak with tomato",
    description:
      "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
    image: "assets/steak_with_tomato.png",
    leftButtonType: "red",
    color: "#A80000",
  },
  {
    title: "steak with potato",
    description:
      "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
    image: "assets/steak_with_potato.png",
    leftButtonType: "light_red",
    color: "#FF2B2B",
  },
  {
    title: "salmon salad",
    description:
      "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
    image: "assets/salmon_salad.png",
    leftButtonType: "green",
    color: "#00A839",
  },
  {
    title: "ckicken salad",
    description:
      "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
    image: "assets/chicken_salad.png",
    leftButtonType: "yellow",
    color: "#FFA800",
  },
];
