export async function sendUrltoBackend(url) {
  const res = await fetch("http://127.0.0.1:3000/api/v1/getImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  const data = await res.text();
  return data;
}
