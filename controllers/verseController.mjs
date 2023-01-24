// 1. PACKAGES
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// 2. CONSTANTS
const API_URL = 'https://api.esv.org/v3/passage/text/';
const queryParam = 'John+11';

// 3. AXIOS CALL
export default function initVerseController() {
  const fetchPassage = async () => {
    try {
      console.log(API_URL);
      const config = {
        method: 'get',
        url: API_URL,
        headers: {
          Authorization: `Token ${process.env.ESV_API_TOKEN}`,
        },
        params: {
          q: queryParam,
          'include-passage-references': false,
          'include-verse-numbers': true,
          'include-first-verse-numbers': true,
          'include-footnotes': false,
          'include-headings': true,
          'include-short-copyright': false,
          'indent-paragraphs': 0,
        },
      };

      const response = await axios(config);
      console.log(response.data);
      return response.data.passages[0];
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    fetchPassage,
  };
}

// console.log("test");
// fetchPassage();
// console.log("test2");
