import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  // Function component storage
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    // Fetch
    /*     axios
      .get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "Json",
          srsearch: term,
        },
      })
      .then((res) => {
        console.log(res.data);
      }); */
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
        //
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term, results.length]);

  const resultsHTML = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Visit
          </a>
        </div>
        <div className="content">
          <div className="header">{result.header}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ui celled list">{resultsHTML}</div>
    </div>
  );
};

export default Search;
