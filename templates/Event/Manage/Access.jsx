import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

import Registration from "components/Access/Registration";

export default function EventAccessTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Registration />
      </TabNavigation>
    </AppLayout>
  );
}
