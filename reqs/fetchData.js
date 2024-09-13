async function fetchData(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);

  return res.json();
}

export default fetchData;
