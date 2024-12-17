import axios from "axios";
import { useEffect, useState } from "react";

export default function Element() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      setQuote(res.data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Get quotes using fetch API</h1>
      <div>{quote?.fact}</div>
    </div>
  );
}
