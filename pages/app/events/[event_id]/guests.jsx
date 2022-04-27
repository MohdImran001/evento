import EventGuestsTemplate from "templates/Event/Settings/Guests";

export default function GuestsSettings({ event_id }) {
  return <EventGuestsTemplate event_id={event_id} />;
}

export async function getServerSideProps(context) {
  const { event_id } = context.params;
  return {
    props: {
      event_id: event_id,
    },
  };
}
