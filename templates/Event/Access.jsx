import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

export default function EventAccessTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <div> Hii, from Access!</div>
      </TabNavigation>
    </AppLayout>
  );
}
