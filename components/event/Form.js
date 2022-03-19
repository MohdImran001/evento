import React from "react";
import { useFormikContext } from "formik";

import { Button, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { BadgeCheckIcon } from "@heroicons/react/solid";

import NameField from "../forms/Name";
import EmailField from "../forms/Email";

const RegistrationForm = ({ isRegistered }) => {
  const { isSubmitting } = useFormikContext();

  if (isRegistered) {
    return (
      <>
        <StarIcon w={4} h={4} mb="1rem" color="red.500" />
        <StarIcon w={4} h={4} mb="1rem" color="red.500" />
        <StarIcon w={4} h={4} mb="1rem" color="red.500" /> <br />
        <Text color="gray.800">
          Hooray, you have been registered for the event, we will send you a
          confirmation email
        </Text>
      </>
    );
  }

  return (
    <>
      <NameField />
      <EmailField />
      <Button
        leftIcon={<Icon as={BadgeCheckIcon} color="#FFFFFF" w={5} h={5} />}
        colorScheme="red"
        variant="solid"
        mt="2rem"
        type="submit"
        isLoading={isSubmitting}
      >
        Register
      </Button>
    </>
  );
};

export default RegistrationForm;
