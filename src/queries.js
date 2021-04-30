import { useQuery } from "react-query";

function getSuggestions() {
  return {
    products: [
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        id: 1,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        id: 2,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        id: 3,
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        url: "https://google.com",
        id: 4,
      },
    ],
  };
}

export const useSuggestions = () => {
  const query = useQuery("suggestions", getSuggestions);
  return query;
};
