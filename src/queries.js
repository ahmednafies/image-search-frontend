import { useQuery } from "react-query";

function getSuggestions() {
  return {
    products: [
      {
        imageUrl: "https://picsum.photos/200/300?1",
        url: "https://google.com",
        id: 1,
      },
      {
        imageUrl: "https://picsum.photos/200/300?2",
        url: "https://google.com",
        id: 2,
      },
      {
        imageUrl: "https://picsum.photos/200/300?3",
        url: "https://google.com",
        id: 3,
      },
      {
        imageUrl: "https://picsum.photos/200/300?4",
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
