import { useQuery } from "react-query";
import axios from "axios";
const API_URL = "https://578d75b68c5c.ngrok.io/image-search/";

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

  // return {
  //   products: [
  //     {
  //       imageUrl: "https://picsum.photos/200/300?1",
  //       url: "https://google.com",
  //       id: 1,
  //     },
  //     {
  //       imageUrl: "https://picsum.photos/200/300?2",
  //       url: "https://google.com",
  //       id: 2,
  //     },
  //     {
  //       imageUrl: "https://picsum.photos/200/300?3",
  //       url: "https://google.com",
  //       id: 3,
  //     },
  //     {
  //       imageUrl: "https://picsum.photos/200/300?4",
  //       url: "https://google.com",
  //       id: 4,
  //     },
  //   ],
  // };
}

export const useSuggestions = (image) => {
  const query = useQuery("suggestions", async () => getSuggestions(image), {
    enabled: Boolean(image),
  });
  return query;
};
