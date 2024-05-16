export async function sendUrltoBackend(url) {
  const res = await fetch(import.meta.env.VITE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  const data = await res.text();
  return data;
}
