import { useQuery } from "react-query";

async function getSuggestions() {
  return await {
    products: [
      {
        image_url: "https://picsum.photos/200/300",
        product_link: "https://google.com",
        key: 1,
      },
      {
        image_url: "https://picsum.photos/200/300",
        product_link: "https://google.com",
        key: 2,
      },
      {
        image_url: "https://picsum.photos/200/300",
        product_link: "https://google.com",
        key: 3,
      },
      {
        image_url: "https://picsum.photos/200/300",
        product_link: "https://google.com",
        key: 4,
      },
      {
        image_url: "https://picsum.photos/200/300",
        product_link: "https://google.com",
        key: 5,
      },
    ],
  };
}

export const useSuggestions = () => {
  const query = useQuery("suggestions", getSuggestions);

  return query;
};
