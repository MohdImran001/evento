import {
  Box,
  Button,
  Icon,
  Text,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { PlusIcon } from "@heroicons/react/solid";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import NameField from "core/elements/Form/Name";
import EmailField from "core/elements/Form/Email";

import useRegisterAttendee from "lib/hooks/mutations/useRegisterAttendee";

export default function AddNewGuestsModal({ isOpen, onClose, event_id }) {
  const registerAttendee = useRegisterAttendee(event_id);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Name should not exceed 15 characters")
            .required("Name cannot be empty"),
          email: Yup.string()
            .email("Oops! There is a mistake in the email")
            .required("Email cannot be empty"),
        })}
        onSubmit={(values) => {
          registerAttendee.mutate(values, {
            onSuccess: () => {
              setTimeout(() => {
                registerAttendee.reset();
              }, 3000);
            },
          });
        }}
      >
        <Form>
          <ModalContent>
            <ModalHeader>Invite Guests</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {registerAttendee.isIdle && (
                <Alert status="info">
                  <AlertIcon />
                  Your invited guests will recieve an email
                </Alert>
              )}
              {registerAttendee.isSuccess && (
                <Alert status="success" variant="left-accent">
                  <AlertIcon />
                  New guest has been added successfully
                </Alert>
              )}
              {registerAttendee.isError && (
                <Alert status="error" variant="left-accent">
                  <AlertIcon />
                  There was an error. Please try again.
                </Alert>
              )}
              <br />
              <NameField />
              <EmailField />
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                bg="brandBlue"
                color="white"
                _hover={{ bg: "brandBlue" }}
                _active={{ bg: "brandBlue" }}
                leftIcon={<Icon as={PlusIcon} />}
                isLoading={registerAttendee.isLoading}
              >
                Add Guest
              </Button>
            </ModalFooter>
          </ModalContent>
        </Form>
      </Formik>
    </Modal>
  );
}
