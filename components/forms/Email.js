import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function EmailField() {
  return (
    <FormControl mt="1rem" isRequired>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input id="email" type="email" bg="white" />
      <FormHelperText>We&apos;ll never share your email.</FormHelperText>
    </FormControl>
  );
}
