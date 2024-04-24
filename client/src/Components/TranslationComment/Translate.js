export const translate = async (commentBody) => {
  const url =
    "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=hi&api-version=3.0&profanityAction=NoAction&textType=plain";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "8f77a2a545mshf120f1b646b7bbcp1ea787jsnbf836e7c7f14",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    body: [
      {
        Text: "i am a girl",
      },
    ],
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("translated text", result);
  } catch (error) {
    console.error(error);
  }
};

translate();
