export async function sendUrltoBackend(url) {
  const res = await fetch("https://extract-text-from-image-backend.vercel.app/api/v1/getImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  const data = await res.text();
  return data;
}
