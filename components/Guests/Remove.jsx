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
  Heading,
} from "@chakra-ui/react";
import { XIcon } from "@heroicons/react/solid";

import useRemoveGuest from "lib/hooks/mutations/useRemoveGuest";

export default function RemoveGuestModal({ isOpen, onClose, event_id, guest }) {
  const removeGuest = useRemoveGuest(event_id);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove Guest</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {removeGuest.isSuccess && (
            <Alert status="success" variant="left-accent">
              <AlertIcon />
              Guest has been removed successfully
            </Alert>
          )}
          {removeGuest.isError && (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              There was an error. Please try again.
            </Alert>
          )}
          <Text>
            Are you sure, you want to remove <b>{guest?.name} ?</b>
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            leftIcon={<Icon as={XIcon} />}
            isLoading={removeGuest.isLoading}
            onClick={() =>
              removeGuest.mutate(guest?._id, {
                onSuccess: () => {
                  setTimeout(() => {
                    removeGuest.reset();
                  }, 2000);
                  onClose();
                },
              })
            }
          >
            Remove Guest
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
