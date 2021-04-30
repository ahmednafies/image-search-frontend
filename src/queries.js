import { useQuery } from "react-query";

async function getSuggestions() {
  return await {
    products: [
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        key: 1,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        key: 2,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        key: 3,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        key: 4,
      },
    ],
  };
}

export const useSuggestions = () => {
  const query = useQuery("suggestions", getSuggestions);
  return query;
};
