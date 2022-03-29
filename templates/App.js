import EventList from "components/EventList";
import AppLayout from "layouts/AppLayout";

export default function App({ user }) {
  return (
    <AppLayout user={user}>
      <EventList />
    </AppLayout>
  );
}
