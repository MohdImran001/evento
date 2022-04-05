import { useState } from "react";
import { useS3Upload, getImageData } from "next-s3-upload";
import Image from "next/image";

import {
  Box,
  Button,
  Flex,
  Alert,
  AlertIcon,
  Progress,
} from "@chakra-ui/react";

export default function FileUpload() {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  // let [height, setHeight] = useState();
  // let [width, setWidth] = useState();

  let { FileInput, openFileDialog, uploadToS3, files } = useS3Upload();

  let handleFileChange = async (file) => {
    setError("");

    if (!/\.(jpe?g|png)$/i.test(file.name)) {
      setError("Only jpg, jpeg or png image files are allowed");
      return;
    }

    try {
      let { width } = await getImageData(file);
      if (width < 2000) {
        setError("Image should be atleast 2000px wide");
        return;
      }

      setUploading(true);
      let { url } = await uploadToS3(file);
      setImageUrl(url);
      setUploading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <Box>
      <FileInput onChange={handleFileChange} />
      <Button onClick={openFileDialog}>Upload file</Button>
      <br />
      {uploading && (
        <Progress size="xs" colorScheme="blue" mt="1rem" isIndeterminate />
      )}
      {error.length > 0 && (
        <Alert status="error" mt="1rem">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {!imageUrl && (
        <Box border="2px solid #EEE" p="12rem" borderRadius="5px" mt="1rem">
          <Flex justifyContent="center" alignItems="center">
            Your cover image will appear here.
          </Flex>
        </Box>
      )}
      {imageUrl && (
        <Box mt="1rem">
          <Image
            src={imageUrl}
            width="1060px"
            height="450px"
            alt="main-event-cover-image"
            objectFit="cover"
          />
        </Box>
      )}
    </Box>
  );
}
