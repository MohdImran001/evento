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
} from "@chakra-ui/react";
import { PlusIcon } from "@heroicons/react/solid";

export default function AddNewGuestsModal({ isOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite Guests</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Custom backdrop filters!</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {}}
            bg="brandBlue"
            color="white"
            _hover={{ bg: "brandBlue" }}
            _active={{ bg: "brandBlue" }}
            leftIcon={<Icon as={PlusIcon} />}
          >
            Add Guest
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
