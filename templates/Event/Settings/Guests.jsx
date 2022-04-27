import { Box } from "@chakra-ui/react";

import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

import GuestsList from "components/Guests/List";

export default function EventGuestsTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Box border="1px solid #EEE" borderRadius="10px">
          <GuestsList event_id={event_id} />
        </Box>
      </TabNavigation>
    </AppLayout>
  );
}
