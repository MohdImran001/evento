import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { useField } from "formik";

export default function EmailField() {
  const [field, meta] = useField("email");
  const isError = meta.touched && meta.error;
  return (
    <FormControl mt="1rem" isInvalid={isError} isRequired>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      <Input
        id="email"
        type="email"
        bg="white"
        name="email"
        mt="1rem"
        {...field}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
