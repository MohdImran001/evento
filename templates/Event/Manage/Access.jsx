import { Skeleton, Alert, AlertIcon } from "@chakra-ui/react";
import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";
import Registration from "components/Access/Registration";

import useEventAccess from "lib/hooks/queries/useEventAccess";

export default function EventAccessTemplate({ event_id }) {
  const { isLoading, isError, access, error } = useEventAccess(event_id);

  if (isError) {
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          Oops! an unexpected error occured while retrieving data from the
          server
        </Alert>
      </TabNavigation>
    </AppLayout>;
  }

  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Skeleton isLoaded={!isLoading}>
          <Registration event_id={event_id} access={access} />
        </Skeleton>
      </TabNavigation>
    </AppLayout>
  );
}
