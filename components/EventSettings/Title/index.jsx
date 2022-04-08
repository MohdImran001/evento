import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";

import { useField } from "formik";

export default function Title() {
  const [field, meta] = useField("title");
  const isError = meta.touched && meta.error;
  return (
    <FormControl isInvalid={isError} isRequired>
      <Input
        id="title"
        type="text"
        bg="white"
        name="title"
        size="lg"
        {...field}
        fontFamily="Poppins"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
