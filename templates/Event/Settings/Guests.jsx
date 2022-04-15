import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

export default function EventGuestsTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <div> Hii, from Guests!</div>
      </TabNavigation>
    </AppLayout>
  );
}
