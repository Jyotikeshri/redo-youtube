import axios from "axios";

export const translator = async (text) => {
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      "to[0]": "en",
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "8f77a2a545mshf120f1b646b7bbcp1ea787jsnbf836e7c7f14",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [
      {
        Text: text,
      },
    ],
  };

  try {
    const response = await axios.request(options);
    const translatedText = response.data[0].translations[0].text;
    return translatedText;
  } catch (error) {
    console.error(error);
  }
};
