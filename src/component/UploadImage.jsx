import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { sendUrltoBackend } from "../utility/sendUrltoBackend";
import Loader from "./Loader";
import ImageUploadBox from "./ImageUploadBox";
import TextBox from "./TextBox";

const connectionString = import.meta.env.VITE_CONNECTION_STRING;
const containerName = import.meta.env.VITE_CONTTAINER_NAME;
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

function UploadImage() {
  const [file, setFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setisLoading(true);
      const blobName = file.name;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const uploadResponse = await blockBlobClient.upload(file, file.size);
      console.log(`Upload success: ${uploadResponse.requestId}`);
      const text1 = await sendUrltoBackend(blockBlobClient.url);
      setDisplayText(text1);
    } catch (error) {
      alert("something went wrong try again later");
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {displayText ? (
        <TextBox displayText={displayText} />
      ) : (
        <>
          {" "}
          <ImageUploadBox handleFileChange={handleFileChange} fileName={file} />
          <button onClick={handleUpload}>Upload</button>
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default UploadImage;
