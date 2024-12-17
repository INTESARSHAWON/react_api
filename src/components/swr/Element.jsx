import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

export default function Element() {
  const { data, error } = useSWR("https://catfact.ninja/fact", fetcher, {
    suspense: true,
  });
  //   console.log(data);
  if (error) {
    return <h1>There was an error</h1>;
  }

  return (
    <div>
      <h1>Get quotes using swr(fetch) API</h1>
      <div>{data.fact}</div>
    </div>
  );
}
