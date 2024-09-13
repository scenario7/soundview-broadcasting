async function fetchData(url) {
  const res = await fetch(url, { next: { revalidate: 10 } }); // Cache for 10 seconds
  if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);

  return res.json();
}

export default fetchData;
