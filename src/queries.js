import { useQuery } from "react-query";
const API_URL = "https://315654057c3e.ngrok.io/image-search/";

async function getSuggestions(image) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: image.split(",")[1] }),
    });
    const res = await response.json();
    console.log(res);
    return await response.json();
  } catch (error) {
    console.log(error);
  }

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
  const query = useQuery(["suggestions", image], () => getSuggestions(image), {
    enabled: Boolean(image),
  });
  return query;
};
