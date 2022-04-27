import {
  Table,
  Box,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

export default function EventGuestsTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Box border="1px solid #EEE" borderRadius="10px">
          <TableContainer>
            <Table variant="simple" size="md">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th> Registered on </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ shadow: "lg" }}>
                  <Td>Mohammad Imran</Td>
                  <Td>mohdimran.work@gmail.com</Td>
                  <Td>{new Date().toString()}</Td>
                </Tr>
                <Tr _hover={{ shadow: "lg" }}>
                  <Td>Mohammad Imran</Td>
                  <Td>mohdimran.work@gmail.com</Td>
                  <Td>{new Date().toString()}</Td>
                </Tr>
                <Tr _hover={{ shadow: "lg" }}>
                  <Td>Mohammad Imran</Td>
                  <Td>mohdimran.work@gmail.com</Td>
                  <Td>{new Date().toString()}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </TabNavigation>
    </AppLayout>
  );
}
