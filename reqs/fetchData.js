async function fetchData(url) {
  const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
  if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);

  return res.json();
}

export default fetchData;
