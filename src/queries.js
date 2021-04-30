import { useQuery } from "react-query";
import axios from "axios";
import { data } from "autoprefixer";
const API_URL = "https://315654057c3e.ngrok.io/image-search/";

async function getSuggestions(image) {
  const response = await axios({
    url: API_URL,
    method: "post",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ image: image.split(",")[1] }),
  });
  return response.data;

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

export const useSuggestions = (image) => {
  const query = useQuery("suggestions", async () => getSuggestions(image), {
    enabled: Boolean(image),
  });
  return query;
};
