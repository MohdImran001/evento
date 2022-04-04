import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

export default function EventEditTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <div> Hii, from edit!</div>
        {/* Edit Component, useEffect(), react-query */}
      </TabNavigation>
    </AppLayout>
  );
}
