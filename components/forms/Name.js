import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export default function NameField() {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" bg="white" />
    </FormControl>
  );
}
