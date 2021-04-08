import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const activeTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    activeTranslation();
    console.log(translated);
    //console.log("new text or LANG");
  }, [language, text]);
  return <h1 class="ui header">{translated}</h1>;
};

export default Convert;
