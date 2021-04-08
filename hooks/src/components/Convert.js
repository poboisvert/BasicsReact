import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [limitText, setlimitText] = useState(text);

  useEffect(() => {
    // Avoi dcalling API each new letter
    const timerId = setTimeout(() => {
      setlimitText(text);
    }, 500);

    // if text change cancel timeout
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const activeTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: limitText,
            target: language.value,
            key: env.API_URL,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    activeTranslation();
    console.log(window.env.API_KEY);
    //console.log("new text or LANG");
  }, [language, limitText]);
  return <h1 class="ui header">{translated}</h1>;
};

export default Convert;
