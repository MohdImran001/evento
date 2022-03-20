import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

import { useField } from "formik";

export default function NameField() {
  const [field, meta] = useField("name");
  const isError = meta.touched && meta.error;

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" bg="white" name="name" {...field} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
