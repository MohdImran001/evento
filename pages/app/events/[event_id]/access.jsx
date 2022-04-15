import EventAccessTemplate from "templates/Event/Settings/Access";

export default function Access({ event_id }) {
  return <EventAccessTemplate event_id={event_id} />;
}

export async function getServerSideProps(context) {
  const { event_id } = context.params;
  return {
    props: {
      event_id: event_id,
    },
  };
}
