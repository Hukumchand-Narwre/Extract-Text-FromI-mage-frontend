import React, { useEffect, useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
const connectionString = import.meta.env.VITE_CONNECTION_STRING;

const containerName = import.meta.env.VITE_CONTTAINER_NAME; //"uplloadimage";
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

function UploadImage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    async function sendUrltoBackend() {
      const res = await fetch("http://127.0.0.1:3000/api/v1/getImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: imageUrl }),
      });
      const data = await res.json();
      console.log(data);
    }
    if (imageUrl) {
      sendUrltoBackend();
    }
  }, [imageUrl]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const blobName = file.name;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadResponse = await blockBlobClient.upload(file, file.size);
    console.log(`Upload success: ${uploadResponse.requestId}`);
    setImageUrl(blockBlobClient.url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;
